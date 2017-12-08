import React,{Component} from 'react';
import {Button,Form,FormGroup,FormControl,ControlLabel} from 'react-bootstrap';
import {agregarTarea} from './actionCreators';
import {connect} from 'react-redux';
import '../node_modules/react-notifications/dist/react-notifications.css';


class FrmAddTarea extends Component{

    render(){
        return(
            <Form>
            <FormGroup controlId="titulo">
              <ControlLabel>Titulo</ControlLabel>
              {' '}
              <FormControl inputRef={input => this.titulo = input} type="text" placeholder="Titulo de la tarea" />
            </FormGroup>
            {' '}
            <FormGroup controlId="fechaEntrega">
              <ControlLabel>Fecha:</ControlLabel>
              {' '}
              <FormControl inputRef={input => this.fechaEntrega = input} type="date" />
            </FormGroup>
            {' '}
            <FormGroup controlId="descripcion">
                <ControlLabel>Descripcion:</ControlLabel>
                <FormControl inputRef={input => this.descripcion = input} componentClass="textarea" placeholder="textarea" />
            </FormGroup>
                <Button type="button" bsStyle="success" onClick={()=> {
                    this.props.agregarTarea({
                        titulo:this.titulo.value,
                        descripcion:this.descripcion.value,
                        fechaEntrega:this.fechaEntrega.value
                    });
                    this.props.cerrar();
            }}>
                    Guardar
                </Button>
          </Form>
        )
    }
}

const mapStateToProps = (store) => {
    return{}
}

const mapDispatchToProps = (dispatch) => {
    return{
        agregarTarea(tarea){
            dispatch(agregarTarea(tarea))
        }
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(FrmAddTarea);