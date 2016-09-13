function mountWizardEditor() {
    var componentsWizard = $('<ul>').attr('id', 'componentsWizard');
    $('#wizardEditor').append(componentsWizard);

    let icon = $('<i>').addClass('fa fa-fw fa-2x fa-plus-square');
    let link = $('<span>').addClass('component').prepend(icon);
    let item = $('<li>').addClass('copy-wizard').attr('data-type', 'wizard').attr('data-area', 'wizard').append(link);

    item.click(function(event) {
        newStep();
    });

    componentsWizard.append(item);
}

function newForm(idStep) {
 let step = getStepById(wizard.steps, idStep);

    let length = step.forms.length + 1;

    let form = {
        title: 'Form ' + step.order + '-' + length,
        id: 'form' + step.order + '-' + length,
        url: "#",
        icon: "fa fa-book",
        enabled: false,
        order: length,
        items: [
            /*{ kind: 'field', name: "Daniel", type: "String", required: true },*/

        ]
    };

    step.forms.push(form);

    updateBtnHandler();
    mountPreviews();
}

