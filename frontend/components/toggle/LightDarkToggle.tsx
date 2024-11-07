"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function LightDarkToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
          onClick={() => {
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            setTheme(newTheme);
            document.cookie = `theme=${newTheme}; path=/`;
          }}
        >
          Light Mode
        </button>
      ) : (
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
          onClick={() => {
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            setTheme(newTheme);
            document.cookie = `theme=${newTheme}; path=/`;
          }}
        >
          Dark Mode
        </button>
      )}
    </div>
  );
}
