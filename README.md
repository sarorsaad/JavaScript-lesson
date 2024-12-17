# JavaScript Lessons Structure

## Directory Organization

### 1. 00xxcode/
Contains all lesson code files organized by topics:
- `functions.html` - Function basics and examples
- `events_lesson.html` - Event handling in JavaScript
- `dom_manipulation.html` - DOM manipulation examples
- `arrays_objects.html` - Arrays and Objects lessons
- etc.

Each lesson file includes:
- Theory explanation
- Interactive examples
- Visual diagrams
- Practice exercises

### 2. 00xximg/
Stores all images used in lessons:
- Syntax diagrams
- Concept visualizations
- Flow charts
- Example outputs

Naming convention:
- `topic_subtopic_number.png`
- Example: `functions_syntax_01.png`

### 3. 00xxquiz/
Contains quiz files for each topic:
- HTML files for quiz interface
- JavaScript files for quiz logic
- JSON files for question banks

## How to Use This Structure

### For Teaching
1. Each lesson follows a consistent pattern:
   - Introduction (5-10 mins)
   - Theory with diagrams (15-20 mins)
   - Interactive examples (20-25 mins)
   - Practice exercises (15-20 mins)
   - Quiz (10-15 mins)

2. Presentation Order:
   1. Show syntax diagram from 00xximg/
   2. Open corresponding lesson from 00xxcode/
   3. Run through examples
   4. Complete with quiz from 00xxquiz/

### For Review
1. Quick Reference:
   - Check README in each directory for content summary
   - Use images in 00xximg/ for quick concept recall
   - Review code examples in 00xxcode/

2. Practice:
   - Run quizzes in 00xxquiz/
   - Modify examples in 00xxcode/
   - Create new examples based on existing ones

## File Naming Convention

### Code Files (00xxcode/)
- `topic_lesson.html`
- `topic_practice.html`
- `topic_advanced.html`

### Images (00xximg/)
- `topic_concept_nn.png`
- `topic_diagram_nn.png`
- `topic_example_nn.png`

### Quizzes (00xxquiz/)
- `topic_quiz.html`
- `topic_quiz.js`
- `topic_questions.json`

## Best Practices

1. **Consistency**:
   - Keep same structure across all lessons
   - Use consistent naming conventions
   - Maintain similar file organization

2. **Documentation**:
   - Add comments in code files
   - Include purpose of each example
   - Document expected outcomes

3. **Maintenance**:
   - Regular updates to content
   - Check for broken links/images
   - Verify all examples work

4. **Version Control**:
   - Track changes to lessons
   - Date each major update
   - Note modifications in README

## Quick Start Guide

1. **New Topic**:
   ```
   1. Create image files in 00xximg/
   2. Create lesson file in 00xxcode/
   3. Create quiz in 00xxquiz/
   4. Update main README
   ```

2. **Update Existing**:
   ```
   1. Check related files in all directories
   2. Update content consistently
   3. Test all examples
   4. Update documentation
   ```

3. **Presentation**:
   ```
   1. Open relevant images
   2. Load code examples
   3. Prepare quiz
   4. Follow lesson structure
   ```
