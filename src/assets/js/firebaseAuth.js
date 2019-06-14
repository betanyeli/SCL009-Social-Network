import { templateLogin, userInvalid, emailVerify } from "../views/templateLogin.js";
//import { readNameDB } from '../js/firebasePost.js';
//import { templateProject } from "../views/templateProject.js";


//export let name, email;

// Guardar usuarios registrados en firestore
export const saveUsers = (name, email,uid) => {
  let db = firebase.firestore();
  db.collection("users").add({
    uid: uid,
    name: name,
    email: email
   

  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

//Todas las funciones de registro e inicio de sesión de firebase

//Register
export const register = (name, email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {

      let user = firebase.auth().currentUser;
      let uid = user.uid;
      //console.log(uid);
      verifyAccount();
      observer();
      saveUsers(name, email,uid);
     
      window.location.hash = '#/login';

    })
    .catch(error => {
      // Handle Errors here.
      let errorCode = error.code;
      userInvalid(errorCode);
      let errorMessage = error.message;
    });
}

//Login

export const login = (mail, pass) => {
  firebase.auth().signInWithEmailAndPassword(mail, pass)
    .then(() => {
     observer();
      let user = firebase.auth().currentUser;

      if (user.emailVerified) {
      console.log(user.emailVerified)
      //templateProject();
      window.location.hash = '#/project';
        
      }
      else {
      signOut()
      window.location.hash = '#/login';
      emailVerify(user.emailVerified);
      }
    })
    .catch(error => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      templateLogin();

      userInvalid(errorCode);


    });
}

// Verificar cuenta
const verifyAccount = () => { //envía correo de verificación al user, funcionando OK
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(() => {
    //alert("revisa tu bandeja de entrada")
    // Email sent.
  }).catch(error => {
    // An error happened.
    // alert("ya estás registrado")
  });
}


//Resetear contraseña

export const resetPassword = (email) => {
  let auth = firebase.auth();
  let emailAddress = email;

  auth.sendPasswordResetEmail(emailAddress)
    .then(() => {


    }).catch(error => {

      let errorCode = error.code;
      userInvalid(errorCode);

    });
}

//Iniciar sesión con Google
export const googleAuth = () => {

  let provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(result => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    console.log(token);
    // The signed-in user info.
    let user = result.user;
    console.log(user);
let name = user.displayName;
console.log(name);
let email = user.email;
console.log(email);
let uid = user.uid;

saveUsers(name, email, uid);
    window.location.hash = '#/project';
    // ...
  }).catch(error => {
    // Handle Errors here.
    let errorCode = error.code;
    console.log(errorCode);
    let errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    let email = error.email;
    console.log(email);
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    console.log(credential);
    // ...
  });

}

//Observer
export const observer = (callback) => {
  
  firebase.auth().onAuthStateChanged(user => {
   //let user = firebase.auth().currentUser;
    if (user === null) {
      return window.location.hash = "";

      //window.location.hash = '#/project';
      // User is signed in.
    } if (!user.emailVerified) {
      return window.location.hash = "";
    } if (callback) {
      callback();
    }
    
    else {
      
  window.location.hash = "#/project";
      //emailVerify(emailVerified)
      // User is signed out.
      
    }
  });
}

// cerrar sesión
export const signOut = () => {
  firebase.auth().signOut()
  .then(() => {
  
    templateLogin();
    //document.getElementById("error-message").innerHTML= "Vuelve pronto ÑAÑAÑA";
    window.location.hash = '#/login';
    // Sign-out successful.
  }).catch(error => {
    // An error happened.
  });

}