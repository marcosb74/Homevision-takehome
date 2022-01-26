import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './styles.css';

function Navigation() {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <Navbar bg="white" variant="light" sticky="top" className="navbar">
      <Container>
        <Navbar.Brand>
          <div
            className="cursor-pointer"
            onClick={reloadPage}
            role="button"
            tabIndex={0}
          >
            <img
              alt="hvlogo"
              src="./assets/hvlogo.png"
              className="d-inline-block align-top hvlogo"
            />
          </div>
        </Navbar.Brand>
        <a href="https://github.com/marcosb74/Homevision-takehome">
          <img
            alt="githublogo"
            src="./assets/github.png"
            className="d-inline-block align-top githublogo"
          />
        </a>
      </Container>
    </Navbar>
  );
}

export default Navigation;
