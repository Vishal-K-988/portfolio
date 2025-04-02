"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

export default function Home() {
  const [showContent, setShowContent] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 3000) // Show content after 3 seconds

    // Auto-play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error)
      })
    }

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground relative overflow-hidden">
      {/* Background Video - now in the main component to cover the entire page */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          className="absolute min-w-full min-h-full w-auto h-auto object-cover opacity-25"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/videos/car_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <AnimatePresence>
        {showContent ? (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            className="w-full min-h-screen flex flex-col relative z-10"
          >
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

            <div className="flex-1 w-full max-w-6xl px-4 py-8 md:py-16 mx-auto mt-16 relative">
              {activeSection === "about" && <About />}
              {activeSection === "projects" && <Projects />}
              {activeSection === "skills" && <Skills />}
              {activeSection === "contact" && <Contact />}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="intro"
            className="flex flex-col items-center justify-center h-screen w-full relative z-10"
            exit={{
              opacity: 0,
              y: -50,
              transition: { duration: 0.5 },
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 1 },
              }}
              className="text-4xl md:text-6xl font-bold tracking-tighter"
            >
              VISHAL
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: 1.5, duration: 0.8 },
              }}
              className="mt-4 text-xl md:text-2xl text-muted-foreground"
            >
              こんにちは
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.2, duration: 0.5 },
              }}
              className="mt-8 flex items-center text-sm text-muted-foreground"
            >
              Explore <ArrowRight className="ml-2 h-4 w-4" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

