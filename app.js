// Variables
let name = 'Matthew';
let age = 14;

// Merging variable <- Concatenation

// declaring variable
let about = 'Hi, I am Mathew and am  years old.';
let myAge = 14;

// reassign the about variable
about = 'Hi, I am Mathew and am ' + myAge + ' years old.';

// console log the value
console.log(about);

// Console.log

console.log('Hi am: ', name);

// This is will leave a warning in the console
console.warn('This is a Warning');

// This is will leave a error in the console
console.error('This is a Error');

// Selecting html elements with getElementById

let title = document.getElementById('title');

// This will console log the HTML element
console.log(title);

// Method
// You can you a method called innerHTML to change titles' HTML
title.innerHTML = '<p>Hello, World</p>';

// To get the text inside of the title HTML element we use innerText
console.log(title.innerText);

// Code Excersie One

let aboutMe = document.getElementById('about');
let OldText = aboutMe.innerText;
aboutMe.innerText = 'Hello I learned Javascript';

//CODE MINI PROJECT
// 1. Create a script to concat a string and a variable together
// 2. Using .innerHTML and getElementById change the innerHTML of an element to be what your variable is

let element = document.getElementById('Info');
let elementText = element.innerText;
let changeTextTo = `Hello Man ${elementText}`;

element.innerText = changeTextTo;

console.log(element);

// STRING MANIPULATION
// e.g:
// .toLowerCase()
// .toUpperCase()
// .split()
// .join()
// .slice()
// .substr()

let paragraphNode = document.getElementById('paragraph');
let paragraph = paragraphNode.innerText;

// this consoloe everything
console.log(paragraphNode);
// this only consoles the innerText
console.log(paragraph);

// .something() <- this means to do something
let toUpperCase = paragraph.toUpperCase();
let toLowerCase = paragraph.toLowerCase();
let firstTenChar = paragraph.substr(10);

paragraph.innerText.toUpperCase();
