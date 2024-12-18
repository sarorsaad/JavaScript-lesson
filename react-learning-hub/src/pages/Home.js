import React from 'react';
import styled from 'styled-components';
import LessonCard from '../components/LessonCard';

const Section = styled.section`
  margin-bottom: 3rem;
`;

const LessonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const lessons = {
  fundamentals: [
    {
      title: 'Development Workflow Roadmap',
      image: '../0JSimg/roadmap.jpg',
      lessonLink: '/lessons/development-roadmap',
      quizLink: '/quiz/webflow'
    },
    {
      title: 'Introduction to Web Development',
      image: '../0JSimg/1 web.png',
      lessonLink: '/lessons/web-intro',
      quizLink: '/quiz/web-intro'
    },
    {
      title: 'Variables and Primitive Data Types',
      image: '../0JSimg/variable.jpg',
      lessonLink: '/lessons/variables',
      quizLink: '/quiz/variables'
    }
  ],
  dom: [
    {
      title: 'Basic DOM Manipulation',
      image: '../0JSimg/dom.png',
      lessonLink: '/lessons/dom-basics',
      quizLink: '/quiz/dom'
    },
    {
      title: 'Events and Event Handlers',
      image: '../0JSimg/events.png',
      lessonLink: '/lessons/events',
      quizLink: '/quiz/events'
    }
  ]
};

const Home = () => {
  return (
    <>
      <Section id="fundamentals">
        <h2>Web Development Fundamentals - Frontend</h2>
        <LessonGrid>
          {lessons.fundamentals.map((lesson, index) => (
            <LessonCard key={index} {...lesson} />
          ))}
        </LessonGrid>
      </Section>

      <Section id="dom">
        <h2>DOM Manipulation & Events</h2>
        <LessonGrid>
          {lessons.dom.map((lesson, index) => (
            <LessonCard key={index} {...lesson} />
          ))}
        </LessonGrid>
      </Section>
    </>
  );
};

export default Home;
