"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MoonIcon, SunIcon } from "./icons";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Theme is set on <html> by an inline script before hydration to avoid a
    // flash of the wrong theme; read it back in here rather than computing it
    // in a lazy initializer, which would run during SSR with no `document`.
    const current = document.documentElement.dataset.theme as Theme | undefined;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(
      current ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("nackl-theme", next);
  }

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle color theme"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme ?? "init"}
          style={{ display: "inline-flex" }}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
