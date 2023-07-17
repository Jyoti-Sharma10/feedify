import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer} from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';

export default function Header() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div style={{ height: "80px" }}>
      <Navbar expand="lg" className="bg-success">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand to="/">Feedify</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 active fs-5" navbarScroll>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              {localStorage.getItem("authToken") ? (
                <LinkContainer to="/">
                  <Nav.Link>My Orders</Nav.Link>
                </LinkContainer>
              ) : (
                ""
              )}
            </Nav>
            {!localStorage.getItem("authToken") ? (
              <Nav className="ml-auto">
                <Nav>
                  <LinkContainer to="/login">
                    <Button variant="btn bg-white text-success mx-1">
                      Login
                    </Button>
                  </LinkContainer>
                  <LinkContainer to="/createuser">
                    <Button variant="btn bg-white text-success mx-1">
                      Signup
                    </Button>
                  </LinkContainer>
                </Nav>
              </Nav>
            ) : (
              <Nav className="ml-auto">
                <Nav>
                  <Button
                    variant="btn bg-white text-success mx-1">
                    My Cart
                  </Button>
                    <Button variant="btn bg-white text-success mx-1" onClick={handleLogout}>
                      Logout
                    </Button>  
                </Nav>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
