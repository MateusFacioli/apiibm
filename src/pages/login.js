import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';

//const firebaseApp = firebase.initializeApp(firebaseConfig);
//rotas autenticadas após login consegue acessar dados e outras paginas
class login extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="login">
       <header className="App-header">
          {
            user
              ? <p>Olá, {user.displayName}</p>
              : <p>Por favor logue em API IBM.</p>
          }

          {
            user
              ? <button onClick={signOut}>Sign out Google</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
        </header>
      </div>
    );
  }
}

const firebaseAppAuth = firebase.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
 
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(login);