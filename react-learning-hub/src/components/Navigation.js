import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: var(--secondary-color);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <li><NavLink to="/fundamentals">Fundamentals</NavLink></li>
        <li><NavLink to="/dom">DOM & Events</NavLink></li>
        <li><NavLink to="/frameworks">Frameworks</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
      </NavList>
    </Nav>
  );
};

export default Navigation;
