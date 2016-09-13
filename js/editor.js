//var stepCount = 0;

var listComponents = [
    { name: 'Row', type: 'row', icon: 'fa fa-th-large', area: 'form', target: 'form' },
    { name: 'Wizard', type: 'wizard', icon: 'fa fa-youtube-play', area: 'wizard', target: 'wizard' },
    { name: 'Form', type: 'form', icon: 'fa fa-list-alt', area: 'wizard', target: 'wizard-step' }
];

let idFormEditing;
let idStepEditing;


function mountFormEditor(idStep, idForm) {
    idStepEditing = idStep;
    idFormEditing = idForm;

    if ($('#formEditor').length > 0) {
        $('#formEditor').remove();
    }

    var row2 = $('<div>').addClass('row').attr('id', 'formEditor');;

    var toolbarFormCol = $('<div>').addClass('col-sm-1 col-min-padding');
    var componentsForm = $('<ul>').attr('id', 'componentsForm');
    toolbarFormCol.append(componentsForm);
    row2.append(toolbarFormCol);

    var fieldsListCol = $('<div>').addClass('col-sm-5 col-min-padding');
    var modelFields = $('<ul>').attr('id', 'modelFields');
    fieldsListCol.append(modelFields);
    row2.append(fieldsListCol);

    var formAreaArea = $('<div>').addClass('col-sm-6 col-min-padding');
    var dropzone = $('<div>').addClass('fields-dropzone bg-info').attr('id', 'formDropzone');;
    formAreaArea.append(dropzone);
    row2.append(formAreaArea);

    container.append(row2);

    mountForm();

    mountComponents('form');

    mountFields();
}

function mountForm() {
    let form = getFormById(getStepById(wizard.steps, idStepEditing), idFormEditing);
    /*
        $.each(form.items, function(i, item) {
            let element;
            if (item.kind == 'group') {
                element = newItemFormEditor(item.name, 'row', item.name);
                $.each(item.items, function(j, groupItem) {
                    let groupElement = newItemFormEditor(groupItem.name, 'field', groupItem.name);
                    element.append(groupElement);
                });

            } else if (item.kind == 'field') {
                element = newItemFormEditor(item.name, 'field', item.name);
            }
            $('#formDropzone').append(element);
        });
    */

    $.each(form.items, function(i, item) {
        if (!item.group) {
            item['field'] = true;
        } else {
            $.each(item.items, function(j, subitem) {
                if (!item.group) {
                    subitem['field'] = true;
                }
            });
        }
    });

    //let itemForm = $('<div>')
    let itemForm = $('<div>').attr('rv-each-item', 'items')
        .addClass('drop-item')
        .attr('rv-class-drop-field', 'item.field')
        .attr('rv-class-fields-dropzone', 'item.group')
        .attr('rv-class-row-dropzone', 'item.group');

    //
    itemForm.append($('<span>').text('{ item.title } ( #{ item.id } )'));

    itemForm.append($('<span>').addClass('id-field').css({ display: 'none' }).text('{ item.id }'));

    let details = $('<details>').append($('<summary>'));
    itemForm.append(details);

    let props = $('<div>').append('<label>More Data</label><input type="text" />');
    details.append(props);

    let removeBtn = $('<div>').addClass('btn btn-danger btn-sm remove-btn').append($('<i>').addClass('fa fa-trash'));
    itemForm.append(removeBtn);




    let subItemForm = $('<div>').attr('rv-each-subitem', 'item.items')
        .addClass('drop-item').addClass('drop-field');
    /*.attr('rv-class-drop-field', 'subitem.field')
    .attr('rv-class-fields-dropzone', 'subitem.group')
    .attr('rv-class-row-dropzone', 'subitem.group')*/


    itemForm.append(subItemForm);

    subItemForm.append($('<span>').text('{ item.title } ( #{ item.id } )'));

    subItemForm.append($('<span>').addClass('id-field').css({ display: 'none' }).text('{ subitem.id }'));

    let subDetails = $('<details>').append($('<summary>'));
    subItemForm.append(subDetails);

    let subProps = $('<div>').append('<label>More Data</label><input type="text" />');
    subDetails.append(subProps);

    let subRemoveBtn = $('<div>').addClass('btn btn-danger btn-sm remove-btn').append($('<i>').addClass('fa fa-trash'));
    subItemForm.append(subRemoveBtn);



    //let headerForm = $('<div>').addClass('header').text('{ form.title }');
    /*
        $('#formDropzone').css({
            background: '#ccc'
        });
    */
    /*console.log('>> ' + form.items.length);
     */
    /* let obj = {
             name: 'obj1',
             items: [{name:'teste1'}, {name:'teste2'}, {name:'teste3'}]
         };*/

    $('#formDropzone').append(itemForm);
    //$('#formDropzone').append('<div class="drop-item drop-field" rv-each-item="items">{ item.name }</div>');

    rivets.bind($('#formDropzone'), form);
}

function newItemFormEditor(id, dataType, text) {
    var element = $('<div>').attr("data-id", id);
    var details = $('<details>').append($('<summary>')).text("");
    element.append(details);
    element.addClass('drop-item');
    var props = details.append($('<div>').append('<label>More Data</label><input type="text" />'));
    if (dataType == "row") {
        element.addClass('row-dropzone fields-dropzone');
        var row = $('<div>').addClass('row');
        var rowLabel = $('<div>').addClass('col-sm-3');
        var rowInput = $('<div>').addClass('col-sm-8');
        rowLabel.append($('<span>').text("Group title: "));
        rowInput.append($('<input>').addClass('form-control input-sm'));

        row.append(rowLabel).append(rowInput);
        element.prepend(row);
    } else {
        element.addClass('drop-field');
        disableItem(id);
        //details.text(ui.draggable.text());
        element.prepend($('<span>').text(text))
    }
    //

    var removeBtn = $('<div>').addClass('btn btn-danger btn-sm remove-btn').append($('<i>').addClass('fa fa-trash'));
    //var $removeBtn = $('<button type="button" class="btn btn-default btn-xs remove"><span class="glyphicon glyphicon-trash"></span></button>');

    removeBtn.click(function() {
        removeItem($(this));

    });

    element.append(removeBtn);

    return element;
}

function mountComponents(area) {
    $.each(listComponents, function(c, component) {
        let icon = $('<i>').addClass(component.icon).addClass('fa-fw fa-2x');
        //let link = $('<span>').addClass('btn btn-warning btn-sm').text(component.name).prepend(icon);
        let link = $('<span>').addClass('component').prepend(icon);
        let item = $('<li>').addClass('copy-' + component.type).attr('data-type', component.type).attr('data-area', component.area).append(link);

        if (component.area == area) {
            if (component.target == 'form') {
                $('#componentsForm').append(item);
            } else if (component.target == 'wizard' || component.target == 'wizard-step') {
                $('#componentsWizard').append(item);
            }
        }
    });

    updateAll();
}

function mountFields() {
    $.each(models, function(m, model) {

        $.each(model.fields, function(f, field) {
            let type;

            if (field.type.indexOf('.') == -1) {
                type = field.type;
            } else {
                type = field.type.match('.([^.]*)$')[1];
            }

            let iconClass = getIcon(type);

            let icon = $('<i>').addClass('fa').addClass(iconClass.icon).addClass('fa-fw');
            let link = $('<span>').addClass('btn btn-sm').addClass(iconClass.color).text(field.name).prepend(icon);
            let item = $('<li>').attr('id', field.name).addClass('drag-field').attr('data-type', field.type).append(link);

            if (usedFields[field.name]) {
                item.addClass("drag-disabled");
            }


            $('#modelFields').append(item);
        });

    });

    updateAll();
}



function addStep(nameStep, idStep) {
    let step = $('<li>').addClass('step-item').attr('id', idStep);
    let label = $('<h3>').addClass('label-step').text(nameStep);
    let icon = $('<i>').addClass('fa fa-2x fa-chevron-right').addClass('float-icon');
    let forms = $('<ul>').addClass('list-forms-step').attr('id', 'list-' + idStep);

    step.append(label);
    step.append(icon);
    step.append(forms);
    //$('#wizardForms').append();

    $('#wizardDropzone').append(step);

    // step.append(("#addStep");

    step.droppable({
        activeClass: 'dropzone-active border-dashed',
        greedy: true,
        accept: ".copy-form",
        drop: function(e, ui) {
            var dataType = ui.draggable.attr("data-type");
            addForm('list-' + step.attr('id'), 'form-' + (step.find('.form-item').length + 1));

        }
    });

    return step;

    updateAll();
}

function callBackAddStep(nameStep) {
    let id = nameStep.toString().toLowerCase().trim().replace(/[^a-z0-9]+/gi, '-');
    addStep(nameStep, id);
}

function addForm(idStep, idForm) {
    let form = $('<li>').addClass('form-item').attr('id', idForm).attr('data-step-id', idStep);
    $('#' + idStep).append(form);
}

function getIcon(type) {
    let iconClass;
    switch (type) {
        case 'long':
            iconClass = { icon: 'fa-hashtag', color: "color-long" };
            break;
        case 'Integer':
            iconClass = { icon: 'fa-hashtag', color: "color-integer" };
            break;
        case 'Boolean':
            iconClass = { icon: 'fa-check-square', color: "color-boolean" };
            break;
        case 'BigDecimal':
            iconClass = { icon: 'fa-hashtag', color: "color-big-decimal" };
            break;
        case 'String':
            iconClass = { icon: 'fa-usd', color: "color-string" };
            break;
        case 'Date':
            iconClass = { icon: 'fa-calendar', color: "color-date" };
            break;
        case 'Timestamp':
            iconClass = { icon: 'fa-clock-o', color: "color-time-stamp" };
            break;
        case 'List':
            iconClass = { icon: 'fa-list', color: "color-list" };
            break;
        case 'class':
            iconClass = { icon: 'fa-file-text', color: "color-class" };
            break;
        default:
            iconClass = { icon: 'fa-asterisk', color: "color-default" };
            break;
    }

    return iconClass;
}

function reEnableContainer() {
    $('.dropzone-active').removeClass('dropzone-active');
    console.log("reEnableContainer()");
}

function updateAll() {
    console.log('updateAll()');
    
    
   /* dragula([document.querySelector('#formDropzone')])

    .on('drag', function(el) {
        // add 'is-moving' class to element being dragged
        el.classList.add('is-moving');
        console.log('drag');
    })
    .on('dragend', function(el) {
        console.log('dragend');
        // remove 'is-moving' class from element after dragging has stopped
        el.classList.remove('is-moving');

        // add the 'is-moved' class for 600ms then remove it
        window.setTimeout(function() {
            el.classList.add('is-moved');
            window.setTimeout(function() {
                el.classList.remove('is-moved');
            }, 600);
        }, 100);
    });*/




    $('.remove-btn').click(function() {
        removeItem($(this));

    });

    $('.drag-field').draggable({
        cursor: "move",
        cursorAt: { top: 10, left: 56 },
        appendTo: 'body',
        opacity: 0.7,
        helper: 'clone',
        start: function() {
            //$(this).addClass("opa");

        },
        stop: function() {
            // $(this).removeClass("opa");
            //reEnableContainer();
        }
    });

    $('.copy-row').draggable({
        appendTo: 'body',
        cursor: "move",
        cursorAt: { top: 10, left: 10 },
        opacity: 0.7,
        helper: 'clone',
        stop: function() {
            //reEnableContainer();
        }
    });
    //draggable
    //helper: myHelper
    /*
    function myHelper( event ) {
      return '<div id="draggableHelper">I am a helper - drag me!</div>';
    }
    */

    /*        $('.dropzone').droppable({
                activeClass: 'dropzone-active',
                greedy: true,
                accept: ":not(.ui-sortable-helper)",
                drop: function(e, ui) {}
            });
    */

    /*  $('.copy-form').draggable({
          cursor: "move",
          cursorAt: { top: 10, left: 10 },
          appendTo: 'body',
          opacity: 0.7,
          helper: 'clone'
      });*/

    /* $('.copy-wizard').draggable({
         cursor: "move",
         cursorAt: { top: 10, left: 10 },
         appendTo: 'body',
         opacity: 0.7,
         helper: 'clone'
     });*/


    /*$(".child").on("dropover", function(event, ui) {
        setTimeout(function () {
            $('.container').removeClass('hovered');     
        }, 1);
    });
    */


    /*$('.extra-forms-container').droppable({
        activeClass: 'dropzone-active border-dashed',
        greedy: true,
        accept: ".copy-form",
        drop: function(e, ui) {
            var dataType = ui.draggable.attr("data-type");
            addForm('extraForms', "xx");
        }
    });*/
    /*     $('.wizard-dropzone').droppable({
             activeClass: 'dropzone-active border-dashed',
             greedy: true,
             accept: ".copy-wizard",
             drop: function(e, ui) {
                 var dataType = ui.draggable.attr("data-type");
                 createModalRequestVariable(callBackAddStep, 'Step', 'Step name', 'Save', 'Step ' + ($('.step-item').length + 1 ));
             }

         });*/



    $('.fields-dropzone').droppable({
        /*classes: {
            "ui-droppable-hover": "ui-state-hover"
        },*/
        activeClass: 'dropzone-active border-dashed',
        greedy: true,
        /*hoverClass: 'bg-success',*/
        accept: ".copy-row, .drag-field", // Reject clones generated by sortable

        drop: function(e, ui) {
            var id = ui.draggable.attr("id");
            var dataType = ui.draggable.attr("data-type");
            let text = ui.draggable.text()

            let element = newItemFormEditor(id, dataType, text);


            $(this).append(element);

            //ui.parent().detach();
            updateAll();
        }
    });






    $('.fields-dropzone').sortable({
        opacity: 0.7,
        items: '.drop-item',
        activeClass: 'dropzone-active border-dashed',

        dropOnEmpty: true,
        axis: "y",
        sort: function() {
            //console.log('ahhhh sort');
            // gets added unintentionally by droppable interacting with sortable
            // using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
            //$( this ).removeClass( "active" );
        },
        stop: function() {
            //console.log('ahhhh stop');
            reEnableContainer();
        }
    });

    /* $('#wizardDropzone').sortable({

     });*/

    // $( ".wizard-dropzone" ).selectable();
    // $( ".list-forms-step" ).selectable();
    //$( "#extraForms" ).selectable();
    //$( ".list-forms-step" ).selectable();
}




function removeItem(element) {
    var itemId = element.parent().find('.id-field').text();
    console.log('removeItem(): ' + itemId);

    if (itemId != undefined && itemId.length > 2) {

        if (element.parent().hasClass('row-dropzone')) {
            $.each($(element).parent().find('.drop-item'), function(i, item) {
                enableItem($(item).attr("data-id"));
            });
        } else {
            enableItem(itemId);
        }
        element.parent().detach();
    }
}

function disableItem(id) {
    usedFields[id] = true;

    $('#' + id).addClass("drag-disabled");
}

function enableItem(id) {
    usedFields[id] = false;

    $('#' + id).removeClass("drag-disabled");
}



updateAll();





/* $( ".connectedSortable" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection(); */



//mountEditor();



