import React,{Component} from 'react';
import {Jumbotron,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <Jumbotron>
                <h1>Hola,Bienvenido!</h1>
                <p>Para poder agregar y administrar tus tareas debes iniciar sesion</p>
                
                    <Link to="/login">
                    <Button bsStyle="primary">
                        Ir a Login
                    </Button>
                    </Link>
                
          </Jumbotron>
        )
    }
}

export default Home