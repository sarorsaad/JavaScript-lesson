import { useEffect, useState } from 'react';

function WebflowQuiz() {
  const [quizContent, setQuizContent] = useState('');

  useEffect(() => {
    // Fetch the content from your original HTML file
    fetch('/0JSquiz/webflowquiz.html')
      .then(response => response.text())
      .then(html => {
        // Extract the content from the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const mainContent = doc.querySelector('main') || doc.body;
        setQuizContent(mainContent.innerHTML);
      })
      .catch(error => console.error('Error loading quiz:', error));
  }, []);

  return (
    <div className="quiz-container">
      <h1>Web Development Workflow Quiz</h1>
      <div className="quiz-content" dangerouslySetInnerHTML={{ __html: quizContent }} />
    </div>
  );
}

export default WebflowQuiz;
