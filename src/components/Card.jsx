import React, { useEffect, useState } from "react";
import { Form } from "./Form";
import { Img } from "./Img";
import ThemeToggle from "./ThemeToggleButton";

export const Card = () => {
  const [estado, setEstado] = useState();
  const [delay, setDelay] = useState(false);

  const obtenerdata = () => {
    const data = localStorage.getItem("theme");
    return data;
  };
  useEffect(() => {
    setEstado(obtenerdata());
    setDelay(true);
  }, []);

  return (
    <>
      <ThemeToggle setEstado={setEstado} />
      <div className="bg-slate-500/50 grid justify-items-center">
        {delay ? <Img estado={estado} /> : <></>}
        <Form />
      </div>
    </>
  );
};
