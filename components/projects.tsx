"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Portfolio",
      description: "Personalized portfolio website showcasing my projects and skills. Built with Next.js and Tailwind CSS.",

      image: "/portfolio.png?height=200&width=100",

      tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion" , "luicide-react"],
      github: "https://github.com/Vishal-K-988/portfolio", 
      demo: "https://www.vishalkumargeed.in/",
    },
    {
      title: "ProtoChain",
      description: "AI-powered platform that simplifies the generation and deployment of smart contracts across multiple blockchain networks. ",
      image: "/ProtoChain.png?height=300&width=600",
      tags: ["React", "Web3", "Gemini" , "Rust" , "Tailwind CSS" , "Petra Wallet"],
      github: "https://github.com/Vishal-K-988/ProtoChain",
      demo: "#",
    },
    {
      title: "SAAS AI powered Presentation Generator [Working]",
      description: "AI-powered presentation generator that creates slides based on user input.",
      image: "/Presentation.png?height=400&width=600",
      tags: ["Clerk"  ,"Neon" , "Uploadcare" , "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Image Processing Using Serveless Cloud",
      description: "Image processing application using serverless cloud functions for fast and efficient image manipulation.",
      image: "/Serverless.png?height=400&width=600",
      tags: ["AWS"  ,"PIL" , "AWS- Lambda" , "React" , "API"],
      github: "https://github.com/Vishal-K-988/Image-processing-using-serverless-Cloud-",
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

