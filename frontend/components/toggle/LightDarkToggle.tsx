'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function LightDarkToggle() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.cookie = `theme=${newTheme}; path=/`
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors"
      style={{
        backgroundColor: currentTheme === 'dark' ? 'rgb(99, 102, 241)' : 'rgb(209, 213, 219)'
      }}
      aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`${
          currentTheme === 'dark' ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
      />
      <Sun className="absolute left-1 top-1/2 -translate-y-1/2 w-3 h-3 text-yellow-500" />
      <Moon className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-800" />
    </button>
  )
}