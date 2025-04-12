"use client"

import { motion } from "framer-motion"
import GitHubStats from "./github-stats"

export default function About() {
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
        Hello, I'm Vishal
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-xl text-muted-foreground max-w-2xl mt-8"
      >
        <p className="mb-4">
         Good for Nothing Developer ... ! 
              </p>
        
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 pt-4 mt-8"
      >
        <a
          href="https://drive.google.com/file/d/1h8UqXvgayhgyNLuq6yEIf3m5G63IXGpJ/view?usp=sharing"
            target="_blank"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Download Resume
        </a>
        <a
          href="https://github.com/Vishal-K-988"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          View GitHub
        </a>
      </motion.div>

      <GitHubStats username="Vishal-K-988" />
    </motion.div>
  )
}

