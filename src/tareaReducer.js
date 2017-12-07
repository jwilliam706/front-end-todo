

const tareaReducer = (state,action) =>{
    if(action.type==="MOSTRAR_TAREAS"){
        return{
            ...state,
            tareas:action.tareas
        }
    }
    else if (action.type === "SET_USUARIO_ACTUAL"){
        return{
            ...state,
            usuario:action.usuario,
            logged: action.logged
        }
    }
    else if (action.type==="LOG_OUT"){
        return{
            ...state,
            logged:false,
            tareas:[]
        }
    }

    return state;
}

export default tareaReducer