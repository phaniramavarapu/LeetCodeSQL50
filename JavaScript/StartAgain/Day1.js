/* //JavaScript is a programming language that is used to create interactive effects within web browsers.
// It is a high-level, interpreted language that is widely used for web development.
// JavaScript is an essential part of web applications, allowing for dynamic content and user interaction.
// It is often used in conjunction with HTML and CSS to create modern web pages.
// JavaScript is an event-driven, functional, and imperative language.
// It is a versatile language that can be used for both front-end and back-end development.
// JavaScript is an object-oriented language that allows for the creation of reusable code.
// It is a prototype-based language that uses prototypes instead of classes for inheritance.
// JavaScript is a single-threaded language that uses an event loop to handle asynchronous operations.
// It is a language that is constantly evolving, with new features and updates being added regularly.
// JavaScript is a language that is supported by all modern web browsers.
// It is a language that is widely used in the web development community.
// It is a language that has a large ecosystem of libraries and frameworks.
// It is a language that is used by millions of developers around the world.
// It is a language that is easy to learn and has a low barrier to entry.
// It is a language that is used for both client-side and server-side programming.
// It is a language that is used for both web and mobile development.
// It is a language that is used for both front-end and back-end development.
// It is a language that is used for both web and desktop applications.
// It is a language that is used for both web and game development.
// It is a language that is used for both web and IoT development.
// It is a language that is used for both web and machine learning development.
// It is a language that is used for both web and data science development.
// It is a language that is used for both web and artificial intelligence development.
//Variables in JavaScript
// Variables are containers for storing data values.
// In JavaScript, there are three ways to declare a variable:
// var, let, and const.
// var is the old way of declaring a variable and has function scope.
// let is the new way of declaring a variable and has block scope.
// const is used to declare a constant variable that cannot be reassigned.
// Variables can hold different data types, including:
// strings, numbers, booleans, arrays, objects, and functions.
// Strings are used to represent text and are enclosed in quotes.
// Numbers are used to represent numeric values.
// Booleans are used to represent true or false values.
// Arrays are used to store multiple values in a single variable.
// Objects are used to store key-value pairs.

var name = "John"; // string
var age = 30; // number
var isStudent = true; // boolean
var hobbies = ["reading", "gaming", "coding"]; // array
var person = { // object
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: true
};
let x = 10; // block scope variable
const PI = 3.14; // constant variable
//what is the scope of var, let and const
// var has function scope, let has block scope, and const has block scope.
// var can be redeclared and updated, let can be updated but not redeclared, and const cannot be redeclared or updated.
console.log(x); // 10

// var is function scoped
if(true) {
    var z = 10;
    console.log(x); // 10
}
console.log(z); // 10
var z = 20; // redeclaring var
console.log(z); // 20
// let is block scoped
if(true) {
    let c = 10;
    console.log(c); // 10
}
//console.log(c); // ReferenceError: y is not defined
let c = 50; // redeclaring let
console.log(c); // 20
// const is block scoped
if(true) {
    const d = 100;
    console.log(d); // 10
    //const d = 200; // SyntaxError: Identifier 'd' has already been declared
}
//console.log(d); // ReferenceError: y is not defined
const d = 100; // redeclaring const
console.log(d); // 20 */

/* let name1 = "Phani";
let age = 30;
let favoriteFood = "Pizza";

console.log("My name is " + name1 + ", I am " + age + " years old, and my favorite food is " + favoriteFood + ".");
console.log(`My name is ${name1}, I am ${age} years old, and my favorite food is ${favoriteFood}.`);
 */

//hobbies list
/* let myHobbiesList = ["Reading", "Gaming", "Coding"];
console.log("My hobbies are: " + myHobbiesList + ".");
console.log(`My hobbies are: ${myHobbiesList}.`);       
console.log(`My hobbies are: ${myHobbiesList.join(", ")}.`); //  join method to convert array to string*/

//object
let profile = {
    name: "Phani",
    age: 30,
    favoriteFood: "Pizza",
    hobbies: ["Reading", "Gaming", "Coding"]
}

console.log("Name is: " + profile.name);
console.log("Age is: " + profile.age);
console.log("Hobbies are: " + profile.hobbies.join(", "));