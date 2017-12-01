import React,{Component} from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import {LinkContainer,IndexLinkContainer} from 'react-router-bootstrap';


class Navegacion extends Component {
    render(){
        return(
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">To Do List</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
          <IndexLinkContainer to="/">
            <NavItem>Inicio</NavItem>
          </IndexLinkContainer>

        <LinkContainer to="/login">
          <NavItem>Login</NavItem>
        </LinkContainer>

        <LinkContainer to="/tareas">
          <NavItem>Tareas</NavItem>
        </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )}
}

  export default Navegacion;