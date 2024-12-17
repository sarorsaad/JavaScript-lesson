# JavaScript Quizzes

## Quiz Structure

### Basic Level
1. `variables_quiz/`
   - HTML interface
   - Question bank
   - Scoring logic

2. `functions_quiz/`
   - Basic concepts
   - Parameters
   - Return values

3. `events_quiz/`
   - Event types
   - Event handling
   - Event flow

### Intermediate Level
4. `arrays_objects_quiz/`
   - Array methods
   - Object properties
   - Complex operations

5. `dom_quiz/`
   - Selection methods
   - Manipulation
   - Event handling

## File Organization

Each quiz topic contains:
```
topic_quiz/
├── index.html
├── quiz.js
├── questions.json
└── styles.css
```

## Question Format

```javascript
{
    "questions": [
        {
            "question": "Question text",
            "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
            "correct": 0,
            "explanation": "Why this answer is correct"
        }
    ]
}
```

## Usage Guidelines

1. **Implementation**:
   - Load questions dynamically
   - Randomize order
   - Track scores
   - Provide feedback

2. **Customization**:
   - Add new questions
   - Modify difficulty
   - Update explanations

3. **Assessment**:
   - Track progress
   - Review mistakes
   - Practice weak areas
