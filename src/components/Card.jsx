import React, { useEffect, useState } from "react";
import { Form } from "./Form";
import { Img } from "./Img";
import { Tasks } from "./Tasks";
import ThemeToggle from "./ThemeToggleButton";

export const Card = () => {
  const [estado, setEstado] = useState();
  const [delay, setDelay] = useState(false);
  const [render, setRender] = useState(false);

  const obtenerdata = () => {
    const data = localStorage.getItem("theme");
    return data;
  };
  useEffect(() => {
    setEstado(obtenerdata());
    setDelay(true);
    setRender(true);
  }, []);
  return render ? (
    <>
      <ThemeToggle setEstado={setEstado} />
      <div className="bg-slate-100 dark:bg-slate-900 transition-colors duration-1000 p-2 rounded-xl grid justify-items-center text-slate-800 dark:text-slate-300 gap-2">
        {delay ? <Img estado={estado} /> : <></>}
        <Form estado={estado} />
        <Tasks />
      </div>
    </>
  ) : (
    <></>
  );
};
