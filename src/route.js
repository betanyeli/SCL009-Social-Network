//import todas las vistas

import { templateAbout } from './assets/views/templateAbout.js';
import { templateProject } from './assets/views/templateProject.js';
import { templateHome } from './assets/views/templateHome.js';
import { templateForgotPassword } from './assets/views/templateForgotPassword.js';

export const changeRoute = (hash) => {
  if (hash === '#/about' || hash === '#/project' || hash === '#/home' || hash === '#/forgotpassword'|| hash === '' || hash === '#/' || hash === '/#') {
    return showTemplate(hash)
  }
  return showTemplate(hash)
}

// segunda función showTemplate(hash)

const showTemplate = (hash) => {
  // #/about
  const router = hash.substring(2); // home about project
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (router) {
    case 'about':
      templateAbout();
      break;
    case 'project':
      templateProject();
      break;
    case 'home':
      templateHome();
      break;
    case 'forgotpassword':
      templateForgotPassword();
    break;
    case '':
      templateHome();
      break;
    default:
      containerRoot.innerHTML = `<h1>Error 404</h1>`
  }
}

export const initRouter = () => {
  window.addEventListener('load', changeRoute(window.location.hash));

  if ('onhashchange' in window) {
    changeRoute(window.location.hash);
  }
}