/* exported checkAboutMe, resetAboutMe */
var aboutMeForm = document.getElementById('about-me-form');
var aboutMeResponse = document.getElementById('about-me-response');

function checkAboutMe() {
    var elements = aboutMeForm.elements;

    var pizzaInput = elements.pizza;
    var likePizza = pizzaInput.value;

    var pieInput = elements.pie;
    var likePie = pieInput.value.toLowerCase();

    var bandInput = elements.band;
    var likeBand = bandInput.value.toLowerCase();

    var correct = 0;


    if(likePizza.toLowerCase() === 'yes') {
        // run this code if they type pizza!!
        correct = correct + 1;
        pizzaInput.classList.add('correct');
        pizzaInput.classList.remove('incorrect');
    }
    else if(likePizza !== '') {
        pizzaInput.classList.add('incorrect');
        pizzaInput.classList.remove('correct');
    }
    
    if(likePie.toLowerCase() === 'yes') {
        // run this code if they type pie!!
        correct = correct + 1;
        pieInput.classList.add('correct');
        pieInput.classList.remove('incorrect');
    }
    else if(likePie !== '') {
        pieInput.classList.add('incorrect');
        pieInput.classList.remove('correct');
    }

    if(likeBand.toLowerCase() === 'beatles') {
        // run this code if they type Beatles!!
        correct = correct + 1;
        bandInput.classList.add('correct');
        bandInput.classList.remove('incorrect');
    } 
    else if(likeBand !== '') {
        bandInput.classList.add('incorrect');
        bandInput.classList.remove('correct');
    }
    aboutMeResponse.textContent = 'Nice! You got ' + correct + ' out of 5 correct. You really know me!';
}

function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var pizzaInput = elements.pizza;
    var pieInput = elements.pie;
    var bandInput = elements.band;

    pizzaInput.classList.remove('correct');
    pizzaInput.classList.remove('incorrect');
    pieInput.classList.remove('correct');
    pieInput.classList.remove('incorrect');
    bandInput.classList.remove('correct');
    bandInput.classList.remove('incorrect');

    aboutMeResponse.textContent = '';
}