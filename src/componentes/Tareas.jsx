import './Tareas.css';
import Tarea from "./Tarea";

export default function Tareas() {
    return <ul className="tareas">
        <li><Tarea /></li>
        <li><Tarea /></li>
        <li><Tarea /></li>
        <li><Tarea /></li>
    </ul>;
}