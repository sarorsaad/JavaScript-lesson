const quizData = [
    {
        question: "How do you declare a variable in JavaScript using `var`?",
        options: [
            "var myVar = 5;",
            "variable myVar = 5;",
            "v myVar = 5;",
            "declare myVar = 5;"
        ],
        correct: 0
    },
    {
        question: "How do you declare a constant variable in JavaScript?",
        options: [
            "constant PI = 3.14;",
            "var PI = 3.14;",
            "let PI = 3.14;",
            "const PI = 3.14;"
        ],
        correct: 3
    },
    {
        question: "Can you reassign a value to a `const` variable?",
        options: [
            "Yes",
            "No",
            "Only within a function",
            "Only within a block"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a primitive data type in JavaScript?",
        options: [
            "Object",
            "Array",
            "String",
            "Function"
        ],
        correct: 2
    },
    {
        question: "What is the value of an uninitialized variable in JavaScript?",
        options: [
            "null",
            "0",
            "undefined",
            "NaN"
        ],
        correct: 2
    },
    {
        question: "What is the correct syntax to declare a BigInt?",
        options: [
            "let bigNumber = 123456789012345678901234567890;",
            "let bigNumber = 123456789012345678901234567890n;",
            "let bigNumber = BigInt(123456789012345678901234567890);",
            "let bigNumber = BigInt(\"123456789012345678901234567890\");"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a correct way to initialize a string variable?",
        options: [
            "let greeting = \"Hello\";",
            "let greeting = 'Hello';",
            "let greeting = `Hello`;",
            "All of the above"
        ],
        correct: 3
    },
    {
        question: "What is the result of the following code?\n```javascript\nlet num = 5;\nnum = num + 1;\nconsole.log(num);\n```",
        options: [
            "5",
            "6",
            "undefined",
            "Error"
        ],
        correct: 1
    },
    {
        question: "How do you check the data type of a variable in JavaScript?",
        options: [
            "checkType(variable)",
            "typeOf(variable)",
            "typeof variable",
            "variable.type"
        ],
        correct: 2
    },
    {
        question: "What is the result of the following code?\n```javascript\nlet x;\nconsole.log(x);\n```",
        options: [
            "null",
            "0",
            "undefined",
            "NaN"
        ],
        correct: 2
    },
    {
        question: "Which of the following is not a primitive data type in JavaScript?",
        options: [
            "Number",
            "Boolean",
            "Object",
            "Symbol"
        ],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const questionNumber = document.getElementById('question-number');
const resultsDiv = document.getElementById('results');
const scoreSpan = document.getElementById('score');
const quizDiv = document.getElementById('quiz');
const restartBtn = document.getElementById('restart-btn');

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionNumber.textContent = currentQuestion + 1;
    questionText.innerHTML = question.question;
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.className = 'option';
        button.innerHTML = option;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
    
    submitBtn.style.display = 'block';
    nextBtn.style.display = 'none';
    selectedOption = null;
    submitBtn.disabled = true;
}

function selectOption(index) {
    selectedOption = index;
    submitBtn.disabled = false;
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[index].classList.add('selected');
}

function checkAnswer() {
    const options = document.querySelectorAll('.option');
    const correct = quizData[currentQuestion].correct;
    
    options.forEach((option, index) => {
        if (index === correct) {
            option.classList.add('correct');
        } else if (index === selectedOption) {
            option.classList.add('wrong');
        }
        option.style.pointerEvents = 'none';
    });
    
    if (selectedOption === correct) {
        score++;
    }
    
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'block';
}

function showResults() {
    quizDiv.style.display = 'none';
    resultsDiv.style.display = 'block';
    scoreSpan.textContent = score;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedOption = null;
    quizDiv.style.display = 'block';
    resultsDiv.style.display = 'none';
    loadQuestion();
}

submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Initialize the quiz
loadQuestion();
