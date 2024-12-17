# Start React: Write Your First Code & Convert Pure JS to React

## Introduction to React via CDN
React can be easily added to your project using CDN links. This approach is great for learning and small projects.

## Adding React to Your Project

### 1. Required CDN Links
Add these scripts to your HTML file:

```html
<!-- Development version -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<!-- For production use these instead -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```

## Comparing Pure JavaScript vs React

### Pure JavaScript Approach:
```javascript
// Create p element
const p = document.createElement('p');

// Create text node
const text = document.createTextNode('My Name Is Mohamed Mostafa');

// Append text to p
p.appendChild(text);

// Append p to body
document.body.appendChild(p);
```

### React Approach:
```javascript
// Create p element using React method
const p = React.createElement("p", null, "My Name Is Mohamed Mostafa");

// Render p element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(p);
```

## Key Differences

1. **Element Creation**:
   - Pure JS: Uses `document.createElement()`
   - React: Uses `React.createElement()`

2. **Text Content**:
   - Pure JS: Requires separate text node creation
   - React: Text can be passed directly as third argument

3. **DOM Mounting**:
   - Pure JS: Direct appendChild to body
   - React: Requires a root element and uses render method

4. **Entry Point**:
   - Pure JS: Can append anywhere
   - React: Needs a specific root element (typically `<div id="root">`)

## Setting Up Your HTML File

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root">
        <!-- all elements will be rendered here -->
    </div>
    
    <!-- React CDN -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    
    <!-- Your React code -->
    <script src="react-code.js"></script>
</body>
</html>
```

## Important Notes

1. The `root` div is essential for React to work - it's the entry point for your React application
2. React CDN scripts should be loaded before your custom JavaScript
3. Development versions provide better error messages but are larger and slower
4. Use production versions for deployed applications
