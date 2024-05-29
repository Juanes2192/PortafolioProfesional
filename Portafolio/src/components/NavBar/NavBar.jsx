import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; // Importa componentes de la barra de navegación de React Bootstrap
import Container from 'react-bootstrap/Container'; // Importa el componente Container de React Bootstrap
import "./NavBar.css"; // Importa los estilos CSS para la barra de navegación

export function NavBar() {

  // Función para ajustar el desplazamiento después de hacer clic en un enlace
  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const targetElement = document.getElementById(targetId); // Obtiene el elemento de destino utilizando su ID
    if (targetElement) { // Verifica si el elemento de destino existe
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Ajusta el desplazamiento para tener un poco de espacio sobre el título
        behavior: "smooth" // Desplazamiento suave
      });
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary"> 
      <Container> 
        <Navbar.Brand href="#home">{"< EP />"}</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="me-auto"> 
            {/* Enlaces de navegación con identificadores y manejadores de eventos para el clic */}
            <Nav.Link onClick={(e) => handleNavLinkClick(e, 'inicio')} href="#inicio">Inicio</Nav.Link>
            <Nav.Link onClick={(e) => handleNavLinkClick(e, 'acerca-de-mi')} href="#acerca-de-mi">Acerca de mi</Nav.Link>
            <Nav.Link onClick={(e) => handleNavLinkClick(e, 'mis-habilidades')} href="#mis-habilidades">Mis Habilidades</Nav.Link>
            <Nav.Link onClick={(e) => handleNavLinkClick(e, 'proyectos')} href="#proyectos">Proyectos</Nav.Link>
            <Nav.Link onClick={(e) => handleNavLinkClick(e, 'contacto')} href="#contacto">Contactos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;