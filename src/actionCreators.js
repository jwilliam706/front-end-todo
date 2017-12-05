import axios from 'axios';



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

const borrarTarea = (id) =>{
    return dispatch => {
        return axios.delete("http://api-rest-padawan.herokuapp.com/tareas/"+id).then(
            response =>{
                dispatch(cargarTareas())
            }
        )
    }
}



export {cargarTareas,agregarTarea,borrarTarea}