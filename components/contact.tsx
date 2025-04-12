"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send , Twitter , Linkedin, Github  } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formState)
    setFormState({ name: "", email: "", message: "" })
    alert("Message sent successfully!")
  }

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
        Contact
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl text-muted-foreground max-w-2xl"
      >
        Feel free to reach out to me for collaborations or just to say hello.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-primary" />
            <span>vishalkumargeed@gmail.com</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Bhopal, India</span>
          </div>

          <div className="pt-4">
            <h3 className="text-lg font-medium mb-3">Connect with me</h3>
            <div className="flex space-x-4">



              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">

                <a href="https://x.com/vishalllism" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" /> 
                </a>

             
              </div>
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">


                <a href="https://www.linkedin.com/in/vishal-k-26-05-2001/" target="_blank" >
                <span className="sr-only">LinkedIn</span>


<Linkedin className="h-5 w-5" />
        
                </a>
               
              </div>
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">


                  <a href="https://github.com/Vishal-K-988"  target="_blank">

                  <span className="sr-only">GitHub</span>

                  <Github className="h-5 w-5" />

                  </a>

              
                </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formState.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.div>
  )
}

