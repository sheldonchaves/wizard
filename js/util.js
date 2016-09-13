/*function createModalRequestVariable(callBackMethod, title, variableLabel, buttomLabel, defaultValue) {
    let modal = $('<div>').addClass('modal fade').attr('tabindex', '-1')
        .append($('<div>').addClass('modal-dialog')
            .append($('<div>').addClass('modal-content')
                .append($('<div>').addClass('modal-header')
                    .append($('<h4>').addClass('modal-title').text(title)))
                .append($('<div>').addClass('modal-body')
                    .append($('<input>').addClass('form-control').val(defaultValue).attr('id', 'inputModal')))
                .append($('<div>').addClass('modal-footer')
                    .append($('<button>').addClass('btn btn-success').text(buttomLabel).attr('id', 'saveButtomModal')))
            )
        );

    modal.find('#saveButtomModal').click(function() {
        sendValue();
    });

    modal.on('shown.bs.modal', function(e) {
        modal.find('#inputModal').focus().keypress(function(e) {
            if (e.which == 13) {
                sendValue();
            }
        });
    });

    function sendValue() {
        let value = modal.find('#inputModal').val();
        if (value.length > 1) {
            modal.modal('hide');
            callBackMethod(value);
            modal.detach();
        }
    }
    modal.modal();
}*/

/*
// helper to dump the object in a <pre>
*/


/*rivets.formatters.and = function(comparee, comparator) {
    return comparee && comparator;
};*/
//<li value="1" rv-class-selected="step | = 1" rv-on-click="setStep">Step 1</li>


function escape(s) {
    return (s || '').replace(/[<>]/g, function(m) {
        return {
            '<': '&lt;',
            '>': '&gt;',
        }[m]
    })
}
$('#output code').html(escape(JSON.stringify(wizard, '', 2)));

/*

*/
function sortListObjects(list, prop) {
    list.sort(function(a, b) {
        return parseFloat(a[prop]) - parseFloat(b[prop]);
    });
    return list;
}




function getFormById(step, id) {
    let obj = $.grep(step.forms, function(form) {
        if (form.id === id) {
            return form
        }
    });
    return obj[0];
}

function gotoHorizontalEnd(container) {
    let target = $(container);
    let last = target.find("li").last();
    let width = target.width();
    let outerWidth = last.outerWidth(true);
    let lastIndex = last.index();
    let hSize = 0;
    let allItems = target.find('li');
    let i;
    for (i = 0; i < lastIndex; i++) {
        hSize += $(allItems[i]).outerWidth(true);
    }
    target.animate({ scrollLeft: Math.max(0, hSize - (width - outerWidth) / 2) }, 300);
}

$('#output').click(function() {
    $(this).find('code').toggle();
});
$('#output code').toggle();

function trace(obj) {
        if (typeof obj === 'object') {
            console.log("Object: " + JSON.stringify(obj));
        } else if (typeof obj === 'function') {
            console.log(obj.name + "();");
        } else {
            console.log(obj);
        }
        //function
        //JSON.stringify(obj);
    }

function printOBJ() {
    $('#output code').html(escape(JSON.stringify(wizard, '', 2)));
}