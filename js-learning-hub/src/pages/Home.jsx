import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <section id="fundamentals">
        <h2>Web Development Fundamentals - Frontend</h2>
        <div className="lesson-grid">
          <article className="lesson-card">
            <img src="/images/roadmap.jpg" alt="Development Roadmap" className="lesson-image" />
            <div className="lesson-content">
              <h3>Development Workflow Roadmap</h3>
              <div className="lesson-links">
                <Link to="/lessons/roadmap" className="btn btn-lesson">View Lesson</Link>
                <Link to="/quizzes/webflow" className="btn btn-quiz">Take Quiz</Link>
              </div>
            </div>
          </article>

          <article className="lesson-card">
            <img src="/images/1 web.png" alt="JavaScript Introduction" className="lesson-image" />
            <div className="lesson-content">
              <h3>Introduction to Web Development</h3>
              <div className="lesson-links">
                <a href="/0JScode/1 web.html" className="btn btn-lesson" target="_blank">View Lesson</a>
                <a href="/0JSquiz/1 web/1 webquiz.html" className="btn btn-quiz" target="_blank">Take Quiz</a>
              </div>
            </div>
          </article>

          <article className="lesson-card">
            <img src="/images/variable.jpg" alt="JS Fundamentals" className="lesson-image" />
            <div className="lesson-content">
              <h3>Variables and Primitive Data Types</h3>
              <div className="lesson-links">
                <a href="/0JScode/2 variables_datatypes.html" className="btn btn-lesson" target="_blank">View Lesson</a>
                <a href="/0JSquiz/2 var/quiz.html" className="btn btn-quiz" target="_blank">Take Quiz</a>
              </div>
            </div>
          </article>

          <article className="lesson-card">
            <img src="/images/3 function.jpg" alt="JavaScript Functions" className="lesson-image" />
            <div className="lesson-content">
              <h3>JavaScript Functions</h3>
              <div className="lesson-links">
                <a href="/0JScode/3 functions_new.html" className="btn btn-lesson" target="_blank">View Lesson</a>
                <a href="/0JSquiz/3 function.quiz.html" className="btn btn-quiz" target="_blank">Take Quiz</a>
              </div>
            </div>
          </article>

          <article className="lesson-card">
            <img src="/images/4 object types.png" alt="Objects" className="lesson-image" />
            <div className="lesson-content">
              <h3>Objects in JavaScript</h3>
              <div className="lesson-links">
                <a href="/0JScode/objects.html" className="btn btn-lesson" target="_blank">View Lesson</a>
                <a href="/0JSquiz/object.quiz.html" className="btn btn-quiz" target="_blank">Take Quiz</a>
              </div>
            </div>
          </article>

          <article className="lesson-card">
            <img src="/images/1 web.png" alt="Loops and Control Flow" className="lesson-image" />
            <div className="lesson-content">
              <h3>Loops and Control Flow</h3>
              <p>Understanding loops, conditionals, and program flow</p>
              <div className="lesson-links">
                <a href="/0JScode/5 loops_control.html" className="btn btn-lesson" target="_blank">View Lesson</a>
                <a href="/0JSquiz/loops.quiz.html" className="btn btn-quiz" target="_blank">Take Quiz</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="dom">
        <h2>DOM Manipulation & Events</h2>
        <div className="lesson-grid">
          <article className="lesson-card">
            <img src="/images/1 Basic DOM Manipulation.png" alt="DOM Basics" className="lesson-image" />
            <div className="lesson-content">
              <h3>Basic DOM Manipulation</h3>
              <p>Learn how to interact with HTML elements using JavaScript</p>
              <div className="lesson-links">
                <a href="/0JScode/dom-steps-lesson.html" className="btn btn-lesson" target="_blank">View Lesson</a>
                <a href="/0JSquiz/dom_quiz.html" className="btn btn-quiz" target="_blank">Take Quiz</a>
              </div>
            </div>
          </article>

          <article className="lesson-card">
            <img src="/images/1 event&eventhandler.png" alt="Events Handling" className="lesson-image" />
            <div className="lesson-content">
              <h3>Events and Event Handlers</h3>
              <p>Master event handling and user interactions</p>
              <div className="lesson-links">
                <a href="/0JScode/events_lesson.html" className="btn btn-lesson" target="_blank">View Lesson</a>
                <a href="/0JSquiz/events_quiz.html" className="btn btn-quiz" target="_blank">Take Quiz</a>
              </div>
            </div>
          </article>

          <article className="lesson-card">
            <img src="/images/3 queryseclector.png" alt="DOM Selectors" className="lesson-image" />
            <div className="lesson-content">
              <h3>DOM Selectors</h3>
              <p>Learn different ways to select DOM elements</p>
              <div className="lesson-links">
                <a href="/0JScode/dom-steps-lesson.html#selectors" className="btn btn-lesson" target="_blank">View Lesson</a>
                <a href="/0JSquiz/dom_quiz.html" className="btn btn-quiz" target="_blank">Take Quiz</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="frameworks">
        <h2>JavaScript Frameworks</h2>
        <div className="lesson-grid">
          <article className="lesson-card">
            <img src="/images/1 web.png" alt="React Basics" className="lesson-image" />
            <div className="lesson-content">
              <h3>React Fundamentals</h3>
              <p>Get started with React.js framework</p>
              <div className="lesson-links">
                <a href="/7 react_basic_lessons/1 React Fundamentals - Getting Started with React/index.html" className="btn btn-lesson" target="_blank">View Lesson</a>
                <a href="/01reactQuiz/1 react.quiz.html" className="btn btn-quiz" target="_blank">Take Quiz</a>
              </div>
            </div>
          </article>

          <article className="lesson-card">
            <img src="/images/1 web.png" alt="Next.js Basics" className="lesson-image" />
            <div className="lesson-content">
              <h3>Next.js Fundamentals</h3>
              <p>Learn the basics of Next.js framework</p>
              <div className="lesson-links">
                <a href="/8 next js basic lessons/index.html" className="btn btn-lesson" target="_blank">View Lesson</a>
                <a href="/01reactQuiz/nextjs.quiz.html" className="btn btn-quiz" target="_blank">Take Quiz</a>
              </div>
            </div>
          </article>

          <article className="lesson-card">
            <img src="/images/1 web.png" alt="Angular Basics" className="lesson-image" />
            <div className="lesson-content">
              <h3>Angular Fundamentals</h3>
              <p>Get started with Angular framework</p>
              <div className="lesson-links">
                <a href="/9 angular basic lessons/index.html" className="btn btn-lesson" target="_blank">View Lesson</a>
                <a href="/01reactQuiz/angular.quiz.html" className="btn btn-quiz" target="_blank">Take Quiz</a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Home
