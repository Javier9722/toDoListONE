import React, { useEffect, useState } from "react";

export const Img = ({ estado }) => {
  const [opacity, setOpacity] = useState(false);
  const [url, setUrl] = useState("");

  // primer y unico renderizado asigna url de acuerdo al tema
  useEffect(() => {
    const capTheme = localStorage.getItem("theme");
    capTheme === "light"
      ? setUrl("./logo/light.svg")
      : setUrl("./logo/dark.svg");
  }, []);

  // renderizado constantes para coinzidir la transicion con el cambio de url
  useEffect(() => {
    test();
    setOpacity(false);
    const capTheme = localStorage.getItem("theme");
    setTimeout(() => {
      capTheme === "light"
        ? setUrl("./logo/light.svg")
        : setUrl("./logo/dark.svg");
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

  return (
    <img
      src={url}
      alt="Logo"
      className={`w-24 transition-opacity duration-500 ${
        opacity ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};
