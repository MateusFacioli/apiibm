//classe que ira renderizar o fluxo de tela pelo componente App e 3 rotas ja configuradas
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home';
import login from './pages/login';
import dados from './pages/dados';

ReactDOM.render(
    ( 
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/login" component={login}/>
                    <Route path="/dados" component={dados}/>
                </Switch>
            </App>
        </Router>
    ),
    document.getElementById('root')
); 