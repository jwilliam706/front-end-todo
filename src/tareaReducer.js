

const tareaReducer = (state,action) =>{
    if(action.type==="MOSTRAR_TAREAS"){
        return{
            ...state,
            tareas:action.tareas
        }
    }

    return state;
}

export default tareaReducer