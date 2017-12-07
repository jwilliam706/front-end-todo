import React,{Component} from 'react';
import Formulario from './Formulario';
import Home from './Home';
import PanelTareas from './PanelTareas';
import Tarea from './Tarea';
import {Switch, Route} from 'react-router-dom';
import autenticar from './Autenticar';


class Body extends Component{
    render(){
        return(

            <Switch>
                <Route  exact path="/" component={Home}/>
                <Route  path="/login" component={Formulario}/>
                <Route  path="/tareas" component={autenticar(PanelTareas)}/>
                <Route  path="/tareas/:id" component={Tarea}/>
                <Route  component={Formulario}/>
            </Switch>
    )}
}

export default Body