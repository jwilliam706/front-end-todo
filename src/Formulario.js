import React,{Component} from 'react';
import  {Form,FormGroup,Button,ControlLabel,FormControl,Checkbox,Grid,Row,Col} from 'react-bootstrap';
import {NotificationManager} from 'react-notifications';
import {connect} from 'react-redux';
import {logIn} from './actionCreators';
import PropTypes from 'prop-types';


class Formulario extends Component{
    
    validate = () => {
        if(this.username.value===""||this.password.value==="")
        {
            return false;
        }

        return true;
    }

    onSubmit(e){
        e.preventDefault();
        if(this.validate()){
            let username = this.username.value;
            let password = this.password.value;

            this.props.logIn({username,password});
        }
        else
        {
            NotificationManager.error('Datos no válidos', 'Error');
        }
    }

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
        <Grid>
            <Row className="show-grid">
              <Col xs={3} md={3}></Col>
              <Col xs={6} md={6}>
                <Form horizontal sm={6} onSubmit={this.onSubmit.bind(this)}>
                    <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="Email" inputRef={(ref)=>this.username=ref}/>
                    </Col>
                    </FormGroup>
        
                    <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" inputRef={(ref)=>this.password=ref}/>
                    </Col>
                    </FormGroup>
        
                    <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>Recordarme</Checkbox>
                    </Col>
                    </FormGroup>
        
                    <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit" bsStyle="primary">
                        Iniciar Sesion
                        </Button>
                    </Col>
                    </FormGroup>
                </Form>
              </Col>
            </Row>
        </Grid>
            
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        logged: state.logged
    }
} 

const mapDispatchToProps = (dispatch) =>{
    return{
        logIn:(usuario) => {
            dispatch(logIn(usuario))
        }
    }
}

Formulario.contextTypes = {
    router:PropTypes.object.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(Formulario)