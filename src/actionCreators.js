import axios from 'axios';
import {NotificationManager} from 'react-notifications';
import setAuthorizationToken from './setAuthorizationToken';


const cargarTareas = () => {
    return dispatch =>{
        return axios.get("http://api-rest-padawan.herokuapp.com/tareas").then(
            response =>{
                console.log("TAREAS: ",response.data)
                dispatch({
                    type:"MOSTRAR_TAREAS",
                    tareas:response.data
                })
            }
        )
    }
}

const agregarTarea = (tarea) =>{
    return dispatch => {
        return axios.post("http://api-rest-padawan.herokuapp.com/tareas",{
            titulo:tarea.titulo,
            descripcion: tarea.descripcion,
            autor: tarea.autor,
            fechaEntrega: tarea.fechaEntrega
        }).then(
            response =>{
                dispatch(cargarTareas())
            }
        )
    }
}

const modificarTarea = (tarea) =>{
    return dispatch => {
        return axios.put("http://api-rest-padawan.herokuapp.com/tareas/"+tarea.id,{
            titulo:tarea.titulo,
            descripcion: tarea.descripcion,
            autor: tarea.autor,
            fechaEntrega: tarea.fechaEntrega
        }).then(
            response =>{
                dispatch(cargarTareas()),
                NotificationManager.success('Success message', response.data.mensaje);
            }
        )
    }
}

const borrarTarea = (id) =>{
    return dispatch => {
        return axios.delete("http://api-rest-padawan.herokuapp.com/tareas/"+id).then(
            response =>{
                dispatch(cargarTareas())
            }
        )
    }
}

const finalizarTarea = (id) =>{
    return dispatch => {
        return axios.put("http://api-rest-padawan.herokuapp.com/tareas/finalizar/"+id).then(
            response =>{
                dispatch(cargarTareas())
            }
        )
    }
}

//Log In

const logIn = (usuario) =>{
    return dispatch =>{
        return axios.post("http://api-rest-padawan.herokuapp.com/login",{
            email:usuario.username,
            pass:usuario.password
        }).then(response =>{
            if(response.data.mensaje)
            {
                NotificationManager.error(response.data.mensaje,"Error");
            }
            else
            {
                const token = response.data.token;
                localStorage.setItem('token',token);
                setAuthorizationToken(token);
                dispatch(setUsuarioActual(response.data.usuario))
            }
        })
    }
}

const setUsuarioActual = usuario =>{
    return{
        type:"SET_USUARIO_ACTUAL",
        usuario,
        logged:true
    }
}

const logout = () =>{
    return dispatch =>{
        localStorage.removeItem('token');
        setAuthorizationToken(false);
        dispatch(setUsuarioActual({}));
        dispatch({
            type:"LOG_OUT"
        })
    }
}

export {cargarTareas,agregarTarea,modificarTarea,borrarTarea,finalizarTarea,logIn,setUsuarioActual,logout}