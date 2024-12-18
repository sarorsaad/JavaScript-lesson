const fs = require('fs');
const path = require('path');

const files = [
    'react-basics-quiz.html',
    'jsx-attributes-quiz.html',
    'jsx-attributes-quiz copy.html'
];

const navStyles = `
        /* Navigation styles */
        .nav-bar {
            background-color: #20232a;
            padding: 1rem;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .nav-container {
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .back-home {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #61dafb;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .back-home:hover {
            color: #ffffff;
        }

        .page-title {
            color: #ffffff;
            margin: 0;
            font-size: 1.2rem;
        }`;

const navHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <nav class="nav-bar">
        <div class="nav-container">
            <a href="../01reactCode/index.html" class="back-home">
                <i class="fas fa-chevron-left"></i>
                Back to Home
            </a>
            <h1 class="page-title">React Quiz</h1>
        </div>
    </nav>`;

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Add navigation styles
    content = content.replace('</style>', navStyles + '\n    </style>');

    // Add navigation HTML
    content = content.replace('<body>', '<body>' + navHTML);

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
});
