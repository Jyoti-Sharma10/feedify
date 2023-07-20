import React, {useState}from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './ContextReducer';
import Model from '../Model';
import Cart from '../screens/Cart';

export default function Header() {

  const [cartView, setCartView] = useState(false)
  const navigate = useNavigate();
  const items = useCart();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };


  const loadCart = () => {
    setCartView(true)
}

  return (
    <div style={{ height: "80px" }}>
      <Navbar expand="lg" className="bg-success">
        <Container fluid >
          <LinkContainer to="/">
            <Navbar.Brand to="/" className="text-white">Feedify</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 active fs-5" navbarScroll>
              <LinkContainer to="/" className="text-white">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              {localStorage.getItem("authToken") ? (
                <LinkContainer to="/" className="text-white">
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
                  <div className="bg-white mx-2" onClick={loadCart}>
                  <Badge color="white" className="bg-white" badgeContent={items.length} >
                  <FaShoppingCart color='green' fontSize='25px'/>
                  </Badge>
                  </div>
                  {cartView ? <Model onClose={() => setCartView(false)}><Cart></Cart></Model> : ""}
                  <Button
                    variant="btn bg-white text-success mx-1"
                    onClick={handleLogout}
                  >
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

                                