import React,{Component} from 'react';
import {Grid,Row} from 'react-bootstrap';
import Tarea from './Tarea';
import NuevaTarea from './NuevaTarea';
import ModalAgregarT from './modalAgregarT';
import {connect} from 'react-redux';
import {cargarTareas} from './actionCreators';
    

class PanelTareas extends Component{
    
    render(){
        return(
            <Grid>
                <Row>
                    {
                        this.props.tareas.map(tarea=>{
                            return <Tarea key={tarea._id} tarea={tarea}/>  
                        })
                    }
                    <NuevaTarea/>
                    <ModalAgregarT/>
                </Row>
            </Grid>
        )
    }

    componentWillMount(){
        this.props.mostrarTareas();
    }

}

const mapStateToProps = (store) => {
    return{
        tareas: store.tareas
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        mostrarTareas(){
            dispatch(cargarTareas())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PanelTareas);