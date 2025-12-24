"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="sticky top-0 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-72 lg:border-r border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="flex items-center justify-between p-6 lg:flex-col lg:items-start lg:justify-start lg:gap-12">
        {/* Header */}
        <div className="lg:w-full">
          <div className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-1">
            <div>
              <h1 className="text-xl font-bold text-foreground">Frontend Dev</h1>
              <p className="text-sm text-muted-foreground">4 years experience</p>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <div
          className={`absolute top-20 left-0 right-0 lg:static lg:flex-col gap-8 flex lg:gap-8 px-6 pb-6 lg:px-0 lg:pb-0 ${isOpen ? "flex" : "hidden lg:flex"}`}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-l-2 border-transparent hover:border-primary pl-3"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden lg:flex flex-col gap-4 mt-auto pt-8 border-t border-border w-full">
          <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Social</div>
          <div className="flex gap-4">
            <a  href="https://github.com/khadii" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <a    href="https://www.linkedin.com/in/kadiri-daniel-3a6abb260/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
            {/* <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
