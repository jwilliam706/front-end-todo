import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import setAuthorizationToken from './setAuthorizationToken';
import {setUsuarioActual} from './actionCreators';
import jwt from 'jsonwebtoken';
import axios from 'axios';

if(localStorage.token){
    axios.post("http://api-rest-padawan.herokuapp.com/verificarToken",{token:localStorage.token}).then(
        response=>{
            if(response.data.valido)
            {
                setAuthorizationToken(localStorage.token);
                store.dispatch(setUsuarioActual(jwt.decode(localStorage.token)));
            }
            else
            {
                localStorage.removeItem('token');
            }
        }
    )

    
}

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
