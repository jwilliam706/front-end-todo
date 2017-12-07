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

if(localStorage.token){
    setAuthorizationToken(localStorage.token);
    store.dispatch(setUsuarioActual(jwt.decode(localStorage.token)));
}

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
