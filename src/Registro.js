import React,{Component} from 'react';
import {Button,Form,FormGroup,FormControl,ControlLabel,Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import '../node_modules/react-notifications/dist/react-notifications.css';
import {registrarse} from './actionCreators';
import PropTypes from 'prop-types';

class Registro extends Component{
    componentWillMount(){
        if(this.props.logged){
            this.context.router.history.push("/");
        }
    }

    componentWillUpdate(nextProps){
        if(nextProps.logged){
            this.context.router.history.push("/");
        }
    }
        render(){
            return(
                <Col sm={8} smOffset={2}>
                    <Form>
                        <FormGroup controlId="nombre">
                            <ControlLabel>Nombre</ControlLabel>
                            {' '}
                            <FormControl inputRef={input => this.nombre = input} type="text" placeholder="Nombre del usuario" />
                        </FormGroup>
                        {' '}
                        <FormGroup controlId="email">
                        <ControlLabel>Correo:</ControlLabel>
                        {' '}
                        <FormControl inputRef={input => this.email = input} type="email" placeholder="correo electronico"/>
                        </FormGroup>
                        {' '}
                        <FormGroup controlId="password">
                        <ControlLabel>Contraseña:</ControlLabel>
                        {' '}
                        <FormControl inputRef={input => this.pass = input} type="password" placeholder="Contraseña"/>
                        </FormGroup>
                        <Button type="button" bsStyle="success" onClick={()=> {
                            this.props.registrarse({
                                nombre:this.nombre.value,
                                username:this.email.value,
                                password:this.pass.value
                            });
                        }}>
                        Guardar
                        </Button>
                    </Form>
                </Col>
            )
        }
    }

    Registro.contextTypes = {
        router:PropTypes.object.isRequired
    }

    const mapStateToProps = (state) =>{
        return{
            logged: state.logged
        }
    }

    const mapDispatchToProps = (dispatch) =>{
        return{
            registrarse(usuario)
            {
                dispatch(registrarse(usuario))
            }
    }
}

    export default connect(mapStateToProps,mapDispatchToProps)(Registro);
