import React,{Component} from 'react';
import {Panel,Col,Button,Image} from 'react-bootstrap';
import cross from './cross.png';
import check from './check.png';
import './Tarea.css';
import {borrarTarea} from './actionCreators';
import {connect} from 'react-redux';

class Tarea extends Component{
    render(){
        console.log("tarea: ",this.props.tarea.entregado)
        return(
            <Col xs={3} md={3}>
                 <Panel header={this.props.tarea.titulo} bsStyle="primary">
                    ID: {this.props.tarea._id}<br/>
                    Descripcion:{this.props.tarea.descripcion}<br/>
                    Autor:{this.props.tarea.autor}<br/>
                    Fecha de entrega:{this.props.tarea.fechaEntrega}<br/>
                    Entregado: {this.props.tarea.entregado ? <Image src={check}  />:<Image src={cross}  />}<br/>
                    <Button bsStyle="success">
                       Modificar
                    </Button>
                    <Button bsStyle="danger" onClick={()=>this.props.borrarTarea(this.props.tarea._id)}>
                        Eliminar
                    </Button>
                </Panel>
            </Col>
        )
    }

}

const mapStateToProps = (store) => {
    return{}
}

const mapDispatchToProps = (dispatch) => {
    return{
        borrarTarea(tarea){
            dispatch(borrarTarea(tarea))
        }
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Tarea);