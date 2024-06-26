import React from 'react';
import NavBar from './components/NavBar/NavBar';
import "./App.css";
import './fuente.css';
import fondo from './img/fondoportafolio.jpg'; // Cambia el nombre del archivo según sea necesario
import foto from './img/FotoCV.jpg';
import logohtml from './img/logohtml.svg';
import logocss from './img/CSS-Logo.svg';
import logoreact from './img/Reactlogo.svg';
import logobootstrap from './img/Bootstrap_logo.svg';
import logogithub from './img/Github-logo.svg';
import JavaScript_logo from './img/JavaScript_logo.svg';
import iconoCopy from './img/iconocopy.svg';
import iconoemail from './img/iconoemail.svg';
import iconoLinkedln from './img/LinkedIn_icono.svg'
import iconoEnviar from './img/iconoEnviar.svg'

function App() {
  const handleCopyEmail = () => {
    const inputEmail = document.getElementById('exampleInputEmail1');
    // Copiar el contenido del input al portapapeles
    inputEmail.select();
    document.execCommand('copy');
    // Deseleccionar el texto para evitar resaltarlo
    window.getSelection().removeAllRanges();
  };

  return (
    <div>
      <header className='Header'>
        <NavBar />
      </header>
      <div className='contenedor-principal'>
        <section id="inicio" style={{ backgroundImage: `url(${fondo})` }}>
          <div className="circle">
            <img src={foto} alt="FotoCV" className="image" />
          </div>
          <div className='secciones seccion-inicio'>
            <div className="presentacion">
              <h3 className='presentacion saludo'>¡Hola!</h3>
              <h1 className='presentacion nombre'>Soy Esteban Perdomo</h1>
              <h3 className='presentacion profesion'>Desarollador Front-end</h3>
              <button className="btn btn-primary">Ver CV</button>
            </div>
          </div>
        </section>
        {/* Resto de las secciones sin fondo */}
        <section id="acerca-de-mi">
          <div className='secciones seccion-acerca-de-mi'>
            <h2><strong>Acerca de mi</strong></h2>
            <h5>Soy Esteban Perdomo / Desarrollador Frontend / Tecnologo en desarrollo de software</h5>
            <p>Soy Desarrollador Front-End Junior con habilidades en HTML, CSS y JavaScript.
              Destaco en el diseño y desarrollo de interfaces atractivas y funcionales utilizando tecnologías como Bootstrap y React. Me
              Apasiona aprender y contribuir en proyectos innovadores,
              estoy comprometido con el crecimiento continuo y la excelencia en mi trabajo.</p>
          </div>
        </section>

        <section id="mis-habilidades">
          <div className='secciones seccion-mis-habilidades'>
            <h2><strong>Mis Habilidades</strong></h2>
            <div className="logo-container">
              <img src={logohtml} alt="HTML" className="logo" />
              <span>HTML</span>
            </div>
            <div className="logo-container">
              <img src={logocss} alt="CSS" className="logo" />
              <span>CSS</span>
            </div>
            <div className="logo-container">
              <img src={JavaScript_logo} alt="JavaScript" className="logo" />
              <span>JavaScript</span>
            </div>
            <div className="logo-container">
              <img src={logobootstrap} alt="Bootstrap" className="logo" />
              <span>Bootstrap</span>
            </div>
            <div className="logo-container">
              <img src={logoreact} alt="React" className="logo" />
              <span>React</span>
            </div>
            <div className="logo-container">
              <img src={logogithub} alt="GitHub" className="logo" />
              <span>GitHub</span>
            </div>
          </div>
        </section>

        <section id="proyectos">
          <div className='secciones seccion-proyectos'>
            <h2><strong>Proyectos</strong></h2>
            <p>ESTOY EN PROYECTOS</p>
            <p>ESTOY EN PROYECTOS</p>
            <p>ESTOY EN PROYECTOS</p>
            <p>ESTOY EN PROYECTOS</p>
            <p>ESTOY EN PROYECTOS</p>
            <p>ESTOY EN PROYECTOS</p>
            <p>ESTOY EN PROYECTOS</p>
            <p>ESTOY EN PROYECTOS</p>
          </div>
        </section>

        <section id="formacion">
          <div className='secciones seccion-formacion'>
            <h2><strong>Formacion</strong></h2>
            <p>ESTOY EN Formacion</p>
            <p>ESTOY EN Formacion</p>
            <p>ESTOY EN Formacion</p>
            <p>ESTOY EN Formacion</p>
            <p>ESTOY EN Formacion</p>
            <p>ESTOY EN Formacion</p>
            <p>ESTOY EN Formacion</p>
            <p>ESTOY EN Formacion</p>
          </div>
        </section>

        <section id="contacto">
          <div className='secciones seccion-contacto'>
            <h2><strong>Contacto</strong></h2>
            <div className="input-container">
              <div className="input-with-icon">
                <img src={iconoLinkedln} alt="Icono linkedln" className="icono-linkedln" />
                <input type="text" className="form-control input-text" value="Juan Esteban Perdomo Leiva" readOnly />
                <img src={iconoEnviar} alt="Icono Enviar" className="icono-Enviar" id="iconoEnviar" onClick={() => window.open('https://www.linkedin.com/in/juan-esteban-perdomo-leiva-280292302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ', '_blank')} />
              </div>
              <div className="input-with-icon">
                <img src={iconoemail} alt="Icono Email" className="icono-email" />
                <input type="email" className="form-control input-email" id="exampleInputEmail1" aria-describedby="emailHelp" value="juanestebanperdomoleiva@gmail.com" readOnly />
                <img src={iconoCopy} alt="Icono Copy" className="icono-copy" id="iconoCopy" onClick={handleCopyEmail} />
              </div>
            </div>
          </div>
        </section>


        <section id="derechos" className="seccion-derechos">
          <div className='secciones'>
            <p>&copy; {new Date().getFullYear()} Esteban Perdomo. Todos los derechos reservados.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;