import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyle';

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Navigation />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainContainer>
      <Footer />
    </Router>
  );
}

const Footer = styled.footer`
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
`;

export default App;
