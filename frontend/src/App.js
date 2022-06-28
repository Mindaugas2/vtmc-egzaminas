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
import React, { useState, useEffect } from "react";
import AuthService from "./services/auth.service";
import { useNavigate } from 'react-router-dom';

function App() {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    navigate("/");
    window.location.reload();
  };

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
                {showAdminBoard ? (
                  <>
                    <Nav.Link
                      as={Link}
                      to="/create-categories"
                    >
                      Kurti kategorijas
                    </Nav.Link>

                    <Nav.Link
                      as={Link}
                      to="/add-books"
                    >
                      Pridėti knygas
                    </Nav.Link>

                    <Nav.Link onClick={logOut}>
                      Atsijungti
                    </Nav.Link>
                  </>
                ) : currentUser ? (
                  <>
                    <Nav.Link
                      as={Link}
                      to="/profile"
                    >
                      Įprastas vartotojas
                    </Nav.Link>

                    <Nav.Link onClick={logOut}>
                      Atsijungti
                    </Nav.Link>
                  </>
                ) : (
                  <>
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
                  </>
                )}
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