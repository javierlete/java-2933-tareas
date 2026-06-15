import { useEffect, useState } from 'react'
import './App.css'
import Tarea from './componentes/Tarea';
import Tareas from './componentes/Tareas';
import { URL_TAREAS } from './constantes/rutas';

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    fetch(URL_TAREAS).then(respuesta => {
      respuesta.json().then(tareas => {
        setTareas(tareas);
      })
    })
  }, []);

  async function alAnadir() {
    // const id = tareas.map(tarea => tarea.id).reduce((anterior, actual) => anterior > actual ? anterior : actual) + 1;

    const tarea = { descripcion, completada: false };

    const respuesta = await fetch(URL_TAREAS, {
      method: 'POST',
      body: JSON.stringify(tarea),
      headers: {
        'Content-type': 'application/json'
      }
    });

    const tareaNueva = await respuesta.json();

    setTareas([tareaNueva, ...tareas]);// tareas.push({id: 0, descripcion, completada: false});
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
