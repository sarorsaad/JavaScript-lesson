// Syntax highlighting function
function highlightCode(code) {
    return code
        .replace(/\/\/.*/g, match => `<span class="comment">${match}</span>`)
        .replace(/const|let|var/g, match => `<span class="keyword">${match}</span>`)
        .replace(/"([^"]*)"/g, match => `<span class="string">${match}</span>`);
}

// Code example with proper formatting
const codeExample = `
// Step 1: Create h1 element
const heading = React.createElement(
    "h1",
    null,
    "Hello, Welcome!"
);

// Step 2: Create p element
const paragraph = React.createElement(
    "p",
    null,
    "My Name is Mohamed Mostafa!"
);

// Step 3: Create parent div
const parentDiv = React.createElement(
    "div",
    null,
    heading,
    paragraph
);

// Step 4: Render to DOM
const root = ReactDOM.createRoot(document.getElementById('demo'));
root.render(parentDiv);
`;

// Display highlighted code
document.getElementById('codeDisplay').innerHTML = highlightCode(codeExample);

// Create and render the actual elements
const heading = React.createElement(
    "h1",
    { style: { color: '#2c3e50' } },
    "Hello, Welcome!"
);

const paragraph = React.createElement(
    "p",
    { style: { color: '#34495e' } },
    "My Name is Mohamed Mostafa!"
);

const parentDiv = React.createElement(
    "div",
    { style: { padding: '20px' } },
    heading,
    paragraph
);

// Render the demo
const demoRoot = ReactDOM.createRoot(document.getElementById('demo'));
demoRoot.render(parentDiv);

// Create visual representation of the Fiber tree
function createFiberTreeVisualization() {
    const treeHtml = `
        <div style="text-align: center;">
            <div style="display: inline-block; padding: 10px; border: 2px solid #3498db; border-radius: 5px; margin: 10px;">
                div (Parent)
            </div>
            <div style="display: flex; justify-content: center; margin-top: 20px;">
                <div style="border-left: 2px solid #3498db; height: 20px;"></div>
            </div>
            <div style="display: flex; justify-content: space-around;">
                <div>
                    <div style="border-top: 2px solid #3498db; width: 100px;"></div>
                    <div style="padding: 10px; border: 2px solid #e74c3c; border-radius: 5px; margin: 10px;">
                        h1 Element
                        <div style="font-size: 0.8em; color: #666;">
                            "Hello, Welcome!"
                        </div>
                    </div>
                </div>
                <div>
                    <div style="border-top: 2px solid #3498db; width: 100px;"></div>
                    <div style="padding: 10px; border: 2px solid #e74c3c; border-radius: 5px; margin: 10px;">
                        p Element
                        <div style="font-size: 0.8em; color: #666;">
                            "My Name is Mohamed Mostafa!"
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('fiberTree').innerHTML = treeHtml;
}

// Create step-by-step explanation
function createExplanation() {
    const steps = [
        {
            title: "Step 1: React.createElement",
            content: "React.createElement creates a JavaScript object (React Element) that describes what should be rendered. It takes three arguments: type, props, and children."
        },
        {
            title: "Step 2: React Fiber Tree",
            content: "React creates a Fiber tree from these elements. Each Fiber node contains information about the element's type, props, and its relationship with other elements."
        },
        {
            title: "Step 3: Virtual DOM",
            content: "The Fiber tree forms React's virtual DOM, which is a lightweight copy of the actual DOM. This allows React to perform efficient updates."
        },
        {
            title: "Step 4: DOM Rendering",
            content: "ReactDOM takes the Fiber tree and efficiently updates the real DOM, only changing what's necessary."
        }
    ];

    const explanationHtml = steps.map(step => `
        <div class="step">
            <h3>${step.title}</h3>
            <p>${step.content}</p>
        </div>
    `).join('');

    document.getElementById('explanation').innerHTML = explanationHtml;
}

// Initialize visualizations
createFiberTreeVisualization();
createExplanation();
