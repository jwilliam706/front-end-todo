import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import tareaReducer from './tareaReducer';



export default createStore(tareaReducer,
{
    tareas:[]
},
applyMiddleware(logger,thunk));
