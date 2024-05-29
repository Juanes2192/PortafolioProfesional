import React from 'react';
import NavBar from './components/NavBar/NavBar';
import "./App.css";
import foto from './img/FotoCV.jpg';
import logohtml from './img/logohtml.svg';
import logocss from './img/CSS-Logo.svg';
import logoreact from './img/Reactlogo.svg';
import logobootstrap from './img/Bootstrap_logo.svg';
import logogithub from './img/Github-logo.svg';
import fondo from './img/fondoportafolio.jpg'

function App() {
  return (
    <div>
      <header className='Header'>
        <NavBar />
      </header>
      <div className='contenedor-principal'>
        <div className='secciones'>

        <section id="inicio" style={{backgroundImage: `url(${fondo})`}}>
            <div className="circle">
              <img src={foto} alt="FotoCV" className="image" />
            </div>
            <div className='secciones seccion-inicio'>
              <div className="presentacion">
                <h3 className='presentacion saludo'>Hola!</h3>
                <h1 className='presentacion nombre'>Soy Esteban Perdomo</h1>
                <h3 className='presentacion profesion'>Desarollador Frontend</h3>
              </div>
            </div>
          </section>

          <section id="acerca-de-mi">
            <div className='secciones seccion-acerca-de-mi'>
              <h2>Acerca de mi</h2>
              <h5>Soy Esteban Perdomo / Desarrollador Frontend / Tecnologa en desarrollo de software</h5>
              <p>¡Hola! Soy Esteban Perdomo, desarrollador Frontend con formación en desarrollo de software. 
                Me apasiona crear experiencias web excepcionales y cautivadoras. Mi enfoque se centra en combinar 
                habilidades técnicas con diseño intuitivo para ofrecer interfaces atractivas y funcionales. 
                ¡Estoy emocionada de colaborar contigo y llevar tus ideas al mundo digital!</p>
            </div>
          </section>

          <section id="mis-habilidades">
            <div className='secciones seccion-mis-habilidades'>
              <h2>Mis Habilidades</h2>
              <div className="logos-container">
                <div className="logo">
                  <img src={logohtml} alt="HTML" />
                </div>
                <div className="logo">
                  <img src={logocss} alt="CSS" />
                </div>
                <div className="logo">
                  <img src={logoreact} alt="React" />
                </div>
                <div className="logo">
                  <img src={logobootstrap} alt="Bootstrap" />
                </div>
                <div className="logo">
                  <img src={logogithub} alt="GitHub" />
                </div>
              </div>
            </div>
          </section>

          <section id="proyectos">
            <div className='secciones seccion-proyectos'>
              <h2>Proyectos</h2>
            </div>
          </section>

          <section id="contacto">
            <div className='secciones seccion-contacto'>
              <h2>Contacto</h2>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;