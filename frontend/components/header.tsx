"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import LightDarkToggle from "./toggle/LightDarkToggle";
import { useTheme } from "next-themes";

export function HeaderComponent() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <header className={`${isDarkMode ? "bg-gray-900 border-gray-700" : "bg-background border-b"} transition-colors`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" passHref>
            <img
              src={isDarkMode ? "/iconDark.svg" : "/icon.svg"}
              alt="Icon"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </Link>
          <Link href="/" passHref>
            <span className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-primary"} transition-colors cursor-pointer`}>
              NoteNectar
            </span>
          </Link>
          {/* <nav className="hidden md:flex space-x-4">
            <a href="#features" className={`${isDarkMode ? "text-white" : "text-primary"} hover:underline transition-colors`}>
              Features
            </a>
            <a href="#pricing" className={`${isDarkMode ? "text-white" : "text-primary"} hover:underline transition-colors`}>
              Pricing
            </a>
            <a href="#contact" className={`${isDarkMode ? "text-white" : "text-primary"} hover:underline transition-colors`}>
              Contact
            </a>
          </nav> */}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost">Placeholder</Button>
          <LightDarkToggle />
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${isDarkMode ? "text-white" : "text-black"} w-6 h-6 transition-colors`}
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}