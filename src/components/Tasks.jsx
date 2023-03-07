import React, { useEffect, useState } from "react";
import { Task } from "./listTask/Task";

export const Tasks = ({ estado, update }) => {
  const [tareas, setTareas] = useState([]);
  const obtenerData = () => localStorage.getItem("task");
  useEffect(() => {
    obtenerData() !== null && setTareas(JSON.parse(obtenerData()));
  }, [update]);

  return (
    <ul className="bg-slate-50 text-slate-800 dark:bg-slate-700 dark:text-slate-300  transition-colors duration-1000 rounded-md p-2 w-full max-h-[230px] scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent overflow-y-scroll">
      {tareas.map((task, id) => (
        <Task task={task} key={id} estado={estado} />
      ))}
      {tareas.length === 0 ? <span>No hay tareas</span> : <></>}
    </ul>
  );
};
