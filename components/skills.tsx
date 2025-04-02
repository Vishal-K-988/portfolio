"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"],
    },
    {
      name: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Figma"],
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
        Skills
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl text-muted-foreground max-w-2xl"
      >
        Technologies and tools I work with
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + categoryIndex * 0.1, duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold border-b pb-2">{category.name}</h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + skillIndex * 0.05, duration: 0.4 }}
                  className="px-3 py-2 bg-muted rounded-md text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

