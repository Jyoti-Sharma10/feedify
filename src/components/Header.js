import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';

export default function Header() {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <LinkContainer to="/">
        <Navbar.Brand to="/">Feedify</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to='/login'>
            <Nav.Link>Login</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/createuser'>
            <Nav.Link>SignUp</Nav.Link>
            </LinkContainer>
        
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
