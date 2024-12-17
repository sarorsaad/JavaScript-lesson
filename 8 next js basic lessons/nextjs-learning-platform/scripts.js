// Lesson content data
const lessonContent = {
    1: {
        title: "Introduction to Next.js",
        steps: [
            {
                demo: `
                    <div class="intro-demo">
                        <div class="next-logo">Next.js</div>
                        <div class="question-mark">?</div>
                    </div>
                `,
                explanation: `
                    <h2>What is Next.js?</h2>
                    <p>Next.js is a powerful framework built on top of React that revolutionizes how we build web applications.</p>
                    <p>In this course, we'll explore:</p>
                    <ul>
                        <li>Core concepts and features</li>
                        <li>How it enhances React development</li>
                        <li>Why it's becoming the go-to framework for modern web development</li>
                    </ul>
                `
            }
        ]
    },
    2: {
        title: "Framework & Tools",
        steps: [
            {
                demo: `
                    <div class="framework-demo">
                        <div class="framework-box">
                            <div class="libs">Libraries</div>
                            <div class="plus">+</div>
                            <div class="tools">Tools</div>
                            <div class="equals">=</div>
                            <div class="framework">Framework</div>
                        </div>
                    </div>
                `,
                explanation: `
                    <h2>Next.js Framework Components</h2>
                    <p>Next.js combines powerful libraries and tools to create a complete development framework:</p>
                    <ul>
                        <li>React library for UI building</li>
                        <li>Built-in development tools</li>
                        <li>Optimized build system</li>
                    </ul>
                `
            }
        ]
    },
    3: {
        title: "Client-Server Architecture",
        steps: [
            {
                demo: `
                    <div class="architecture-demo">
                        <div class="client">
                            <h3>Client (WWW)</h3>
                            <div class="browser-icon">🌐</div>
                        </div>
                        <div class="server">
                            <h3>Server</h3>
                            <div class="server-icon">🖥️</div>
                        </div>
                        <div class="runtime">
                            <h3>Node.js Runtime</h3>
                            <div class="node-icon">⚡</div>
                        </div>
                    </div>
                `,
                explanation: `
                    <h2>Understanding the Architecture</h2>
                    <p>Next.js operates in both client and server environments:</p>
                    <ul>
                        <li>Client: Handles user interactions and displays UI</li>
                        <li>Server: Processes requests and generates responses</li>
                        <li>Node.js Runtime: Executes JavaScript code server-side</li>
                    </ul>
                `
            }
        ]
    },
    4: {
        title: "Full-stack Development",
        steps: [
            {
                demo: `
                    <div class="fullstack-demo">
                        <div class="frontend">
                            <h3>Frontend</h3>
                            <div class="browser-ui">🖥️</div>
                        </div>
                        <div class="connector">⟷</div>
                        <div class="backend">
                            <h3>Backend</h3>
                            <div class="server-ui">⚙️</div>
                        </div>
                    </div>
                `,
                explanation: `
                    <h2>Full-stack Capabilities</h2>
                    <p>Next.js unifies frontend and backend development:</p>
                    <ul>
                        <li>Frontend: React components and UI logic</li>
                        <li>Backend: API routes and server-side logic</li>
                        <li>Seamless integration between both layers</li>
                    </ul>
                `
            }
        ]
    },
    5: {
        title: "Server-side Rendering",
        steps: [
            {
                demo: `
                    <div class="ssr-demo">
                        <div class="step-1">
                            <h3>1. Collect Components</h3>
                            <div class="components">🧩</div>
                        </div>
                        <div class="arrow">→</div>
                        <div class="step-2">
                            <h3>2. Send to Browser</h3>
                            <div class="browser">🌐</div>
                        </div>
                    </div>
                `,
                explanation: `
                    <h2>Server-side Rendering (SSR)</h2>
                    <p>Next.js processes pages on the server before sending to clients:</p>
                    <ul>
                        <li>Components are rendered on the server</li>
                        <li>Complete HTML is sent to the browser</li>
                        <li>Benefits: Fast loading, SEO-friendly</li>
                    </ul>
                `
            }
        ]
    },
    6: {
        title: "Static Site Generation",
        steps: [
            {
                demo: `
                    <div class="ssg-demo">
                        <div class="build-time">
                            <h3>Build Time</h3>
                            <div class="pages">📄</div>
                        </div>
                        <div class="arrow">→</div>
                        <div class="static-files">
                            <h3>Static Files</h3>
                            <div class="files">📦</div>
                        </div>
                    </div>
                `,
                explanation: `
                    <h2>Static Site Generation (SSG)</h2>
                    <p>Generate static pages at build time:</p>
                    <ul>
                        <li>Super fast page loads</li>
                        <li>Pre-renders HTML pages</li>
                        <li>Perfect for content-focused websites</li>
                    </ul>
                `
            }
        ]
    },
    7: {
        title: "Built-in Router",
        steps: [
            {
                demo: `
                    <div class="router-demo">
                        <div class="nextjs-router">
                            <h3>Next.js Router</h3>
                            <div class="check">✓</div>
                        </div>
                        <div class="react-router">
                            <h3>react-router</h3>
                            <div class="cross">❌</div>
                        </div>
                    </div>
                `,
                explanation: `
                    <h2>Next.js Routing System</h2>
                    <p>Built-in routing solution:</p>
                    <ul>
                        <li>No need for react-router</li>
                        <li>File-system based routing</li>
                        <li>Automatic code splitting</li>
                    </ul>
                `
            }
        ]
    },
    8: {
        title: "Development Tools",
        steps: [
            {
                demo: `
                    <div class="tools-demo">
                        <div class="compiler">
                            <h3>Compiler</h3>
                            <p>Transform & Minify</p>
                        </div>
                        <div class="cli">
                            <h3>CLI</h3>
                            <p>Build & Start</p>
                        </div>
                        <div class="runtime">
                            <h3>Runtime</h3>
                            <p>Execute JS</p>
                        </div>
                    </div>
                `,
                explanation: `
                    <h2>Next.js Development Tools</h2>
                    <p>Comprehensive toolset for development:</p>
                    <ul>
                        <li>Compiler: Optimizes and minifies code</li>
                        <li>CLI: Easy project management</li>
                        <li>Runtime: Efficient code execution</li>
                    </ul>
                `
            }
        ]
    },
    9: {
        title: "Best Practices",
        steps: [
            {
                demo: `
                    <div class="practices-demo">
                        <div class="practice">
                            <h3>Performance</h3>
                            <div class="icon">⚡</div>
                        </div>
                        <div class="practice">
                            <h3>SEO</h3>
                            <div class="icon">🔍</div>
                        </div>
                        <div class="practice">
                            <h3>Scalability</h3>
                            <div class="icon">📈</div>
                        </div>
                    </div>
                `,
                explanation: `
                    <h2>Next.js Best Practices</h2>
                    <p>Optimize your Next.js applications:</p>
                    <ul>
                        <li>Use appropriate rendering strategy</li>
                        <li>Implement proper SEO techniques</li>
                        <li>Follow performance guidelines</li>
                    </ul>
                `
            }
        ]
    }
};

// DOM Elements
const lessonMenu = document.querySelector('.lessons-menu');
const lessonTitle = document.getElementById('lesson-title');
const demoContainer = document.querySelector('.demo-container');
const textContent = document.querySelector('.text-content');
const prevButton = document.querySelector('.prev-lesson');
const nextButton = document.querySelector('.next-lesson');
const currentLessonSpan = document.querySelector('.current-lesson');
const totalLessonsSpan = document.querySelector('.total-lessons');
const markCompleteButton = document.querySelector('.mark-complete');
const practiceLessonButton = document.querySelector('.practice-lesson');

// State management
let currentLesson = 1;
const totalLessons = Object.keys(lessonContent).length;
const completedLessons = new Set();

// Initialize
function init() {
    currentLessonSpan.textContent = currentLesson;
    totalLessonsSpan.textContent = totalLessons;
    updateLessonContent();
    updateNavigationState();
}

// Event Listeners
lessonMenu.addEventListener('click', (e) => {
    const lessonItem = e.target.closest('li');
    if (lessonItem) {
        const lessonNumber = parseInt(lessonItem.dataset.lesson);
        changeLesson(lessonNumber);
    }
});

prevButton.addEventListener('click', () => {
    if (currentLesson > 1) {
        changeLesson(currentLesson - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentLesson < totalLessons) {
        changeLesson(currentLesson + 1);
    }
});

markCompleteButton.addEventListener('click', () => {
    completedLessons.add(currentLesson);
    const menuItem = document.querySelector(`[data-lesson="${currentLesson}"]`);
    menuItem.classList.add('completed');
    
    // Automatically move to next lesson if available
    if (currentLesson < totalLessons) {
        changeLesson(currentLesson + 1);
    }
});

practiceLessonButton.addEventListener('click', () => {
    // Show practice modal or navigate to practice section
    alert('Practice exercises coming soon!');
});

// Functions
function changeLesson(lessonNumber) {
    currentLesson = lessonNumber;
    currentLessonSpan.textContent = currentLesson;
    
    // Update active lesson in menu
    document.querySelector('.lessons-menu li.active')?.classList.remove('active');
    document.querySelector(`[data-lesson="${lessonNumber}"]`).classList.add('active');
    
    updateLessonContent();
    updateNavigationState();
}

function updateLessonContent() {
    const lesson = lessonContent[currentLesson];
    
    // Update title and content
    lessonTitle.textContent = lesson.title;
    demoContainer.innerHTML = lesson.steps[0].demo;
    textContent.innerHTML = lesson.steps[0].explanation;
}

function updateNavigationState() {
    // Update button states
    prevButton.disabled = currentLesson === 1;
    nextButton.disabled = currentLesson === totalLessons;
    
    // Update mark complete button
    markCompleteButton.textContent = completedLessons.has(currentLesson) 
        ? 'Completed ✓' 
        : 'Mark as Complete';
    markCompleteButton.classList.toggle('completed', completedLessons.has(currentLesson));
}

// Initialize the platform
init();
