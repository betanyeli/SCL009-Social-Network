import { templateProject } from './templateProject.js';

export const templateSOS= () => {
    document.getElementById('root').innerHTML = `
    <div class="first-screen">
    <div class="container-login">
    <div class="content-login">
    <p><i class="fas fa-user-shield"></i>Números de emergencia </p>
     <p id="number"><i class="fas fa-phone-alt"></i>  1455</p>
        <p>Fono Orientación y Ayuda 
        Violencia contra las mujeres
        Para mas información</p> 
        
    <a href="https://www.minmujeryeg.cl/sernameg/programas/violencia-contra-las-mujeres/fono-violencia/">Pincha aquí</a>
    <p>Carabineros: Fono familia</p> 
    <p id="number2"><i class="fas fa-phone-alt"></i>149</p> 
    <p>Si quieres obtener mas información</p>
    <a href="http://www.carabineros.cl/secciones/fonosEmergencia/">Pincha aquí</a>
    <button class ="btn-exit" id="exit">Salir</button>  
</div>
</div>
</div>
                                                `
  //enlace a registro
    document.getElementById('exit').addEventListener('click', () => {
    templateProject();
    window.location.hash = '#/project';
    });
    //si se loggea con éxito, pasar a muro


  }