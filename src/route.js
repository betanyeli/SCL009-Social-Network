//import todas las vistas

import { templateRegister } from './assets/views/templateRegister.js';
import { templateLogin } from './assets/views/templateLogin.js';
import { templateForgotPassword } from './assets/views/templateForgotPassword.js';
import { templateProject } from './assets/views/templateProject.js';
import { templateSOS } from './assets/views/templateSOS.js';


export const changeRoute = (hash) => {
  if (hash === '#/register' || hash === '#/project' || hash === '#/login' || hash === '#/forgotpassword'||hash === '#/sos' || hash === '' || hash === '#/' || hash === '/#') {
    return showTemplate(hash)
  }
  return showTemplate(hash)
}

// segunda función showTemplate(hash)

const showTemplate = (hash) => {
  // #/register
  const router = hash.substring(2); // login register project
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (router) {
    case 'register':
      templateRegister();
      break;
    case 'project':
      templateProject();
      break;
    case 'login':
      templateLogin();
      break;
    case 'forgotpassword':
      templateForgotPassword();
    break;
    case 'sos':
      templateSOS();
      break;
    case '':
      templateLogin();
      break;
    default:
      containerRoot.innerHTML = `<h1>Error 404</h1>`
  }
}

export const initRouter = () => {
  window.addEventListener('load', changeRoute(window.location.hash));

  if ('onhashchange' in window) {
    window.onhashchange = () => {
      //observer();
    changeRoute(window.location.hash);
    
  }
}

}