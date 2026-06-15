import { useState } from 'react'
import './App.css'
import Tarea from './componentes/Tarea';
import Tareas from './componentes/Tareas';
import { TAREAS } from './mocks/tareas';

export default function App() {
  const [tareas, setTareas] = useState(TAREAS);
  const [descripcion, setDescripcion] = useState('');

  function alAnadir() {
    const id = tareas.map(tarea => tarea.id).reduce((anterior, actual) => anterior > actual ? anterior: actual) + 1;
    setTareas([{ id, descripcion, completada: false }, ...tareas]);// tareas.push({id: 0, descripcion, completada: false});
    setDescripcion('');
  }

  return <main className="app-tareas">
    <h1>Tareas</h1>

    <div>
      <input className="tarea-nueva" placeholder="Tarea nueva" onChange={e => setDescripcion(e.target.value)} value={descripcion} />
      <button className="boton" onClick={alAnadir}>Añadir</button>
    </div>

    <Tareas tareas={tareas} />

    <footer>&copy;2026 Javier Lete</footer>
  </main>;
}
