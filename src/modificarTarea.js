import React,{Component} from 'react';
import {Modal,Button} from 'react-bootstrap';
import FrmModTarea from './FrmModTarea';


class ModalAgregarT extends Component{
    render() {
        return (
          <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">Modificar Tarea</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FrmModTarea tarea={this.props.tarea} cerrar={this.props.onHide}/>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="primary" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
}

export default ModalAgregarT