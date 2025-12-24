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

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-72 lg:border-b-0 lg:border-r">
      <div className="flex items-center justify-between p-4 lg:flex-col lg:items-start lg:gap-12 lg:p-6">

        {/* Header */}
        <div className="flex items-center justify-between w-full lg:flex-col lg:items-start lg:gap-1">
          <div>
            <h1 className="text-lg font-bold text-foreground">
              Frontend Dev
            </h1>
            <p className="text-xs text-muted-foreground">
              4 years experience
            </p>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
            overflow-hidden transition-all duration-300 ease-in-out
            w-full lg:opacity-100 lg:max-h-none lg:overflow-visible
          `}
        >
          <div className="flex flex-col gap-6 py-6 lg:py-0 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="
                  text-sm font-medium text-muted-foreground
                  hover:text-foreground transition-colors
                  border-l-2 border-transparent hover:border-primary
                  pl-4 py-2
                "
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Social Links */}
        <div className="hidden lg:flex flex-col gap-4 mt-auto pt-8 border-t border-border w-full">
          <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            Social
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/khadii"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kadiri-daniel-3a6abb260/"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </nav>
  )
}
