import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.article`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const LessonImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
  color: white;

  &.lesson {
    background-color: var(--secondary-color);
  }

  &.quiz {
    background-color: var(--accent-color);
  }

  &:hover {
    opacity: 0.9;
  }
`;

const LessonCard = ({ image, title, lessonLink, quizLink }) => {
  return (
    <Card>
      <LessonImage src={image} alt={title} />
      <Content>
        <h3>{title}</h3>
        <Links>
          <Button to={lessonLink} className="lesson">View Lesson</Button>
          <Button to={quizLink} className="quiz">Take Quiz</Button>
        </Links>
      </Content>
    </Card>
  );
};

export default LessonCard;
