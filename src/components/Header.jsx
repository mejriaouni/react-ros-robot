import React, { Component } from "react";
import { Navbar, Nav, Container} from "react-bootstrap"

class Header extends Component {
    state = {}
    render() {
        return (
            <Container>
            <Navbar bg="dark" expand="lg">
                    <Navbar.Brand href="#home">React Ros Robot</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
            </Container>
        );
    }
}

export default Header;