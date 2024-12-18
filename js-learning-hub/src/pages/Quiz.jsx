function Quiz() {
  return (
    <div>
      <h2>JavaScript Quizzes</h2>
      <div className="lesson-grid">
        <article className="lesson-card">
          <div className="lesson-content">
            <h3>Web Fundamentals Quiz</h3>
            <p>Test your knowledge of web development fundamentals</p>
            <a href="/quiz/web" className="quiz-link">Start Quiz</a>
          </div>
        </article>
        <article className="lesson-card">
          <div className="lesson-content">
            <h3>Variables and Data Types Quiz</h3>
            <p>Test your understanding of JavaScript variables</p>
            <a href="/quiz/variables" className="quiz-link">Start Quiz</a>
          </div>
        </article>
        <article className="lesson-card">
          <div className="lesson-content">
            <h3>DOM Manipulation Quiz</h3>
            <p>Test your DOM manipulation skills</p>
            <a href="/quiz/dom" className="quiz-link">Start Quiz</a>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Quiz
