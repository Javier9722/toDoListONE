import React, { useEffect, useState } from "react";

export const Img = ({ estado }) => {
  return (
    <img
      src={estado === "light" ? "./logo/light.svg" : "./logo/dark.svg"}
      alt="Logo"
    />
  );
};
