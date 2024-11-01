'use client'

import { Button } from "@/components/ui/button"


export function HeaderComponent() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
        <img src="/icon.svg" alt="Icon" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <span className="text-xl font-bold text-primary">NoteNectar</span>
          {/* <nav className="hidden md:flex space-x-4">
            <a href="#features" className="text-primary hover:underline">Features</a>
            <a href="#pricing" className="text-primary hover:underline">Pricing</a>
            <a href="#contact" className="text-primary hover:underline">Contact</a>
          </nav> */}
        </div>
        <div className="hidden md:block">
          <Button variant="ghost">placeholder</Button>
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
              className="w-6 h-6"
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
  )
}