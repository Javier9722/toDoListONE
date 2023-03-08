import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";

const themes = ["light", "dark"];

export default function ThemeToggle({ setEstado }) {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    // este SSR es variable de entorno
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
    setEstado(t);
  };

  useEffect(() => {
    const root = document.documentElement;
    <Logo theme={theme} />;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <div className="inline-flex items-center rounded-xl bg-orange-300 dark:bg-zinc-600 overflow-hidden absolute top-1 left-1">
      {themes.map((t) => {
        const checked = t === theme;
        return (
          <button
            key={t}
            className={`${
              checked ? "bg-white text-black" : ""
            } cursor-pointer p-1`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {t === "light" ? (
              <i class="fal fa-sun"></i>
            ) : (
              <i class="fas fa-moon"></i>
            )}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
}
