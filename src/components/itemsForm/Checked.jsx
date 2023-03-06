import React, { useState, useEffect } from "react";
import { Checkbox } from "@mui/material";
import { orange, pink } from "@mui/material/colors";

export const Checked = ({ estado }) => {
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

  return (
    <div
      className={`transition-opacity duration-500 ${
        opacity ? "opacity-100" : "opacity-0"
      }`}
    >
      {checkDefault}
    </div>
  );
};
