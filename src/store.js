import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import tareaReducer from './tareaReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


export default createStore(tareaReducer,
{
    tareas:[],
    logged: false,
    usuario:[]
},
composeWithDevTools(
    applyMiddleware(logger,thunk)
));
