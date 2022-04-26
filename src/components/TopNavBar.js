import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function TopNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="text-center">
          Shadow Lakes
          <small className="d-block text-center">Homeowners Association</small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Minutes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/" disabled>
                2019
              </NavDropdown.Item>
              <NavDropdown.Item href="/" disabled>
                2020
              </NavDropdown.Item>
              <NavDropdown.Item href="/" disabled>
                2021
              </NavDropdown.Item>
              <NavDropdown.Item href="/">2022</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/frequently-asked-questions">
                Frequently Asked Questions
              </NavDropdown.Item>
              <NavDropdown.Item href="/approved-exterior-paint-colors">
                Approved Paint Colors
              </NavDropdown.Item>
              <NavDropdown.Item href="/board-members">
                Board Members
              </NavDropdown.Item>
              <NavDropdown.Item href="/deed-restrictions">
                Deed Restrictions
              </NavDropdown.Item>
              <NavDropdown.Item href="/bylaws">Bylaws</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Forms" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/" disabled>
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item href="/" disabled>
                Complaint/Violation
              </NavDropdown.Item>
              <NavDropdown.Item href="/" disabled>
                Estoppel Request
              </NavDropdown.Item>
              <NavDropdown.Item href="/" disabled>
                Architectural
              </NavDropdown.Item>
              <NavDropdown.Item href="/" disabled>
                Join Board
              </NavDropdown.Item>
              <NavDropdown.Item href="/" disabled>
                Join Fine Committee
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="tel:7278088624" className="text-center">
              (727) 808-8624
              <small className="d-block text-center">
                Available 8:00 am - 8:30 pm daily
              </small>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
