// math.js - Example of a module
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

// Default export
export default class Calculator {
    static square(x) {
        return x * x;
    }
}

// Display function for the webpage
function displayModuleExample() {
    const a = 10, b = 5;
    const output = [
        `Addition: ${a} + ${b} = ${add(a, b)}`,
        `Subtraction: ${a} - ${b} = ${subtract(a, b)}`,
        `Multiplication: ${a} × ${b} = ${multiply(a, b)}`,
        `Square of ${a}: ${Calculator.square(a)}`
    ].join('\n');
    
    document.getElementById('module-output').innerHTML = output.replace(/\n/g, '<br>');
}

// Make the display function globally available
window.displayModuleExample = displayModuleExample;
