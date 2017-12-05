import React,{Component} from 'react';
import {Panel,Col,Checkbox,Button,Image} from 'react-bootstrap';
import cross from './cross.png';
import check from './check.png';
import './Tarea.css';

class Tarea extends Component{
    render(){
        console.log("tarea: ",this.props.tarea.entregado)
        return(
            <Col xs={3} md={3}>
                 <Panel header={this.props.tarea.titulo} bsStyle="primary">
                    Descripcion:{this.props.tarea.descripcion}<br/>
                    Autor:{this.props.tarea.autor}<br/>
                    Fecha de entrega:{this.props.tarea.fechaEntrega}<br/>
                    Entregado: {this.props.tarea.entregado ? <Image src={check}  />:<Image src={cross}  />}<br/>
                    <Button bsStyle="success">
                       Modificar
                    </Button>
                    <Button bsStyle="danger">
                        Eliminar
                    </Button>
                </Panel>
            </Col>
        )
    }

}




export default Tarea;