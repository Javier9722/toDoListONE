import React, { useEffect, useState } from "react";

export const Logo = () => {
  const data = theme === "dark" ? "./logo/dark.svg" : "./logo/ligth.svg";
  return <img src={data} className="w-16" alt="Logo" />;
};
