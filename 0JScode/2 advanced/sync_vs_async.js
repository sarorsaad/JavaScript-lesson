// Initialize content
document.addEventListener('DOMContentLoaded', () => {
    populateCodeExamples();
});

function switchMainTab(tab) {
    // Update tab buttons
    document.querySelectorAll('.main-tab').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.main-tab[onclick*="${tab}"]`).classList.add('active');

    // Update content
    document.querySelectorAll('.main-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tab}-content`).classList.add('active');
}

function showSyncSection(sectionNumber) {
    // Update button states
    document.querySelectorAll('#sync-content .section-button').forEach((button, index) => {
        button.classList.remove('active');
        if (index + 1 === sectionNumber) {
            button.classList.add('active');
        }
    });

    // Update section visibility
    document.querySelectorAll('.sync-section').forEach((section, index) => {
        section.classList.remove('active');
    });
    document.getElementById(`sync-section-${sectionNumber}`).classList.add('active');
}

function showAsyncSection(sectionNumber) {
    // Update button states
    document.querySelectorAll('#async-content .section-button').forEach((button, index) => {
        button.classList.remove('active');
        if (index + 1 === sectionNumber) {
            button.classList.add('active');
        }
    });

    // Update section visibility
    document.querySelectorAll('.async-section').forEach((section, index) => {
        section.classList.remove('active');
    });
    document.getElementById(`async-section-${sectionNumber}`).classList.add('active');
}

function populateCodeExamples() {
    // Synchronous Examples
    document.getElementById('syncBasicOps').textContent = `// Synchronous variable declarations and assignments
const name = "John";
let age = 25;
const isActive = true;

// Basic mathematical operations
const sum = 5 + 3;
const product = 4 * 2;
const average = (10 + 20 + 30) / 3;`;

    document.getElementById('syncArrayObject').textContent = `// Array operations
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const filtered = numbers.filter(num => num > 2);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Object operations
const user = {
    name: 'John',
    age: 30
};
const keys = Object.keys(user);
const values = Object.values(user);`;

    document.getElementById('syncString').textContent = `// String manipulations
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;

// String methods
const upperCase = fullName.toUpperCase();
const substring = fullName.substring(0, 4);
const replaced = fullName.replace("John", "Jane");`;

    document.getElementById('syncControl').textContent = `// If-else statements
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Switch statements
switch (status) {
    case "active":
        console.log("User is active");
        break;
    case "inactive":
        console.log("User is inactive");
        break;
    default:
        console.log("Unknown status");
}`;

    document.getElementById('syncLoop').textContent = `// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}

// For...of loop (arrays)
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit);
}`;

    document.getElementById('syncFunction').textContent = `// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Function calls
const result1 = add(5, 3);      // 8
const result2 = multiply(4, 2); // 8`;

    document.getElementById('syncDOM').textContent = `// DOM element creation and modification
const div = document.createElement('div');
div.className = 'container';
div.textContent = 'Hello World';

// Style modifications
div.style.backgroundColor = 'blue';
div.style.color = 'white';

// Attribute modifications
div.setAttribute('id', 'main');
div.getAttribute('id');`;

    // Asynchronous Examples
    document.getElementById('asyncAPI').textContent = `// Fetching data from an API
async function fetchUserData() {
    try {
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Error:', error);
    }
}`;

    document.getElementById('asyncFile').textContent = `// File upload
async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });
        return await response.json();
    } catch (error) {
        console.error('Upload Error:', error);
    }
}`;

    document.getElementById('asyncDB').textContent = `// Database query
async function getUserFromDB(userId) {
    try {
        const user = await database.query(
            'SELECT * FROM users WHERE id = ?', 
            [userId]
        );
        return user;
    } catch (error) {
        console.error('Database Error:', error);
    }
}`;

    document.getElementById('asyncTimer').textContent = `// Delayed execution
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showDelayedMessage() {
    console.log('Starting');
    await delay(2000);
    console.log('Message after 2 seconds');
}`;

    document.getElementById('asyncWebSocket').textContent = `// WebSocket connection and messaging
class WebSocketClient {
    async connect() {
        this.ws = new WebSocket('wss://example.com');
        
        return new Promise((resolve, reject) => {
            this.ws.onopen = () => resolve();
            this.ws.onerror = (error) => reject(error);
        });
    }

    async sendMessage(message) {
        if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(message));
        }
    }
}`;

    document.getElementById('asyncBestPractices').textContent = `// Error Handling
async function safeOperation() {
    try {
        await riskyOperation();
    } catch (error) {
        if (error instanceof NetworkError) {
            // Handle network errors
        } else {
            // Handle other errors
        }
    } finally {
        // Cleanup code
    }
}

// Loading States
async function fetchWithLoadingState() {
    this.loading = true;
    try {
        const data = await fetchData();
        return data;
    } finally {
        this.loading = false;
    }
}`;
}
