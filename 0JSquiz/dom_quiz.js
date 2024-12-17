const quizData = [
    {
        question: "What is the purpose of querySelector()?",
        options: [
            "To select elements only by ID",
            "To select elements using CSS selectors",
            "To select elements only by class name",
            "To select elements only by tag name"
        ],
        correct: 1,
        explanation: "querySelector() is a modern method that allows you to select elements using CSS selectors like id, class, or tag names."
    },
    {
        question: "What is the difference between innerHTML and outerHTML?",
        options: [
            "innerHTML includes only the content, while outerHTML includes the element and its content",
            "innerHTML includes the element tags, while outerHTML includes only the content",
            "They are exactly the same",
            "outerHTML only works with <div> elements"
        ],
        correct: 0,
        explanation: "innerHTML represents the content inside an element, while outerHTML includes both the element itself and its content."
    },
    {
        question: "How do you select an element by its ID using JavaScript?",
        options: [
            "document.querySelector('#id')",
            "document.getElementById('id')",
            "document.elementById('id')",
            "Both A and B are correct"
        ],
        correct: 3,
        explanation: "You can select an element by ID using either getElementById('id') or querySelector('#id'). Both methods work correctly."
    },
    {
        question: "What will document.querySelector('.text') select?",
        options: [
            "The first element with id='text'",
            "The first element with class='text'",
            "All elements with class='text'",
            "The last element with class='text'"
        ],
        correct: 1,
        explanation: "querySelector('.text') selects the first element with class='text'. To select all elements with that class, use querySelectorAll()."
    },
    {
        question: "Which statement correctly creates a new paragraph element and sets its text content?",
        options: [
            "document.createElement('p').innerHTML = 'Hello'",
            "document.newElement('p').textContent = 'Hello'",
            "document.create('p').innerHTML = 'Hello'",
            "document.makeElement('p').text = 'Hello'"
        ],
        correct: 0,
        explanation: "document.createElement('p') creates a new paragraph element, and innerHTML can be used to set its content."
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
