import React,{Component} from 'react';
import {Modal,Button} from 'react-bootstrap';
import Alerta from './Alerta';
import FrmAddTarea from './FrmAddTarea';


class ModalAgregarT extends Component{
    render() {
        return (
          <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">Agregar Tarea</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FrmAddTarea/>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="primary" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
}

export default ModalAgregarT