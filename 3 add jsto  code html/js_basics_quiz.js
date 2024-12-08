const quizData = [
    {
        question: "Which keyword is used to declare a variable that can be reassigned?",
        options: ["const", "let", "var", "All of the above"],
        correct: 1,
        explanation: "The 'let' keyword is used to declare variables that can be reassigned. 'const' is for constants, and 'var' is the older way of declaring variables."
    },
    {
        question: "Where is the correct place to insert a JavaScript file in an HTML document for best performance?",
        options: [
            "In the <head> section",
            "At the beginning of the <body> section",
            "Just before the closing </body> tag",
            "It doesn't matter"
        ],
        correct: 2,
        explanation: "Placing JavaScript just before the closing </body> tag ensures all HTML content is loaded before the script runs, which is optimal for DOM manipulation."
    },
    {
        question: "What is the DOM in JavaScript?",
        options: [
            "Data Object Model",
            "Document Object Model",
            "Document Oriented Model",
            "Digital Object Model"
        ],
        correct: 1,
        explanation: "DOM stands for Document Object Model. It's a programming interface for HTML documents that represents the page as a tree structure."
    },
    {
        question: "Which is the correct way to write a single-line comment in JavaScript?",
        options: [
            "/* comment */",
            "// comment",
            "# comment"
        ],
        correct: 1,
        explanation: "In JavaScript, single-line comments are written using '//' while '/* */' is used for multi-line comments. The '#' symbol is not used for comments in JavaScript."
    },
    {
        question: "How do you link an external JavaScript file named 'script.js'?",
        options: [
            "&lt;script href='script.js'&gt;",
            "&lt;script name='script.js'&gt;",
            "&lt;script src='script.js'&gt;"
        ],
        correct: 2,
        explanation: "The correct way to link an external JavaScript file is using the <script> tag with the 'src' attribute."
    }
];

let currentScore = 0;
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    const output = [];

    quizData.forEach((questionData, index) => {
        const options = [];

        for (let i = 0; i < questionData.options.length; i++) {
            options.push(
                `<label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${questionData.options[i]}
                </label>`
            );
        }

        output.push(
            `<div class="question">
                <h2>Question ${index + 1}</h2>
                <p>${questionData.question}</p>
                <div class="options">
                    ${options.join('')}
                </div>
                <div id="feedback${index}" class="feedback"></div>
            </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    currentScore = 0;
    
    quizData.forEach((questionData, index) => {
        const selector = `input[name=question${index}]:checked`;
        const userAnswer = (document.querySelector(selector) || {}).value;
        const feedbackDiv = document.getElementById(`feedback${index}`);
        
        if (userAnswer === undefined) {
            feedbackDiv.innerHTML = `<span class="incorrect">Please answer this question</span>`;
            return;
        }

        if (parseInt(userAnswer) === questionData.correct) {
            currentScore++;
            feedbackDiv.innerHTML = `<span class="correct">Correct! ${questionData.explanation}</span>`;
        } else {
            feedbackDiv.innerHTML = `<span class="incorrect">Incorrect. ${questionData.explanation}</span>`;
        }
    });

    resultsContainer.innerHTML = `Your score: ${currentScore} out of ${quizData.length}`;
}

buildQuiz();
submitButton.addEventListener('click', showResults);
