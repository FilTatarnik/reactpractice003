import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap' ;



class navbar extends Component {
    render(){
        return(
	        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
	          <Navbar.Brand href="#home">Filip Tatarnik</Navbar.Brand>
	          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
	          <Navbar.Collapse id="responsive-navbar-nav">
	            <Nav className="mr-auto">
	              <Nav.Link href="#features">Home</Nav.Link>
	              <Nav.Link href="#pricing">About</Nav.Link>
	              <NavDropdown title="Projects" id="collasible-nav-dropdown">
	                <NavDropdown.Item href="#action/3.1">Project1</NavDropdown.Item>
	                <NavDropdown.Item href="#action/3.2">Project2</NavDropdown.Item>
	                <NavDropdown.Item href="#action/3.3">Project3</NavDropdown.Item>
	                <NavDropdown.Item href="#action/3.4">Project4</NavDropdown.Item>
	                <NavDropdown.Item href="#action/3.5">Project5</NavDropdown.Item>
	                <NavDropdown.Item href="#action/3.6">Project6</NavDropdown.Item>
	                <NavDropdown.Divider />
	                <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
	              </NavDropdown>
	            </Nav>
	            <Nav>
	              <Nav.Link href="#deets">TimePlaceHolder</Nav.Link>
	              <Nav.Link eventKey={2} href="#memes">
	                Placeholder
	              </Nav.Link>
	            </Nav>
	          </Navbar.Collapse>
	        </Navbar>
        )
    }
}
export default navbar;
