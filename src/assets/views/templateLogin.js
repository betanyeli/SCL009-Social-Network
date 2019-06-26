import { templateRegister } from './templateRegister.js'; //registro
import { templateForgotPassword } from './templateForgotPassword.js'; //registro
import { validateLogin } from '../js/validate/validateLogin.js'; // const validate
import { login } from '../js/firebaseAuth.js';
import { googleAuth } from '../js/firebaseAuth.js';
import { readNameDB } from '../js/firebasePost.js';



//export const printError = document.getElementById('error-message');
export const templateLogin = () => {
  
  document.getElementById('root').innerHTML = `
  <div class="first-screen">
  <div class="container-login">
      <div class="header-login">
         <img class="logo-login" src="./assets/img/logo.png">
          <div><h1>No More </h1>
          <h6>COMMUNITY</h6></div>

          
      </div>
      <div class="content-login">
          <p id="error-message"></p>
          <input class="form" type="text" id="email2" name="email" placeholder="Ingresa tu correo" required>
          <input class="form" type="password" id="password2" name="password" placeholder="Ingresa tu contraseña" required>
          <button class="btn-login" id="sign-in" type="submit">Iniciar Sesión</button>
          <button class="btn-google" id="btn-google"><img class= "icon" src="./assets/img/btn-google.png"><span>Inicia sesión con Google</span></button>
      </div>
      <div class="footer-login">
          <a id="btn-reset">¿Olvidaste tu contraseña?</a>
          <span>¿No tienes cuenta? <a id="btn-about">Regístrate</a></span>

      </div>
     <div>
      <div>
                                              `
//enlace a registro
  document.getElementById('btn-about').addEventListener('click', () => {
  


templateRegister();
window.location.hash = '#/register';

  });
  //si se loggea con éxito, pasar a muro
document.getElementById('sign-in').addEventListener('click', () => {
let mailValue= document.getElementById('email2').value;
let passValue= document.getElementById('password2').value;

//condition validate
if (validateLogin(mailValue, passValue)) {
document.getElementById('error-message').innerHTML="Usuario / contraseña inválido";
document.getElementById('email2').value='';
document.getElementById('password2').value='';

} 
 else {
  
  login(mailValue, passValue);
readNameDB();

  }
});
 //
document.getElementById('btn-reset').addEventListener('click', () => {

  templateForgotPassword();
  window.location.hash = '#/forgotpassword';
 

});

document.getElementById('btn-google').addEventListener('click',() =>{

  googleAuth();

});

  }

export const userInvalid =(errorCode) =>{


  if (errorCode === 'auth/wrong-password'){
  document.getElementById('error-message').innerHTML = "Contraseña inválida! ¡vuelve a intentar!";

  }

  if (errorCode === 'auth/invalid-email'  || errorCode === 'auth/user-not-found'){
    document.getElementById('error-message').innerHTML = "Usuario no registrado";
    
    
  }
  if (errorCode === 'auth/email-already-in-use'){
    document.getElementById('error-message').innerHTML = "El correo ya existe";
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('password').value='';
  }


  
}

export const emailVerify = (emailVerified) =>{
  if (!emailVerified) {
    document.getElementById('error-message').innerHTML = "¡Verifica tu cuenta!";
  }
}