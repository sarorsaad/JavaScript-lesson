import { useEffect, useState } from 'react';
import './RoadmapLesson.css';

function RoadmapLesson() {
  const [lessonContent, setLessonContent] = useState('');
  const [styles, setStyles] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/0JScode/01 development-roadmap-compact.html');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        
        // Create a temporary element to parse the HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        // Extract styles
        const styleTag = tempDiv.querySelector('style');
        if (styleTag) {
          setStyles(styleTag.textContent);
        }
        
        // Extract container content
        const container = tempDiv.querySelector('.container');
        if (container) {
          setLessonContent(container.outerHTML);
        } else {
          setError('Could not find lesson content');
        }
      } catch (err) {
        console.error('Error loading lesson:', err);
        setError(`Error loading lesson: ${err.message}`);
      }
    };

    fetchContent();
  }, []);

  useEffect(() => {
    // Inject styles when they're loaded
    if (styles) {
      const styleElement = document.createElement('style');
      styleElement.textContent = styles;
      document.head.appendChild(styleElement);

      // Cleanup function to remove styles when component unmounts
      return () => {
        document.head.removeChild(styleElement);
      };
    }
  }, [styles]);

  if (error) {
    return (
      <div className="lesson-container">
        <h1>Error Loading Lesson</h1>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="lesson-container">
      {lessonContent ? (
        <div dangerouslySetInnerHTML={{ __html: lessonContent }} />
      ) : (
        <p>Loading lesson content...</p>
      )}
    </div>
  );
}

export default RoadmapLesson;
