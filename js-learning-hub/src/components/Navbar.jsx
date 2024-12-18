import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/fundamentals">Fundamentals</Link></li>
        <li><Link to="/dom">DOM & Events</Link></li>
        <li><Link to="/quiz">Quizzes</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
