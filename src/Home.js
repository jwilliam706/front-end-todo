import React,{Component} from 'react';
import {Jumbotron,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends Component{
    render(){
        return(
            <Jumbotron>
                <h1>Hola,
                    {this.props.logged?this.props.nombre:"Bienvenido!"}
                </h1>
                {!this.props.logged
                ?
                    <div>
                        <p>Para poder agregar y administrar tus tareas debes iniciar sesion</p>
                    
                        <Link to="/login">
                        <Button bsStyle="primary">
                            Ir a Login
                        </Button>
                        </Link>
                    </div>
                :
                <div>
                    <p>Puedes agregar y administrar tus tareas desde el menu</p>
                
                    <Link to="/tareas">
                    <Button bsStyle="primary">
                        Ir a Tareas
                    </Button>
                    </Link>
                </div>
                }
                
          </Jumbotron>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        logged:state.logged,
        nombre: state.usuario.nombre
    }
}

export default connect(mapStateToProps)(Home);