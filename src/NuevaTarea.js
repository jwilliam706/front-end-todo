import React,{Component} from 'react';
import {Panel,Col,Image} from 'react-bootstrap';
import plus from './plus.png';
import Add from './modalAgregarT';


class NuevaTarea extends Component{
    constructor(props) {
        super(props);
        this.state = { mostrar:false };
      }
    render(){
        let cerrar = () => this.setState({ mostrar: false });
        return(
            <Col xs={12} md={6} lg={3}>
                 <Panel header="Nueva tarea" bsStyle="primary">
                  <Image src={plus} responsive onClick={() => this.setState({ mostrar: true })}  style={{ display: 'block', margin: 'auto' }}/>
                </Panel>
                <Add show={this.state.mostrar} onHide={cerrar} />
            </Col>
        )
    }

}


export default NuevaTarea