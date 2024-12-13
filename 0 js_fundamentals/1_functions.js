// JavaScript Functions Tutorial

// 1. Basic Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// 2. Function Expression
const add = function(a, b) {
    return a + b;
};

// 3. Arrow Function
const multiply = (x, y) => x * y;

// 4. Function with Default Parameters
function welcome(name = "Guest") {
    return `Welcome, ${name}!`;
}

// Display functions for the webpage
function displayGreeting() {
    document.getElementById('greeting-output').textContent = greet("John");
}

function displayAddition() {
    document.getElementById('addition-output').textContent = `5 + 3 = ${add(5, 3)}`;
}

function displayMultiplication() {
    document.getElementById('multiplication-output').textContent = `4 × 2 = ${multiply(4, 2)}`;
}

function displayWelcome() {
    document.getElementById('welcome-output').textContent = welcome();
}

function displayWelcomeNamed() {
    document.getElementById('welcome-output').textContent = welcome("Alice");
}
