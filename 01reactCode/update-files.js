const fs = require('fs');
const path = require('path');

const files = [
    'reactFundemntal.html',
    'reactbasic.html',
    'jsx-attributes.html',
    'reactElement.html',
    'reactCDN.html',
    'render1.html',
    'JSXattEX.html'
];

const stylesLink = `    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="nav-styles.css">`;

const scriptLink = `    <script src="add-nav.js"></script>`;

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Add styles link before the first script tag
    content = content.replace('    <script', stylesLink + '\n    <script');

    // Add our script before </body>
    content = content.replace('</body>', scriptLink + '\n</body>');

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
});
