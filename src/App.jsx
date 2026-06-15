import { useState } from 'react'
import './App.css'
import Tarea from './componentes/Tarea';
import Tareas from './componentes/Tareas';
import { TAREAS } from './mocks/tareas';

export default function App() {
  return <>
    <h1>Tareas</h1>
    
    <div>
      <input className="tarea-nueva" placeholder="Tarea nueva"/>
    </div>
    
    <Tareas tareas={TAREAS}/>

    <footer>&copy;2026 Javier Lete</footer>
  </>;
}
