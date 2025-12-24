"use client"

import { useState, useEffect } from "react"

export function Experience() {
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

    const section = document.getElementById("experience")
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Startup",
      period: "2023 - Present",
      description:
        "Led frontend architecture and development of core products using Next.js and React. Improved performance by 40% and mentored junior developers.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      role: "Full Stack Developer",
      company: "Digital Agency",
      period: "2021 - 2023",
      description:
        "Developed cross-platform mobile applications with React Native and Flutter. Built responsive web applications using React and Next.js.",
      technologies: ["React Native", "Flutter", "React", "NestJS", "PostgreSQL"],
    },
    {
      role: "Junior Developer",
      company: "Web Design Studio",
      period: "2020 - 2021",
      description:
        "Started my career building responsive websites and learning modern web development practices. Contributed to multiple client projects.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
    },
  ]

  return (
    <section id="experience" className="px-6 py-20 lg:pl-80 lg:pr-12">
      <div className={`max-w-4xl mx-auto space-y-8 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
        <div className="border-l-2 border-primary pl-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Experience</h2>
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-widest">Where I've worked</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`border-l-2 border-border hover:border-primary pl-6 py-4 transition-all duration-300 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col gap-1 mb-3">
                <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                <p className="text-sm text-accent">{exp.company}</p>
                <p className="text-xs text-muted-foreground">{exp.period}</p>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
