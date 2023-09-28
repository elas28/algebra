/* 
 * Copyright 2022 Nino Škuflić <nino.skuflic@predavaci.algebra.hr>.  
 */

/*----------------------------------------------------------------------------* 
 * TABLE OF CONTENTS
 * - Data Types & Operators
 * - Varibale Scope & Functions
 * - Arrays
 * - Switch
 * - Objects
 * - Converting JSON into an object
 * - Converting an object into a JSON
 * - String interpolation
 * - Constructor
 * - Prototypes
 * - Rest operator
 * - Spread operator
 * - Window methods
 * - Regular Expressions (RegExp)
 * - Matrix
 * - For loop
 * - Do while loop
 * - Event listeners
 * - DOM Manipulation
 * - Classes
 * - Async Functions
 * - Arrow Functions
 * - API (connecting to API)
 * - Cookies
 * - Local storage
 * - JEST Test
 * - RegExp List
 *----------------------------------------------------------------------------*/

/**************************************************
 * DATA TYPES & OPERATORS
**************************************************/

var a = 6;
var b = '5';
console.log(typeof (a));


// ARITHMETIC
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log((a * b).toFixed(2)); // Convert a number to string, keeping only two decimals
console.log(a / b);
console.log(a / 0); // Infinity
console.log(a / Infinity); // 0
console.log(a % 6);

// COMPARISON
console.log(a == b); // Equal operator
console.log(a === b); // Strict equal
console.log('' == 0); // Falsy values

// LOGICAL
console.log((5 < 6) && (6 == 6));
console.log((5 < 6) || (6 == 6));
console.log(!(5 < 6));

// CONDITIONAL (TERNARY)
console.log(1 == 1 ? 'This is equal!' : 'This is not equal!'); // This is equal!
console.log(1 === '1' ? 'This is equal!' : 'This is not equal!'); // This is not equal!

// i++ vs ++i;
var i = 42;
alert(i++); // shows 42
alert(i); // shows 43
i = 42;
alert(++i); // shows 43
alert(i); // shows 43

/**************************************************
 * ARRAYS
**************************************************/

// Creating an array
// var items = new Array('cat', 'bee', 'ant eater');

// Array literal
let items = ['Plates', 'Knife', 'Glass'];
//console.log(items)

console.log(items[1]);
console.log(items.length)

// Push a new item into the array
items.push('Fork');

// Sort the Array
items.sort();

for (let i = 0; i < items.length; i++) {
    console.log('Items of array are: ' + items[i]);
}

// Get the last item in an array
console.log(items[items.length - 1])

// Reverse sort the array
console.log(items.reverse())

/**************************************************
 * SWITCH
**************************************************/

const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: 'Mangoes and papayas are $2.79 a pound.'
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

/**************************************************
 * OBJECTS
**************************************************/

// Creating an object by using the new Object() method
const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);

myCar.color = 'Blue';
console.log(myCar);

// Creating an object by using object literal
const person = {
    firstName: 'Nino',
    lastName: 'Škuflić',
    id: 115648972,
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

console.log(person.id);
console.log(person.lastName);
console.log(person.fullName());

// Converting JSON into an object
//myJSON = "{ 'name':'Nino', 'age':24, 'car': 'toyota' }";
//myObject = JSON.parse(myJSON);

//console.log(myObject);
//console.log(myObject.age);

// Another object example
const phones = {
    brand: {
        manufacturer: 'Apple',
        model: 'iPhone 13 Pro'
    },
    color: ['Sierra Blue', 'Silver', 'Gold', 'White'],
    price: 999,
    display: '6.1-inch display',
    qty: 184,
    checkStock: function () {
        if (this.qty > 0) {
            return 'in stock';
        } else {
            return 'out of stock';
        }
    }
};

console.log(phones.brand.model);
console.log(phones.checkStock());

// Converting an object into a JSON
const myPhonesObject = JSON.stringify(phones);
console.log(myPhonesObject);

/**************************************************
 * STRING INTERPOLATION
**************************************************/
console.log(`The selected phone ${phones.brand.model} is ${phones.checkStock()} and it's price is $${phones.price}.`);

/**************************************************
 * WINDOW METHODS
**************************************************/

// window.open();
// window.close();
console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(window.location.hostname);

/* The following code is also commented out because it is simply annoying. Feel free to uncomment it if you need it!

window.location = 'https://www.example.com'; > This is commented out, otherwise our index.html would end up on example.com!
window.alert('Hello! I am an alert box!');
console.log('Return from confirm: ' + window.confirm('Do you like JavaScript?'));
console.log('Return from prompt: ' + window.prompt('Please enter your name', 'Nino Škuflić')); */


/**************************************************
 * REGULAR EXPRESSIONS (REGEXP)
 * 
 * TASK: Create an input field in HTML, which is used to enter the phone number, together with the SUBMIT button. 
 * When the user enters their phone number and hits submit, verify that the CORRECT phone number is entered using regular expressions. 
 * If it is, alert the phone number, if not, alert that the number is incorrect. You MUST NOT use the HTML attribute type.
**************************************************/

let input = 1; // Imagine that this is some input inputted by a user
let regex = new RegExp('[0-9]'); // By using RegExp [0-9] we are allowing the user only to input the numbers from 0 to 9
console.log(regex.test(input)); // Test if our input will pass the validation. Try changing the value of input variable to 'a' instead of 1

let regex2 = new RegExp('[a-z]');
let name2 = 'Nino';
console.log(regex2.test(name2))

/**************************************************
 * FOR LOOP
**************************************************/

const array5 = ['Volvo', 'BMW', 'Audi', 'Toyota'];

for (let i = 0; i < array5.length; i++) {
    console.log(array5[i]);
};

/**************************************************
 * DO WHILE LOOP
**************************************************/

let result = '';
let j = 0;

do {
    j = j + 1;
    result = result + j;
} while (j < 5);

console.log(result);

/**************************************************
 * DOM MANIPULATION
**************************************************/

document.getElementsByClassName('footer-text')[0].innerHTML = `&copy; ${new Date().getFullYear()} Nino Škuflić - All rights reserved.<br>The width of your screen is ${window.innerWidth}px, and the height is ${window.innerHeight}px.<br> Oh, and by the way - today is ${Date()}.`;