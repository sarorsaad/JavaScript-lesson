# React Elements and Behind-the-Scenes Process

This lesson demonstrates how React creates and manages elements using `React.createElement` and explains the React Fiber architecture.

## Lesson Structure

1. **Creating Elements with React.createElement**
   - Understanding the three arguments: type, props, and children
   - Creating basic elements (h1, p)
   - Nesting elements in a parent div

2. **React Fiber Architecture**
   - How React represents elements internally
   - Understanding the Fiber tree structure
   - Relationship between React elements and DOM nodes

3. **Rendering Process**
   - Using ReactDOM.createRoot
   - How React efficiently updates the DOM
   - The relationship between Fiber nodes and real DOM nodes

## Running the Demo

1. Open `index.html` in a web browser
2. You'll see:
   - The actual rendered output
   - The code example that produced it
   - An explanation of what's happening behind the scenes

## Key Concepts

- React.createElement creates objects (elements), not actual DOM nodes
- Each element becomes a Fiber node in React's internal representation
- React maintains two trees: the Fiber tree and the actual DOM tree
- ReactDOM efficiently synchronizes these trees when updates occur

## Further Learning

To experiment with the code:
1. Try modifying the elements in app.js
2. Add more nested elements
3. Experiment with different props and children
