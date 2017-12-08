import React,{Component} from 'react';
import {Button,Form,FormGroup,FormControl,ControlLabel} from 'react-bootstrap';
import {modificarTarea} from './actionCreators';
import {connect} from 'react-redux';
import '../node_modules/react-notifications/dist/react-notifications.css';
import Moment from 'moment';

class FrmModTarea extends Component{
    
    render(){
        return(
            <Form>
            <FormGroup controlId="titulo">
              <ControlLabel>Titulo</ControlLabel>
              {' '}
              <FormControl inputRef={input => this.id = input} type="hidden"  value={this.props.tarea._id}/>
              <FormControl inputRef={input => this.titulo = input} type="text" placeholder="Titulo de la tarea" defaultValue={this.props.tarea.titulo}/>
            </FormGroup>
            {' '}
            <FormGroup controlId="autor">
              <ControlLabel>Autor:</ControlLabel>
              {' '}
              <FormControl inputRef={input => this.autor = input} type="text" placeholder="usuario que crea la tarea" defaultValue={this.props.tarea.autor}/>
            </FormGroup>
            <FormGroup controlId="fechaEntrega">
              <ControlLabel>Fecha:</ControlLabel>
              {' '}
              <FormControl inputRef={input => this.fechaEntrega = input} type="date" defaultValue={Moment(this.props.tarea.fechaEntrega).format("YYYY-MM-DD")}/>
            </FormGroup>
            {' '}
            <FormGroup controlId="descripcion">
                <ControlLabel>Descripcion:</ControlLabel>
                <FormControl inputRef={input => this.descripcion = input} componentClass="textarea" placeholder="textarea" defaultValue={this.props.tarea.descripcion}/>
            </FormGroup>
                <Button type="button" bsStyle="success" onClick={()=> {this.props.modificarTarea({
                    id:this.id.value,
                    titulo:this.titulo.value,
                    descripcion:this.descripcion.value,
                    autor:this.autor.value,
                    fechaEntrega:this.fechaEntrega.value
                });
                this.props.cerrar()}}>
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
        modificarTarea(tarea){
            dispatch(modificarTarea(tarea))
        }
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(FrmModTarea);