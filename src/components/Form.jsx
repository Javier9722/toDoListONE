import React, { useEffect, useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Checked } from "./itemsForm/Checked";

export const Form = ({ estado, update, setUpdate }) => {
  const [ciclo, setCiclo] = useState(0);
  const [renderph, setRenderph] = useState(false);

  const actividades = [
    "Tareas.....",
    "Trabajos.....",
    "Notas.....",
    "Recordatorios.....",
    "Actividades.....",
    "Descanso.....",
  ];

  const capInput = () => document.querySelector("#task");

  const phPrint = (value) => {
    setRenderph(true);
    const input = capInput();
    let indiceString = 0;
    let newPh = "";
    const intervalPrint = setInterval(() => {
      newPh += value[indiceString];
      input.setAttribute("placeholder", newPh);
      if (indiceString < value.length - 1) {
        indiceString++;
      } else {
        clearInterval(intervalPrint);
        setTimeout(() => phDelete(newPh), 3000);
      }
    }, 100);
  };

  const phDelete = (value) => {
    const input = capInput();
    let indiceString = value.length - 1;
    let newPh = value;
    const intervalDelete = setInterval(() => {
      newPh = newPh.substring(0, indiceString);
      input.setAttribute("placeholder", newPh);
      if (0 < indiceString) {
        indiceString--;
      } else {
        clearInterval(intervalDelete);
        if (ciclo < actividades.length - 1) {
          setCiclo(ciclo + 1);
        } else {
          setCiclo(0);
        }
      }
    }, 50);
  };

  const validateInput = (e) => {
    const capValue = e.target.value;
    if (capValue !== "") {
      setRenderph(false);
    } else {
      setRenderph(true);
    }
  };
  // chequear storage
  const storageCheked = () => localStorage.getItem("task");
  //
  useEffect(() => {
    setTimeout(() => phPrint(actividades[ciclo]), 2000);
    // validar el storage al renderizar el componente
    if (storageCheked() === null) {
      localStorage.setItem("task", "[]");
    }
  }, []);

  useEffect(() => {
    if (renderph === true) {
      phPrint(actividades[ciclo]);
    }
  }, [ciclo, renderph]);

  //on submit
  const save = (e) => {
    e.preventDefault();

    const info = e.target[0].value;
    if (info !== "") {
      if (info[0] !== " ") {
        const dataString = storageCheked();
        const dataArray = JSON.parse(dataString);
        const newTask = {
          id: dataArray.length,
          info: info,
          important: e.target[1].checked,
        };

        dataArray.push(newTask);
        localStorage.setItem("task", JSON.stringify(dataArray));
        setUpdate(update === 0 ? 1 : 0);
      }
    }
  };

  return (
    <form onSubmit={save} className="flex gap-2 items-center">
      <input
        id="task"
        type="text"
        placeholder=""
        onChange={validateInput}
        className="bg-slate-50 text-slate-800 dark:bg-slate-700 dark:text-slate-300  transition-colors duration-1000 px-2 py-1 rounded-md"
      />
      <Checked estado={estado} />
      <button type="submit">
        <BsFillPlusSquareFill className="text-2xl text-[#ff5d01] dark:text-slate-300 transition-colors duration-1000" />
      </button>
    </form>
  );
};
