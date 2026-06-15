import './Tareas.css';
import Tarea from "./Tarea";

export default function Tareas({ tareas }) {
    return <ul className="tareas">
        {tareas.map(tarea => <li key={tarea.id}><Tarea tarea={tarea} /></li>)}
    </ul>;
}
