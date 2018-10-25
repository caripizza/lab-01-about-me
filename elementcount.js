/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';

var elementsResponse = document.getElementById(['elements-response']);
// var selectedElements = document.querySelectorAll('input[name="elements"]:checked');

function tryQuerySelector() {
    var elements = document.querySelectorAll('input[name="elements"]:checked');
    
    for(var i = 0; i < elements.length; i++) {
        var number = document.querySelectorAll(elements[i].value);
        console.log(elements[i].value, number.length);

        elementsResponse.textContent = elementsResponse.textContent + 'You selected:\r\n' + [elements[i].value] + ', which appears ' + [number.length] + ' times.\r\n';
    }
}
