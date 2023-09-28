// Browser Object Model (BOM)
var age = prompt('How old are you?');

if (age < 18) {
    alert('You must be at least 18 years old to enter our website');
    window.location = 'https://www.google.com';
};

var consent = window.confirm('Do you consent to recording?');
if (consent == false) {
    window.location = 'https://www.google.com';
};

window.open('https://www.mozilla.org');