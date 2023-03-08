import React, { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import { pink, orange } from "@mui/material/colors";
import { Delete } from "./taskItems/Delete";

export const Task = ({ task, estado, update, setUpdate }) => {
  const [render, setRender] = useState(false);
  // reutilizando hooks del componente Checked.jsx
  const [opacity, setOpacity] = useState(false);
  const [checkDefault, setCheckDefault] = useState();
  const checkLight = (
    <Checkbox
      sx={{
        color: pink["A200"],
        "&.Mui-checked": {
          color: pink["A400"],
        },
      }}
    />
  );
  const checkDark = (
    <Checkbox
      sx={{
        color: orange["A400"],
        "&.Mui-checked": {
          color: orange["A700"],
        },
      }}
    />
  );
  ///
  // hook del componente principal
  useEffect(() => {
    setRender(true);
  }, []);
  //
  // primer y unico renderizado asigna el checkbox de acuerdo al tema
  useEffect(() => {
    const capTheme = localStorage.getItem("theme");
    capTheme === "light"
      ? setCheckDefault(checkLight)
      : setCheckDefault(checkDark);
  }, []);
  // renderizado constantes para coinzidir la transicion con el cambio del checkbox
  useEffect(() => {
    test();
    setOpacity(false);
    const capTheme = localStorage.getItem("theme");
    setTimeout(() => {
      capTheme === "light"
        ? setCheckDefault(checkLight)
        : setCheckDefault(checkDark);
    }, 500);
  }, [estado]);
  const test = () => {
    if (estado === "light" || estado === "dark") {
      setOpacity(false);
      setTimeout(() => {
        setOpacity(true);
      }, 500);
    }
  };
  ///

  return render ? (
    <li className="flex justify-between items-center" id={`task-${task.id}`}>
      <div className="flex items-center">
        <div
          className={`transition-opacity duration-500 ${
            opacity ? "opacity-100" : "opacity-0"
          }`}
        >
          {checkDefault}
        </div>
        <span>{task.info}</span>
      </div>
      {task.important ? (
        <div className="text-pink-600 dark:text-[#ff5d01] transition-colors duration-1000">
          important!
        </div>
      ) : (
        <></>
      )}
      <Delete update={update} setUpdate={setUpdate} taskId={task.id} />
    </li>
  ) : (
    <></>
  );
};
