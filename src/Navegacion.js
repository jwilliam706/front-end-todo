import React,{Component} from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import {LinkContainer,IndexLinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from './actionCreators';


class Navegacion extends Component {
    
  logout(e){
    e.preventDefault();
    this.props.logout();
  }

  componentWillUpdate(nextProps){
    if(!nextProps.logged){
        this.context.router.history.push("/");
    }
}

  render(){
      console.log(this.props.logged);

      const linksUser = (
        <div>
          <Nav>
          <IndexLinkContainer to="/">
            <NavItem>Inicio</NavItem>
          </IndexLinkContainer>

          <LinkContainer to="/tareas">
            <NavItem>Tareas</NavItem>
          </LinkContainer>

        </Nav>
         <Nav pullRight>
         <LinkContainer to="/logout" onClick={this.logout.bind(this)}>
         <NavItem>Cerrar Sesion</NavItem>
         </LinkContainer>
       </Nav>
        </div>
      );

      const linksGuest = (
        <Nav>
        <IndexLinkContainer to="/">
          <NavItem>Inicio</NavItem>
        </IndexLinkContainer>

      <LinkContainer to="/login">
        <NavItem>Login</NavItem>
      </LinkContainer>
      </Nav>
        
      );


        return(
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">To Do List</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {this.props.logged?linksUser:linksGuest}
        </Navbar.Collapse>
      </Navbar>
    )}
}

Navegacion.propTypes = {
  logged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

Navegacion.contextTypes = {
  router:PropTypes.object.isRequired
}

const mapStateToProps = (state) =>{
  return{
    logged:state.logged
  };
}

  export default connect(mapStateToProps,{logout})(Navegacion);