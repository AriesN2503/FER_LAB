import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header({ toggleTheme }) {
  return (
    <Navbar expand="lg" className="header">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="title col-12 col-lg-3">
          Orchids Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler" />
        <Navbar.Collapse id="navbarScroll" className="col-12 col-lg-9">
          <div className="row w-100 justify-content-center align-items-center">
            <Nav className="me-auto link-items col-12 col-lg-8" navbarScroll>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Special
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <button onClick={toggleTheme} className="theme-toggle">
                <Icon icon="mdi:theme-light-dark" className="icon" />
              </button>
            </Nav>
            <Form className="d-flex col-12 col-lg-4 mt-2 mt-lg-0 justify-content-center">
              <input type="text" placeholder="Search" className="me-2 search" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
