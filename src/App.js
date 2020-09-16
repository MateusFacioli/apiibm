//classe que ira mostrar os componentes e páginas
import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import {Menubar} from 'primereact/menubar';
import {withRouter, useHistory} from 'react-router-dom';
//import firebaseAppAuth from './pages/login';
//import { isAuthenticated } from './pages/auth';
import { Routes } from './routes';


class App extends Component {

 
  render() {
    const {
      user,
      history
    } = this.props;
 
    const menuitems = [
      {
         label:'Home',
         icon:'pi pi-fw pi-home',
         command:() => history.push('/')
      },
      { 
         label:'Login',
         icon:'pi pi-sign-in',
         command:()=> history.push('/login')
      },
      {
         label:'Busque aqui',
         icon:'pi pi-fw pi-search',
         command:() => user ? history.push('/dados') : history.push('/login')
      },
      //aqui sao os icones de menu tem que ter a rota e o componente de cada 
      
   ];
   
    return (
      <div className="App">
        <Menubar model={menuitems}/>
      
        <Header/>
        <div id="main">
            <main>
                <div className="content" id="content">
                    {this.props.children}
                </div>
            </main>
        </div>
        <Footer/>
        
      </div>
    );
  }
}

const firebaseAppAuth = firebase.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  //apenas logando com google
};
export default withFirebaseAuth({  
  providers,
  firebaseAppAuth, 
})(withRouter(App));   