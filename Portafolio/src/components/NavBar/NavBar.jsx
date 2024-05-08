import "./NavBar.css"

export function NavBar({nombre,apellido}) {

    console.log(nombre);
    console.log(apellido);
    
  return (
    <div>
        <h1>Nombre: {nombre}</h1>
        <h2>Apellido: {apellido}</h2>
        <h2>sdsd</h2>
    </div>
  );
}

export default NavBar;
