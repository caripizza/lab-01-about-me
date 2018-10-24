/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';

var elementsResponse = document.getElementById('elements-response');

function tryQuerySelector() {
    var elements = document.querySelectorAll('input[name="elements"]:checked');
    
    for(var i = 0; i < elements.length; i++) {
        var number = document.querySelectorAll(elements[i].value);
        console.log(elements[i].value, number.length);
        elementsResponse.textContent = 'You selected ' + [(elements[i].value, number.length)];
    }
}