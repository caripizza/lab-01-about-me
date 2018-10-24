/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';

// eslint-disable-next-line
var xIsTheNumber = 0;

function tryQuerySelector() {
    var elementsInputs = document.querySelectorAll('input[name="elements"]');

    for(var i = 0; i < elementsInputs.length; i++) {
        var input = elementsInputs[i];
        console.log(input.value, input.id, input.checked);
    }

    var selectedElementsInput = document.querySelector('input[name="elements"]:checked');

    if(selectedElementsInput) {
        console.log(selectedElementsInput.value);
    }
    else {
        console.log('no meal selected');
    }

    console.log(xIsTheNumber);
}