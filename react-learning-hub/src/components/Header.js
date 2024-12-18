import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--primary-color);
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>sarorAcademy</h1>
      <p>Your comprehensive guide to mastering Web Development Fundamentals - Frontend</p>
    </HeaderContainer>
  );
};

export default Header;
