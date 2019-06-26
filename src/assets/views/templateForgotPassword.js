import { templateLogin } from './templateLogin.js';
import { resetPassword } from '../js/firebaseAuth.js'; // const reset password
import { validateForgotPassword } from '../js/validate/validateForgotPassword.js';
import { validateMail } from '../js/validate/validateRegister.js'; // const validate
;



export const templateForgotPassword= () => {

  
    document.getElementById('root').innerHTML = `
    <div class="first-screen">
    <div class="container-login"> 
    <div class="content-login">  
    <h1>Recuperar contraseña</h1>
    <p>No te preocupes amiga, puedes hacerlo aquí!<p>
    <p id="error-message"></p>
    <input class="form" type="text" id="email-reset" name="email" placeholder="Ingresa tu correo" required>
   <button class= "btn-send" id="btn-send">Enviar</button>
  <button class ="btn-back-password" id ="btn-back-password">Regresar</button>
  </div>
    </div>
     </div>
                                                `
   
document.getElementById('btn-send').addEventListener('click', () => {
 
 let email = document.getElementById('email-reset').value;
 
  
 
 if (validateForgotPassword(email)=== true) {
  document.getElementById('error-message').innerHTML="Ingresa el email"; 
  document.getElementById('email-reset').value='';
  
  
  }  else if (validateMail(email)) {
    document.getElementById('error-message').innerHTML="Formato de correo inválido";
    document.getElementById('email-reset').value='';
   
  
  }
  else {
  
    resetPassword(email)
    document.getElementById('error-message').innerHTML="Correo enviado exitosamente";
//   templateLogin();
// window.location.hash = '#/login';
   
 
  }
  });

  document.getElementById('btn-back-password').addEventListener('click',()=>{
  templateLogin();
    window.location.hash = '#/login';
   
    });

  }