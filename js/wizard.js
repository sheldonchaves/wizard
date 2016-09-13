var stepId = null;
var step;
var formId = null;
var form;
var formContainer;
var wizardForms;
var wizardNav;

function mountWizard() {

    wizardNav = $('<ul>').addClass('nav nav-pills nav-justified  steps-nav').attr('id', 'wizardNav'); //nav-justified

    $.each(wizard.steps, function(s, step) {
        var item = $('<li>').addClass('step-item');
        var link = $('<a>').addClass('step-link')
            .attr('data-id', step.id)
            .attr('href', '#')
            .append($('<i>').addClass(step.icon).addClass('step-icon'))
            .append($('<label>').text(step.title))

        if (step.enabled != true) {
            item.addClass('disabled');
        }

        link.click(function(e) {
            e.preventDefault();
            loadStep($(this).attr('data-id'));
        });

        item.append(link);
        wizardNav.append(item);
    });

    container.append(wizardNav);

    addWizardExtraUi();
}

function addWizardExtraUi() {
    wizardForms = $('<div>').addClass('content').attr('id', 'wizardForms');
    container.append(wizardForms);

    if (wizard.steps[0].enabled == false) {

        wizardForms.append($('<h1>').text('Start here!')).append($('<button>').addClass('btn btn-primary btn-lg').text('Start').attr('id', 'start'));

        $('#start').click(function(e) {
            e.preventDefault();
            loadStep(wizard.steps[0].id);
        });

    } else {
        loadStep(stepId);
    }
}

function changeProgress(value) {
    //progressBar.attr('style', 'width: ' + value + '%;');
}

function loadStep(id, gotoLast) {
    step = getStepById(wizard.steps, id);
    step.enabled = true;
    stepId = id;

    $('.step-link').parent().removeClass('active').find('i.step-icon').removeClass('fa-2x');
    $('.step-link[data-id="' + stepId + '"]').parent().addClass('active').removeClass('disabled').find('i.step-icon').addClass('fa-2x');

    listForms(gotoLast);
}

function getNextFormId() {
    return $("li.form-item.active").next().first().find('a').attr('data-id');
}

function nextForm() {
    let nextFormId = getNextFormId();
    if (nextFormId != undefined) {
        loadForm(nextFormId);
    } else {
        nextStep();
    }
}

function prevForm() {
    let prevFormId = $("li.form-item.active").prev().first().find('a').attr('data-id');
    if (prevFormId != undefined) {
        loadForm(prevFormId);
    } else {
        prevStep();
    }
}

function getNextStepId() {
    return $("li.step-item.active").next().first().find('a.step-link').attr('data-id');
}

function nextStep() {
    nextStepId = getNextStepId();
    if (nextStepId != undefined) {
        loadStep(nextStepId);
    } else {
        finishWizard();
    }
}

function prevStep() {
    let prevStepId = $("li.step-item.active").prev().first().find('a.step-link').attr('data-id');
    if (prevStepId != undefined) {
        loadStep(prevStepId, true);
    }
}

function finishWizard () {
    wizardForms.empty();
    wizardForms.append($('<h1>').text('Finalizou o preenchimento do documento!')).append($('<button>').addClass('btn btn-primary btn-lg').text('Voltar ao inicio!').attr('id', 'finish'));
}

function bindValues() {
    $.each(form.items, function(i, field) {
        if (field.group) {
            $.each(field.items, function(j, gfield) {
                setValueInObject(gfield);
            });
        } else {
            setValueInObject(field);
        }
    });
}

function setValueInObject(field) {
    if (field.type == "Select") {
        field.value = $("#" + field.id + " option:selected").val();
    } else {
        field.value = $("#" + field.id).val();
    }
}

function listForms(gotoLast) {
    var list = $('<ul>').addClass('form-nav list-group col-md-3');
    formContainer = $('<form>').addClass('col-md-9 col-no-padding');

    if (!$(step.forms).size() > 0) {
        wizardForms.empty();
        wizardForms = $('<div>').addClass('content').append($('<h1>').text('No forms in this Step!'));
        container.append(wizardForms);
        return;
    }

    $.each(step.forms, function(i, form) {
        var link = $('<a>').addClass('form-link').text(form.title).attr('href', '#').attr('data-id', form.id).prepend($('<i>').addClass(form.icon + " fa-fw"));
        var item = $('<li>').addClass('form-item list-group-item').append(link);

        if (form.enabled != true) {
            item.addClass('disabled');
        }

        list.append(item);

        link.click(function(e) {
            e.preventDefault();
            loadForm($(this).attr('data-id'));
        });
    });

    wizardForms.empty();
    wizardForms.append(list);
    wizardForms.append(formContainer);

    if (gotoLast == true) {
        loadForm($(step.forms)[step.forms.length - 1].id);
    } else {
        loadForm($(step.forms)[0].id);
    }
}

function loadForm(formId) {

    $('.form-link').parent().removeClass('active');
    $('.form-link[data-id="' + formId + '"]').parent().addClass('active').removeClass('disabled');;

    formContainer.empty();

    formContainer.unbind().on('keyup keypress', pressKey);

    form = getFormById(step, formId);

    form.enabled = true;

    let panel = $('<div>').addClass('panel panel-default');
    let panelHeader = $('<div>').addClass('panel-heading').text(form.title); //.append($('<i>').addClass('fa fa-exclamation-circle not-saved').hide());
    let panelBody = $('<div>').addClass('panel-body');

    let panelFooter = $('<div>').addClass('panel-footer');

    let buttomGroup = $('<div>').addClass('btn-group btn-group-right');

    let next;
    // ultimo passo do ultimo step
    if (getNextStepId() == undefined && getNextFormId() == undefined) {
        next = $('<button>').addClass('btn btn-action btn-success disabled').attr('id', 'next').text("Finalizar ").append($('<i>').addClass('fa fa-chevron-circle-right'));
    } else {
        next = $('<button>').addClass('btn btn-action btn-success disabled').attr('id', 'next').text("Next ").append($('<i>').addClass('fa fa-chevron-circle-right'));
    }

    let prev = $('<button>').addClass('btn btn-action btn-warning').attr('id', 'prev').append($('<i>').addClass('fa fa-chevron-circle-left')).append(' Previous');
    buttomGroup.append(prev);
    buttomGroup.append(next);

    panel.append(panelHeader);
    panel.append(panelBody);
    panel.append(panelFooter);
    panelFooter.append(buttomGroup);

    mountGroupItems(panelBody, $(form.items));

    formContainer.append(panel);

    if ($("li.form-item.active").prev().first().find('a').attr('data-id') == undefined && $("li.step-item.active").prev().first().find('a.step-link').attr('data-id') == undefined) {
        prev.addClass('disabled')
    }

    /*
    VERIFICAR SE o anterior esta enabled
    */

    next.click(function(e) {
        e.preventDefault();
        bindValues();
        nextForm();
    });

    prev.click(function(e) {
        e.preventDefault();
        prevForm();
    });

    checkEnableNext();
}

function mountGroupItems(target, items, group) {
    let classGroup;
    if (group) {
        if (items.length == 2) {
            classGroup = 'col-md-6';
        } else if (items.length == 3) {
            classGroup = 'col-md-4';
        } else if (items.length == 4) {
            classGroup = 'col-md-3';
        } else {
            classGroup = 'col-md-2';
        }
    }

    items.each(function(i, item) {
        if (!item.group) {
            let group = $('<div>').addClass('form-group').addClass(classGroup);
            let label = $('<label>').addClass('control-label').attr('for', item.id).text(item.id);
            let input;

            switch (item.type) {
                case 'Select':
                    input = populateInputSelect(item);
                    break;
                default:
                    input = $('<input>').addClass('form-control-sm form-control').attr('id', item.id).attr('type', 'text');
                    break;
            }

            if (item.value != undefined) {
                input.val(item.value);
            }

            input.on("input change paste keyup", checkEnableNext);

            if (item.required == true) {
                input.attr('required', true);
            }

            group.append(label).append(input);
            $(target).append(group);
        } else {
            let group = $('<div>').addClass('row');

            let panel = $('<div>').addClass('panel panel-default form-panel-group');
            let panelHeading = $('<div>').addClass('panel-heading').text(item.id);
            panel.append(panelHeading);

            let panelBody = $('<div>').addClass('panel-body');
            panel.append(panelBody);

            let panelBodyGroup = $('<div>').addClass('row');
            panelBody.append(panelBodyGroup);
           /* <div class="panel panel-default">
              <div class="panel-heading">Panel heading without title</div>
              <div class="panel-body">
                Panel content
              </div>
            </div>*/
            group.append(panel);


            let groupItems = $(item.items);
            panelBodyGroup.append(mountGroupItems(panelBodyGroup, groupItems, true));
            $(target).append(group);
        }
    });

    return target;
}

function pressKey(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
        e.preventDefault();
        return false;
    }
}

function checkEnableNext() {
    if ($('input:invalid').size() > 0) {
        $('#next').addClass('disabled');
    } else {
        $('#next').removeClass('disabled');
    }
    $('.not-saved').show();

    calcProgress();
}

function calcProgress() {
    //console.log(">> " + $('[required]').length);

    let totalFields = 0;

    /*$.each(wizard, function(s, step) {
        $.each(step.forms, function(f, form) {
            $.each(form.fields, function(fi, field) {
                totalFields ++;
            });     
        });
    });*/

    var pattern = /^a/;
    var matchingKeys = Object.keys(wizard.steps).filter(function(key) {
        return pattern.test(key);
    });

    changeProgress();
}


function populateInputSelect(item) {
    let select = $('<select>').addClass('form-control-sm form-control').attr('id', item.id);

    $.each(item.options, function(i, option) {
        select.append('<option value=' + option.key + '>' + option.value + '</option>');
    });

    if (item.value != null) {
        select.val(item.value);
    }
    return select;  
}

var listItems = $('.nav-item a');

function initializeWizard() {
    listItems.each(function(index, el) {
        $(this).click(function(e) {
            e.preventDefault();
            if (!$(this).hasClass('disabled')) {
                loadStep($(this).attr('data-id'));
            }
        });
    });
}

initializeWizard();