let editor = false;
let btnSwitch = $('#switchEditorWizard');
let container = $('.container-fluid');

btnSwitch.click(function(event) {
    switchEditor();
});

function switchEditor(){
    clearAllContent();
    let icon = btnSwitch.find('i');
    if (editor) {
        icon.removeClass('fa-eye');
        icon.addClass('fa-pencil-square');

        mountEditorList();
    }else {
        icon.addClass('fa-eye');
        icon.removeClass('fa-pencil-square');

        mountWizard();
    }
    editor = !editor;
}

function clearAllContent(){
    if ($('#formEditor').length > 0) {
        $('#formEditor').remove();
    }

    if ($('#wizardEditor').length > 0) {
        $('#wizardEditor').remove();
    }

    if ($('#wizardNav').length > 0) {
        $('#wizardNav').remove();
    }

    if ($('#wizardForms').length > 0) {
        $('#wizardForms').remove();
    }
}

switchEditor();