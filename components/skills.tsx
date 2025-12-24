"use client"

import { useState, useEffect } from "react"

export function Skills() {
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

    const section = document.getElementById("skills")
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      category: "Frontend Frameworks",
      skills: ["React", "React Native", "Flutter", "Next.js"],
      proficiency: "Expert",
    },
    {
      category: "Backend Development",
      skills: ["NestJS", "Node.js", "TypeScript", "MongoDB"],
      proficiency: "Intermediate",
    },
    {
      category: "Tools & Technologies",
      skills: ["TypeScript", "Tailwind CSS", "Git", "Docker", "GraphQL", "REST APIs"],
      proficiency: "Expert",
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Mentoring", "Code Review"],
      proficiency: "Expert",
    },
  ]

  return (
    <section id="skills" className="px-6 py-20 lg:pl-80 lg:pr-12">
      <div className={`max-w-4xl mx-auto space-y-8 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
        <div className="border-l-2 border-primary pl-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Skills</h2>
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-widest">What I'm good at</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 bg-card/50 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-1">{category.category}</h3>
                <p className="text-xs text-accent font-medium">{category.proficiency}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
                  >
                    {skill}
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
