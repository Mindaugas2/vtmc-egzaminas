import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <header>
        <Navbar
          bg="light"
          expand="lg"
        >
          <Container>
            <Navbar.Brand
              as={Link}
              to="/"
            >
              Knygų rezervacijos programėlė
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  as={Link}
                  to="/register "
                >
                  Registruotis
                </Nav.Link>
                <Nav.Link href="/log-in">Prisijungti</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        <Container>
          <Routes>
            <Route
              path="register"
              element={<Register />}
            />

            <Route
              path='/'
              element={<HomePage />}
            />
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;