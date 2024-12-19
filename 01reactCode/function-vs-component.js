// JavaScript Function Example
function greeting(name) {
    return "Hello, " + name;
}

// Simulated React Component
class ReactComponent {
    constructor(props) {
        this.state = { name: props.name };
    }

    render() {
        return `<h3>Hello, ${this.state.name}</h3>`;
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.updateUI();
    }

    updateUI() {
        const output = document.getElementById('react-output');
        output.innerHTML = this.render();
        output.classList.add('active');
        setTimeout(() => output.classList.remove('active'), 1000);
    }
}

// Initialize React-like component
const reactComponent = new ReactComponent({ name: "John" });

// Function to run JS example
function runJsExample() {
    const output = document.getElementById('js-output');
    output.textContent = greeting("John");
    output.classList.add('active');
    setTimeout(() => output.classList.remove('active'), 1000);
}

// Function to simulate React example
function simulateReactExample() {
    reactComponent.setState({ name: "John" });
}

// Function to update JS greeting
function updateJsGreeting() {
    const input = document.getElementById('js-input');
    const output = document.getElementById('js-output');
    output.textContent = greeting(input.value || "Anonymous");
    output.classList.add('active');
    setTimeout(() => output.classList.remove('active'), 1000);
}

// Function to update React-like greeting
function updateReactGreeting() {
    const input = document.getElementById('react-input');
    reactComponent.setState({ name: input.value || "Anonymous" });
}

// Add input event listeners
document.getElementById('js-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        updateJsGreeting();
    }
});

document.getElementById('react-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        updateReactGreeting();
    }
});

// Initialize examples
runJsExample();
simulateReactExample();
