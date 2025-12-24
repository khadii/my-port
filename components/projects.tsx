"use client"

import { useState, useEffect } from "react"

export function Projects() {
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

    const section = document.getElementById("projects")
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const projects = [
{
  title: "Afrikod",
  description:
    "Custom e-commerce platform built with WordPress and WooCommerce, featuring product catalog management, cart functionality, and secure checkout. Optimized for speed and SEO.",
  technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "CSS"],
  link: "https://afriquekod.com/",
  image: "/eccormerce.png",
},
    {
  title: "WashTrack",
  description:
    "A cross-platform dry-cleaning management app built with Expo. Users upload photos of clothes they want cleaned, and nearby dry cleaners receive the request, review the items, and accept if interested. Features real-time updates and Firebase push notifications.",
  technologies: ["Expo", "React Native", "Tailwind", "Zustand", "Firebase"],
  link: "#",
  image: "/app1.png",
}
,
  {
  title: "RealEstate Purchase Dashboard App",
  description:
    "A cross-platform real-estate management dashboard built with Expo. Users can browse and request to purchase houses or land, while agents receive the requests, review property interest, and respond in real time. Includes Firebase authentication, push notifications, and streamlined property management tools.",
  technologies: ["Expo", "React Native", "Tailwind", "Zustand", "Firebase"],
  link: "#",
  image: "/app2.png",
},
{
  title: "AndroneHome Dashboard Application",
  description:
    "Dashboard application for AndroneHome, providing real-time monitoring and management of smart home devices. Built with React and Vite, featuring state management with Redux and a modern UI using Tailwind CSS.",
  technologies: ["React", "Vite", "Redux", "Tailwind CSS"],
  link: "#",
  image: "/Screenshot 2025-12-24 at 18.11.27.png",
},
{
  title: "AndroneHome Official Website",
  description:
    "Official website for AndroneHome, presenting smart home products, features, and user resources. Built with Next.js for performance, Tailwind CSS for responsive design, Zustand for state management, and React Query for efficient data fetching.",
  technologies: ["Next.js", "React", "Tailwind CSS", "Zustand", "React Query"],
  link: "https://adronhomes.com/",
  image: "/Screenshot 2025-12-24 at 18.11.01.png",
},
{
  title: "CredBevy Loan Dashboard",
  description:
    "A modern loan management dashboard for CredBevy, enabling partners to review loan applications, create new loan offers, approve requests, and manage disbursements. Built with a clean UI and real-time state synchronization for a smooth workflow.",
  technologies: ["Next.js", "Redux", "Tailwind CSS"],
  link: "https://credbevyy.netlify.app",
  image: "/credbevy1.png",
},
    {
  title: "CredBevy Official Website",
  description:
    "Official website for CredBevy, showcasing company services, loan offerings, and partner resources. Built with Next.js and Tailwind for a responsive, performant, and modern web experience.",
  technologies: ["Next.js", "Redux", "Tailwind CSS"],
  link: "https://credbevy.com",
  image: "/Screenshot 2025-12-24 at 18.12.29.png",
},
   {
  title: "Bebo Website",
  description:
    "Official Bebo website for conducting financial transactions securely and efficiently. Built with Next.js and React for performance, Chakra UI for a responsive and intuitive interface, and React Query for seamless data fetching.",
  technologies: ["Next.js", "React", "Chakra UI", "React Query"],
  link: "https://app.netlify.com/projects/bebocrypto/overview",
  image: "/bebo.png",
},
{
  title: "Bebo Admin Dashboard",
  description:
    "Admin dashboard for Bebo, allowing staff to monitor transactions, validate users, and manage platform activity. Built with Next.js and React, styled with Chakra UI, and powered by React Query for real-time data management.",
  technologies: ["Next.js", "React", "Chakra UI", "React Query"],
  link: "#",
  image: "/beboinprogress.png",
}

  ]

  return (
    <section id="projects" className="px-6 py-20 lg:pl-80 lg:pr-12">
      <div className={`max-w-4xl mx-auto space-y-8 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
        <div className="border-l-2 border-primary pl-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Projects</h2>
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-widest">Featured work</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className={`group block hover:scale-102 transition-transform duration-300 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden rounded-lg mb-4 border border-border hover:border-primary transition-colors">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
