// Initial state for our demo
let demoState = {
    elements: ['Hello React!'],
    counter: 1
};

// Function to show success message
function showSuccess() {
    const message = document.getElementById('success-message');
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 2000);
}

// Function to render our React elements
function renderDemo() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    
    const elements = demoState.elements.map((text, index) => 
        React.createElement('p', { key: index }, text)
    );

    const container = React.createElement('div', null, ...elements);
    root.render(container);

    // Update DOM visualization
    updateDOMVisualization();
}

// Function to update content
function updateContent() {
    demoState.elements = demoState.elements.map(element => 
        `Updated content ${demoState.counter}`
    );
    demoState.counter++;
    renderDemo();
    showSuccess();
}

// Function to add element
function addElement() {
    demoState.elements.push(`New element ${demoState.counter}`);
    demoState.counter++;
    renderDemo();
    showSuccess();
}

// Function to remove element
function removeElement() {
    if (demoState.elements.length > 0) {
        demoState.elements.pop();
        renderDemo();
        showSuccess();
    }
}

// Function to update DOM visualization
function updateDOMVisualization() {
    const realDomDisplay = document.getElementById('real-dom-display');
    const virtualDomDisplay = document.getElementById('virtual-dom-display');

    // Real DOM representation
    realDomDisplay.innerHTML = `
        <pre>
&lt;div&gt;
    ${demoState.elements.map(element => `    &lt;p&gt;${element}&lt;/p&gt;`).join('\n')}
&lt;/div&gt;
        </pre>
    `;

    // Virtual DOM representation
    virtualDomDisplay.innerHTML = `
        <pre>
{
    type: 'div',
    props: {
        children: [
            ${demoState.elements.map(element => 
                `{
                type: 'p',
                props: {
                    children: '${element}'
                }
            }`).join(',\n            ')}
        ]
    }
}
        </pre>
    `;
}

// Initialize the demo when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderDemo();
});
