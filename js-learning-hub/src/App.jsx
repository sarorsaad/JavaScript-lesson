import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Fundamentals from './pages/Fundamentals'
import DOM from './pages/DOM'
import Quiz from './pages/Quiz'
import RoadmapLesson from './pages/lessons/RoadmapLesson'
import WebflowQuiz from './pages/quizzes/WebflowQuiz'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>sarorAcademy</h1>
          <p>Your comprehensive guide to mastering Web Development Fundamentals - Frontend</p>
        </header>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fundamentals" element={<Fundamentals />} />
            <Route path="/dom" element={<DOM />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/lessons/roadmap" element={<RoadmapLesson />} />
            <Route path="/quizzes/webflow" element={<WebflowQuiz />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 JavaScript Learning Hub. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
