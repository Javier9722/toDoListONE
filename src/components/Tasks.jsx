import React from "react";
import { Task } from "./listTask/Task";

const data = [
  {
    info: "Comer",
    important: false,
  },
  {
    info: "Dormir",
    important: true,
  },
  {
    info: "Juegar",
    important: false,
  },
  {
    info: "Trabajar",
    important: false,
  },
];

export const Tasks = () => {
  return (
    <ul className="bg-slate-50 text-slate-800 dark:bg-slate-700 dark:text-slate-300  transition-colors duration-1000 rounded-md p-2 w-full max-h-[230px] scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent overflow-y-scroll">
      {data.map((task) => (
        <Task task={task} />
      ))}
    </ul>
  );
};
