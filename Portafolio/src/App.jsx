import React from 'react';
import './App.css'
import { NavBar } from './components';

export function App() {
  return (
    <div>
      <NavBar nombre='Esteban' apellido='Perdomo'/>
      <NavBar nombre='Felipe' apellido='Rodirguez'/>
    </div>
  )
}

export default App;