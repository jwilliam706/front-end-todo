import React,{Component} from 'react';
import {Panel,Col,Button,Image} from 'react-bootstrap';
import cross from './cross.png';
import check from './check.png';
import './Tarea.css';
import {borrarTarea,finalizarTarea} from './actionCreators';
import {connect} from 'react-redux';
import Modificar from './modificarTarea';
import {NotificationManager} from 'react-notifications';


class Tarea extends Component{
    constructor(props) {
        super(props);
        this.state = { mostrar:false };
      }
    render(){
        let cerrar = () => this.setState({ mostrar: false });
        return(
            <Col xs={12} md={6} lg={3}>
                 <Panel header={this.props.tarea.titulo} bsStyle="primary">
                    ID: {this.props.tarea._id}<br/>
                    Descripcion:{this.props.tarea.descripcion}<br/>
                    Autor:{this.props.tarea.autor}<br/>
                    Fecha de entrega:{this.props.tarea.fechaEntrega}<br/>
                    Entregado: {this.props.tarea.entregado ? <Image src={check}  />:<Image src={cross}  />}<br/>
                    <Button bsStyle="success" onClick={() => this.setState({ mostrar: true })}>
                       Modificar
                    </Button>
                    <Button bsStyle="warning" onClick={()=>this.props.finalizarTarea(this.props.tarea._id)}>
                       Finalizar
                    </Button>
                    <Button bsStyle="danger" onClick={()=>this.props.borrarTarea(this.props.tarea._id)}>
                        Eliminar
                    </Button>
                </Panel>
                <Modificar show={this.state.mostrar} onHide={cerrar} tarea={this.props.tarea}/>
            </Col>
        )
    }

}

const mapStateToProps = (store) => {
    return{}
}

const mapDispatchToProps = (dispatch) => {
    return{
        borrarTarea(id){
            dispatch(borrarTarea(id))
        },
        finalizarTarea(id){
            dispatch(finalizarTarea(id))
        }
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Tarea);