function mountEditorList() {

    clearNullForms();

    clearAllContent();


    let divWizard = $('<div>').attr('id', 'wizardEditor');
    let listStep = $('<ul>').addClass('editor-list-steps');
    divWizard.append(listStep);
    container.append(divWizard);

    let itemStep = $('<li>').addClass('editor-step').attr('rv-each-step', 'steps');
    let header = $('<div>').addClass('header')
        .append($('<h3>').text('{ step.title }')) /*.attr('data-id', step.id)*/ ;
    itemStep.append(header);


    let content = $('<div>').addClass('content');
    itemStep.append(content);


    let iconEdit = $('<i>').addClass('fa fa-pencil-square icon-edit');
    header.prepend(iconEdit);

    let iconToggle = $('<i>').addClass('fa fa-chevron-circle-down icon-toggle');
    header.prepend(iconToggle);

    let iconClose = $('<i>').addClass('fa fa-plus-circle icon-close');
    header.prepend(iconClose);


    let iconAddForm = $('<i>').addClass('fa fa fa-list-alt add-form');
    content.prepend(iconAddForm);

    content.prepend($('<span>').addClass('step-index').text('{ %step% }'));

    let listProps = $('<div>').addClass('fields');

    let stepModel = wizard.steps[0];

    for (var key in stepModel) {
        if (key != 'forms') {
            let inputContainer = $('<div>').addClass('form-group');

            let labelProp = $('<label>').text(key + ':');
            inputContainer.append(labelProp);

            if (key == 'icon') {
                let icon = $('<i>').attr('rv-class', 'step.icon');
                inputContainer.append(icon);
            }

            let inputProp = $('<input>').addClass('form-control input-sm').addClass('key-' + key).attr('type', 'text').attr('rv-value', 'step.' + key).val('{ step.' + key + ' }');
            inputContainer.append(inputProp);


            listProps.append(inputContainer);
        }
    }


    let removeBtn = $('<button>').attr('type', 'button').addClass('btn btn-danger remove-step').text('Remover Aba');
    removeBtn.prepend($('<i>').addClass('fa fa-trash'));
    listProps.append(removeBtn);

    content.append(listProps);

    let listForm = $('<ul>').addClass('editor-list-forms');
    content.append(listForm);

    let itemForm = $('<li>').addClass('editor-form').attr('rv-each-form', 'step.forms');
    let headerForm = $('<div>').addClass('header').text('{ form.title }');
    itemForm.append(headerForm);

    let iconFormEdit = $('<i>').addClass('fa fa-pencil-square icon-edit');
    headerForm.prepend(iconFormEdit);

    /*let iconFormToggle = $('<i>').addClass('fa fa-chevron-circle-down icon-toggle');
    headerForm.prepend(iconFormToggle);

    let iconFormClose = $('<i>').addClass('fa fa-plus-circle icon-close');
    headerForm.prepend(iconFormClose);*/

    let contentForm = $('<div>').addClass('content'); //.text('{ form.id }');
    itemForm.append(contentForm);

    let preview = $('<div>').addClass('preview'); //.text('{ form.id }');
    contentForm.append(preview);

    listForm.append(itemForm);

    //hidden // 
    let inputPropId = $('<input>').addClass('form-control input-sm').attr('type', 'hidden').attr('rv-value', 'form.id').addClass('key-id').val('{ form.id }');
    contentForm.prepend(inputPropId);

    contentForm.prepend($('<span>').addClass('form-index').text('{ %form% }'));

    listStep.append(itemStep);

    rivets.bind($('#wizardEditor'), wizard);

    printOBJ();

    mountWizardEditor();

    updateBtnHandler();
    updateAllUiHandler();
    mountPreviews();
}

function mountPreviews() {
    $.each($('.editor-form > .content'), function(c, content) {
        let idForm = $(this).find('.key-id').val();
        let idStep = $(this).closest('.editor-step').find('.key-id').val();

        let form = getFormById(getStepById(wizard.steps, idStep), idForm);

        let preview = $(this).find('.preview');
        preview.empty();

        $.each(form.items, function(i, item) {
            let line = $('<span>').addClass('form-preview-line');
            if (item.group) {
                $.each(item.items, function(j, groupItem) {
                    let item = $('<span>').addClass('form-preview-input');
                    line.append(item);
                });
            } else {
                let item = $('<span>').addClass('form-preview-input');
                line.append(item);
            }

            preview.append(line);
        });

        if (form.items.length == 0) {
            preview.append($('<i>').addClass('fa fa-2x fa-exclamation-triangle')).append(' Form vazio!');
        }
    });
}

function clearNullForms() {
    $.each(wizard.steps, function(s, step) {
        $.each(step.forms, function(f, form) {
            if (form == null) {
                step.forms.splice(f, 1);
            }
        });
    });
}

function updateIndexSteps() {
    $.each($('.editor-step'), function(i, step) {
        let idStep = $(step).find('.key-id').val();
        let objStep = getStepById(wizard.steps, idStep);
        objStep.order = $(step).index() + 1;
    });
    sortListObjects(wizard.steps, 'order');

}

function updateBtnHandler() {

    $('.editor-step > .header > .icon-edit').unbind().click(function() {
        $('.editor-step.editing').removeClass('editing');
        $(this).closest('.editor-step').toggleClass('editing').find('.content').show();
    });

    $('.editor-step > .header > .icon-toggle').unbind().click(function() {
        $(this).toggleClass('icon-opened');
        $(this).closest('.editor-step').removeClass('editing').find('.content').toggle();
    });

    $('.editor-step > .header > .icon-close').unbind().click(function() {
        $('.editor-step.editing').removeClass('editing');
    });

    $('.editor-step > .content > .add-form').unbind().click(function() {
        let idStep = $(this).closest('.editor-step').find('.key-id').val();
        newForm(idStep);
    });

    $('.editor-step > .content .remove-step').click(function() {
        let idStep = $(this).closest('.editor-step').find('.key-id').val();
        removeStepById(idStep);
    });

    $('.editor-form > .header > .icon-edit').unbind().click(function() {
        $('.editor-form.editing').removeClass('editing');
        $(this).closest('.editor-form').toggleClass('editing');
        let idForm = $(this).closest('.editor-form').find('.key-id').val();
        let idStep = $(this).closest('.editor-step').find('.key-id').val();

        mountFormEditor(idStep, idForm);
    });

    /*$('.editor-form > .header > .icon-toggle').unbind().click(function() {
    $(this).toggleClass('icon-opened');
    $(this).closest('.editor-form').find('.content').toggle();
    });*/
}

function updateAllUiHandler() {
    let idStepOrigin;
    let indexStepOrigin;

    $('.editor-list-steps').sortable({
        connectWith: '.editor-list-steps',
        handle: '.header',
        axis: "x",
        cursorAt: { top: 10, left: 10 },
        placeholder: 'editor-step-placeholder',
        start: function(event, ui) {
            ui.item.addClass('dragging');
        },
        stop: function(event, ui) {
            ui.item.removeClass('dragging');
            updateIndexSteps();
            mountEditorList();
        }
    });

    $('.editor-list-forms').sortable({

        connectWith: '.editor-list-forms',
        handle: '.header',
        cursorAt: { top: 10, left: 10 },
        placeholder: 'editor-form-placeholder',
        cancel: '.editor-form-toggle',
        start: function(event, ui) {
            ui.item.addClass('dragging');
            idStepOrigin = $(ui.item).closest(".content").find('.key-id').val();
            indexStepOrigin = $(ui.item).closest(".content").find('.step-index').text();
        },
        stop: function(event, ui) {

            ui.item.removeClass('dragging');
            let idStepDestiny = $(ui.item).closest(".content").find('.key-id').val();
            let idForm = $(ui.item).find('.key-id').val();

            let indexStepDestiny = $(ui.item).closest(".content").find('.step-index').text();

            let indexForm = $(ui.item).find('.form-index').text();

            var form = wizard.steps[indexStepOrigin].forms[indexForm];

            delete wizard.steps[indexStepOrigin].forms[indexForm];

            wizard.steps[indexStepDestiny].forms.splice(ui.item.index(), 0, form);

            $(this).sortable("cancel");
            mountEditorList();
        }
    });

}

function newStep() {
    let newId = generateNextStepId();

    let order = wizard.steps.length + 1;

    let newStep = {
        title: "Aba " + newId,
        id: "step" + newId,
        icon: "fa fa-university",
        enabled: false,
        order: order,
        forms: []
    }

    wizard.steps.push(newStep);

    updateBtnHandler();
    updateAllUiHandler();

   // setTimeout(function() {
    gotoHorizontalEnd($('.editor-list-steps'));
    //}, 200);

}

function generateNextStepId() {
    let ids = {};

    let nextId = wizard.steps.length + 1;

    $.each(wizard.steps, function(i, step) {
        ids[step.id] = true;
    });

    while (ids[('step' + nextId)] == true) {
        nextId++;
    }

    return nextId;
}

function getStepById(steps, id) {
    let obj = $.grep(steps, function(step) {
        if (step.id === id) {

            return step
        }
    });
    return obj[0];
}


function removeStepById(id) {

    $.each(wizard.steps, function(i, step) {
        if (step.id == id) {
            console.log('removeStepById(' + i + ')');
            let step = wizard.steps.splice(i, 1);
            return false;
        }
    });

    updateIndexSteps();
    printOBJ();
}
