"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack application built with Next.js and Tailwind CSS.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "React", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with payment integration and user authentication.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Project Three",
      description: "A mobile-responsive dashboard with data visualization.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["TypeScript", "Chart.js", "Firebase"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 pt-8"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold tracking-tighter"
      >
        Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl text-muted-foreground max-w-2xl"
      >
        Here are some of my recent projects. Each one represents a unique challenge and learning experience.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            className="group rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-muted text-xs rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <a href={project.github} className="text-sm flex items-center hover:text-primary">
                  <Github className="h-4 w-4 mr-1" /> Code
                </a>
                <a href={project.demo} className="text-sm flex items-center hover:text-primary">
                  <ExternalLink className="h-4 w-4 mr-1" /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

