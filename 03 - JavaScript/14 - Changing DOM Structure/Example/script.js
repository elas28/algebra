function check() {
    var main = document.getElementById('main');
    var tags = main.getElementsByTagName('button');
    var num = tags.length;

    alert(`There are ${num} buttons in #main.`);
}

function get() {
    var klasa = document.querySelector('.footer');
    var id = document.querySelector('#footer');
    var name = document.querySelector("input[name='footer']");

    console.log(klasa);
    console.log(id);
    console.log(name);
}

(function () {
    var buttons = document.querySelectorAll('button');

    for (var i = 0; i < buttons.length; i++) {
        console.log(buttons[i].textContent);
    }

})();

function newElement() {
    var noviDiv = document.createElement('div');
    noviDiv.innerText = 'Ovo je moj novi div';
    noviDiv.className = 'moj-novi-div';
    noviDiv.id = 'id-novog-diva';

    var roditelj = document.getElementById('main');
    roditelj.appendChild(noviDiv);
}

function removeElement() {
    var element = document.getElementById('id-novog-diva');

    // Dohvaćamo roditelja uz pomoć PARENT NODE
    var roditelj = element.parentNode;

    // Uklanjamo DIJETE iz RODITELJA
    roditelj.removeChild(element);
}

function removeElement2() {
    var element = document.getElementById('id-novog-diva');

    element.remove();
}

// Parent Node
var dijete = document.querySelector('p');
var roditelj = dijete.parentNode;
console.log(roditelj);

// Child Node
var lista = document.getElementById('mojaLista');
var djeca = lista.childNodes;

console.log(djeca.length);

console.log(djeca[1].innerText);

/**
 * innerText was non-standard, textContent was standardized earlier.
 * 
 * innerText returns the visible text contained in a node, while textContent returns the full text. For example, on the following HTML <span>Hello <span style="display: none;">World</span></span>, innerText will return 'Hello', while textContent will return 'Hello World'.
 */

function myFunction() {
    document.body.style.backgroundColor = 'pink';
}

window.onload = function () {
    console.log('Page fully loaded');
    document.body.style.backgroundColor = 'beige';
}

function changeColor(newColor) {
    var element = document.getElementById('main');
    element.style.color = newColor;
}

function remove() {
    document.getElementById('main').style.display = 'none';
}

function submit() {
    console.log(document.getElementById('name').value);
    console.log(document.getElementById('surname').value);
}