"use client"

import { useState, useEffect } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("about")
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="px-6 py-20 lg:pl-80 lg:pr-12">
      <div className={`max-w-4xl mx-auto space-y-8 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
        <div className="border-l-2 border-primary pl-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">About</h2>
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-widest">Get to know me</p>
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm a passionate frontend developer with a strong foundation in building scalable, user-centric
            applications. Over the past 4 years, I've developed expertise across multiple frameworks and platforms,
            always prioritizing clean code and exceptional user experiences.
          </p>

          <p>
            My journey has taken me through startup environments to established tech companies, where I've collaborated
            with designers, product managers, and backend developers to ship features that millions use. I believe in
            the power of great interfaces to solve real problems.
          </p>

          <p>
            When I'm not coding, you can find me contributing to open-source projects, writing about web development, or
            exploring new technologies. I'm always eager to learn and share knowledge with the developer community.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-8">
          {[
            { number: "4+", label: "Years of Experience" },
            { number: "20+", label: "Projects Completed" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`p-4 bg-card/50 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
