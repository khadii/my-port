"use client"

import type React from "react"
import { useState } from "react"

export function Hero() {
  const [profileImage, setProfileImage] = useState<string>("/kadiri3.jpeg")

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <section className="px-6 py-20 lg:pl-80 lg:pr-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Profile Image — FIRST on mobile */}
          <div className="order-1 lg:order-2 flex flex-col items-center gap-4 animate-slide-in-right">
            <div className="relative group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-75 blur-xl group-hover:opacity-100 transition-opacity animate-glow-pulse" />
              <img
                src={profileImage || "/placeholder.svg"}
                alt="Profile"
                className="
                  relative
                  w-64 h-64          /* Bigger on mobile */
                  lg:w-64 lg:h-64    /* Same size on desktop */
                  rounded-2xl
                  object-cover
                  border-2 border-primary
                  shadow-xl
                  animate-scale-in
                "
              />
            </div>

            <label className="text-sm text-muted-foreground cursor-pointer hover:text-primary transition-colors">
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              <span className="inline-block px-4 py-2 rounded-lg border border-border hover:border-primary transition-colors">
                Upload photo
              </span>
            </label>
          </div>

          {/* Text Content — SECOND on mobile */}
          <div className="order-2 lg:order-1 lg:col-span-2 space-y-6">
            <div className="animate-slide-in-left">
              <p className="text-accent font-semibold text-sm mb-4">
                Hey, I'm a frontend developer
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                I build beautiful, accessible digital experiences.
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-slide-in-left [animation-delay:0.1s]">
              With 4 years of experience crafting user interfaces across web and mobile platforms, I specialize in
              React, React Native, Flutter, Next.js, and I'm continuously improving my backend skills with NestJS.
            </p>

            <div className="flex gap-4 pt-4 animate-slide-in-left [animation-delay:0.2s]">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
              >
                View my work
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
