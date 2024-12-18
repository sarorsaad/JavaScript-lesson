function Fundamentals() {
  return (
    <div>
      <h2>JavaScript Fundamentals</h2>
      <div className="lesson-grid">
        <article className="lesson-card">
          <img src="/images/variable.jpg" alt="Variables" className="lesson-image" />
          <div className="lesson-content">
            <h3>Variables and Data Types</h3>
            <p>Learn about JavaScript variables and different data types</p>
          </div>
        </article>
        <article className="lesson-card">
          <img src="/images/3 function.jpg" alt="Functions" className="lesson-image" />
          <div className="lesson-content">
            <h3>Functions</h3>
            <p>Understanding JavaScript functions and their usage</p>
          </div>
        </article>
        <article className="lesson-card">
          <img src="/images/4 object.png" alt="Objects" className="lesson-image" />
          <div className="lesson-content">
            <h3>Objects</h3>
            <p>Working with JavaScript objects and their properties</p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Fundamentals
