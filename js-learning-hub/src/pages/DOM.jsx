function DOM() {
  return (
    <div>
      <h2>DOM Manipulation and Events</h2>
      <div className="lesson-grid">
        <article className="lesson-card">
          <img src="/images/1 Basic DOM Manipulation.png" alt="DOM Basics" className="lesson-image" />
          <div className="lesson-content">
            <h3>Basic DOM Manipulation</h3>
            <p>Learn how to select and modify HTML elements</p>
          </div>
        </article>
        <article className="lesson-card">
          <img src="/images/1 event&eventhandler.png" alt="Events" className="lesson-image" />
          <div className="lesson-content">
            <h3>Events and Event Handlers</h3>
            <p>Understanding JavaScript events and how to handle them</p>
          </div>
        </article>
        <article className="lesson-card">
          <img src="/images/2 syntax of eventlister.png" alt="Event Listeners" className="lesson-image" />
          <div className="lesson-content">
            <h3>Event Listeners</h3>
            <p>Working with addEventListener and event propagation</p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default DOM
