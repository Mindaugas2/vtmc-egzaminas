import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import HomePage from './components/HomePage';
import SuccessRegister from './components/SuccessRegister';
import LogIn from './components/LogIn';
import Profile from './components/Profile';

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

                <Nav.Link
                  as={Link}
                  to="/log-in"
                >
                  Prisijungti
                </Nav.Link>
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
              path='log-in'
              element={<LogIn />}
            />

            <Route
              path='/'
              element={<HomePage />}
            />

            <Route
              path='success'
              element={<SuccessRegister />}
            />

            <Route
              path='profile'
              element={<Profile />}
            />
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;