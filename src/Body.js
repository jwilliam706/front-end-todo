import React,{Component} from 'react';
import Formulario from './Formulario';
import Home from './Home';
import PanelTareas from './PanelTareas';
import {Switch,Router, Route} from 'react-router-dom';

class Body extends Component{
    render(){
        return(

            <Switch>
                <Route  exact path="/" component={Home}/>
                <Route  path="/login" component={Formulario}/>
                <Route  path="/tareas" component={PanelTareas}/>
                <Route  path="/tareas/:id" component={PanelTareas}/>
                <Route  component={Formulario}/>
            </Switch>
    )}
}

export default Body