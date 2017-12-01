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

export {cargarTareas}