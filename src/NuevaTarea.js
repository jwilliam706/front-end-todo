import React,{Component} from 'react';
import {Panel,Col,Image} from 'react-bootstrap';
import plus from './plus.png';

class NuevaTarea extends Component{
    render(){
        return(
            <Col xs={3} md={3}>
                 <Panel header="Nueva tarea" bsStyle="primary">
                  <Image src={plus} responsive  style={{ display: 'block', margin: 'auto' }}/>
                </Panel>
            </Col>
        )
    }

}




export default NuevaTarea;