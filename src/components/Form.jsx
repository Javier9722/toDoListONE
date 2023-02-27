import React, { useEffect, useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";

export const Form = () => {
  const [ciclo, setCiclo] = useState(0);
  const [render, setRender] = useState(false);

  const text = "prueba tipeo.......";
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
    setRender(true);
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
      setRender(false);
    } else {
      setRender(true);
    }
  };

  useEffect(() => {
    setTimeout(() => phPrint(actividades[ciclo]), 2000);
  }, []);

  useEffect(() => {
    if (render === true) {
      phPrint(actividades[ciclo]);
    }
  }, [ciclo, render]);

  return (
    <form onSubmit={(e) => preventDefault()}>
      <input id="task" type="text" placeholder="" onChange={validateInput} />
      <button type="submit">
        Add <AiFillFileAdd />
      </button>
    </form>
  );
};
