import React, { Component } from 'react';
import SweetAlert from 'sweetalert2-react';
import '../node_modules/sweetalert2/dist/sweetalert2.css';

class Alerta extends Component{
    constructor(props) {
        super(props);
        this.state = { show:false };
      }
    render() {
        return (
          <div>
            <button onClick={() => this.setState({ show: true })}>Alert</button>
            <SweetAlert
              show={this.state.show}
              showCancelButton
              title="Demo"
              text="SweetAlert in React"
              type="error"
              onConfirm={() => this.setState({ show: false })}
            />
          </div>
        );
      }
}


export default Alerta