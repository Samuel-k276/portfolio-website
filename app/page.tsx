"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const isMobile = useMobile()
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const homeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.2 }, 
    )

    if (homeRef.current) observer.observe(homeRef.current)
    if (aboutRef.current) observer.observe(aboutRef.current)
    if (projectsRef.current) observer.observe(projectsRef.current)
    if (contactRef.current) observer.observe(contactRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <div className="animated-gradient"></div>
      <div className="wave-overlay"></div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-500">
              Samuel Gomes
            </span>
          </div>
          {!isMobile && (
            <ul className="flex space-x-8">
              {["home", "about", "projects", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-blue-400",
                      activeSection === section ? "text-blue-400" : "text-gray-400",
                    )}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Header Section */}
      <section id="home" ref={homeRef} className="min-h-screen flex flex-col justify-center items-center pt-20 pb-10">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <div className="relative mb-8 group">
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-blue-500/50 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/first.jpeg"
                alt="Samuel Esteves Gomes"
                className="w-[125%] h-[125%] object-cover object-center transform scale-125 translate-y-[+10%]"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-70 -z-10 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              Samuel Esteves Gomes
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 animate-fade-in-delay-1">Computer Science Student @ IST</p>
          
          <div className="max-w-lg mx-auto mb-8 animate-fade-in-delay-1">
            <p className="text-gray-300 leading-relaxed">
              I'm passionate about developing software that solves real-world problems. Currently focused on
              web development, machine learning, and cybersecurity. I'm actively seeking internship opportunities
              and entry-level positions in software engineering.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 mb-8 animate-fade-in-delay-1">
            <div className="flex justify-center space-x-4">
              <SocialLink href="mailto:samuel.gomes.k276@gmail.com" icon={<Mail size={20} />} />
              <SocialLink href="https://www.linkedin.com/in/samuel-esteves-gomes/" icon={<Linkedin size={20} />} />
              <SocialLink href="https://github.com/Samuel-k276" icon={<Github size={20} />} />
            </div>
            
            <div className="mt-4">
              <a href="/CV.pdf" download className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:from-blue-700 hover:to-fuchsia-700 text-white shadow-lg shadow-blue-500/20 transition-all">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce mt-8 text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="min-h-screen py-20 flex items-center relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-500">
              About Me
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="glass-card rounded-2xl p-8 mb-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-fuchsia-500 opacity-70"></div>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative mb-6 md:mb-0 group">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-blue-500/50 mx-auto">
                        <img
                          src="/second.jpeg"
                          alt="Samuel Esteves Gomes"
                          className="w-[170%] h-[170%] object-cover object-center transform scale-[2] translate-y-[+25%] translate-x-[-10%]"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-70 -z-10"></div>
                    </div>

                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-semibold mb-2 text-blue-400">Who I Am</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Computer Science student with a passion for solving real-world problems through software.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-blue-400">Skills</h3>

                        <div className="mb-4">
                          <h4 className="text-lg font-medium mb-3 text-gray-200 flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                            Languages
                          </h4>
                          <div className="flex flex-wrap gap-2 pl-4">
                            {["Python", "Java", "Go", "JavaScript", "SQL"].map((skill) => (
                              <Badge
                                key={skill}
                                variant="outline"
                                className="bg-gray-800/50 text-blue-300 border-blue-500/30 hover:bg-blue-900/20"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium mb-3 text-gray-200 flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                            Frameworks & Tools
                          </h4>
                          <div className="flex flex-wrap gap-2 pl-4">
                            {["React", "Next.js", "Spring Boot", "FastAPI", "Docker", "Git"].map((skill) => (
                              <Badge
                                key={skill}
                                variant="outline"
                                className="bg-gray-800/50 text-fuchsia-300 border-fuchsia-500/30 hover:bg-fuchsia-900/20"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-blue-400">Certifications</h3>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-center p-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 mr-3"></div>
                            <a 
                              href="https://www.credly.com/badges/fa321b53-efd9-45fe-9a83-dd36e102e76e/linked_in_profile" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-blue-400 transition-colors"
                            >                            
                              <div className="font-medium">AWS Cloud Essentials</div>
                              <div className="text-xs text-gray-400">Issued January 2025</div>
                            </a>
                          </li>
                          <li className="flex items-center p-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 mr-3"></div>
                            <a 
                              href="https://www.scrumstudy.com/certification/verify?type=SFC&number=1073523" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-blue-400 transition-colors"
                            >
                              <div className="font-medium">Scrum Fundamentals</div>
                              <div className="text-xs text-gray-400">Issued April 2025</div>
                            </a>
                          </li>
                          <li className="flex items-center p-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 mr-3"></div>
                            <a 
                              href="https://www.credly.com/badges/fa321b53-efd9-45fe-9a83-dd36e102e76e/linked_in_profile" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-blue-400 transition-colors"
                            >
                              <div className="font-medium">ISC2 Certified in Cybersecurity</div>
                              <div className="text-xs text-gray-400">Issued April 2025</div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-500">
              Projects
            </span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-12">
            <FadeInSection>
              <VerticalProjectCard
                title="Lisbon Metro Tracker"
                description="Real-Time Public Transport Web App"
                features={[
                  "Built with React.js, using live API data to show train locations and wait times",
                  "Designed for fast access to metro line status and station information",
                  "Interactive map of metro lines and stations",
                ]}
                tags={["React.js", "Tailwind CSS", "Real-time APIs"]}
                githubLink="https://github.com/Samuel-k276/Lisbon-Metro-Tracker"
                demoLink="https://lisbon-metro.vercel.app/"
                imageSrc="/placeholder.svg?height=300&width=600"
              />
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <VerticalProjectCard
                title="TaskFlow"
                description="Google Tasks-style Task Management Application"
                features={[
                  "Java Spring Boot backend with RESTful API architecture",
                  "Angular frontend with responsive design",
                  "Data persistence with PostgreSQL database",
                  "Implemented secure user authentication with Spring Security",
                  "Full CRUD support for task management"
                ]}
                tags={["Spring Boot", "Angular", "Spring Security", "PostgreSQL", "REST"]}
                githubLink="https://github.com/Samuel-k276/TaskFlow"
                imageSrc="/placeholder.svg?height=300&width=600"
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <VerticalProjectCard
                title="TC-Helper"
                description="Theory of Computation Learning Assistant"
                features={[
                  "Built with Next.js frontend and FastAPI backend",
                  "Uses LLaMA 3.2 via Ollama for local LLM inference",
                  "Designed to answer technical questions in formal languages, automata theory and Turing machines",
                  "Great tool for students taking Theory of Computation courses"
                ]}
                tags={["Next.js", "FastAPI", "Python", "LLaMA 3.2", "Ollama"]}
                githubLink="https://github.com/Samuel-k276/tc-helper"
                imageSrc="/placeholder.svg?height=300&width=600"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="min-h-screen py-20 flex items-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-500">
              Let's Connect
            </span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-fuchsia-500 opacity-70"></div>
                
                <div className="text-center mb-8">
                  <p className="text-gray-300 leading-relaxed max-w-lg mx-auto">
                    I'm currently seeking internship and entry-level opportunities in software engineering.
                    Feel free to reach out if you'd like to collaborate or just chat.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-3 text-blue-400">
                      <Linkedin size={24} />
                    </div>
                    <h3 className="text-lg font-medium mb-1 text-gray-200">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/samuel-esteves-gomes/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-fuchsia-400 transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-3 text-blue-400">
                      <Mail size={24} />
                    </div>
                    <h3 className="text-lg font-medium mb-1 text-gray-200">Email</h3>
                    <a 
                      href="mailto:samuel.gomes.k276@gmail.com" 
                      className="text-blue-400 hover:text-fuchsia-400 transition-colors"
                    >
                      samuel.gomes.k276@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-3 text-blue-400">
                      <Phone size={24} />
                    </div>
                    <h3 className="text-lg font-medium mb-1 text-gray-200">Phone</h3>
                    <a 
                      href="tel:+351967580744" 
                      className="text-blue-400 hover:text-fuchsia-400 transition-colors"
                    >
                      +351 967 580 744
                    </a>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <a href="/CV.pdf" download className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:from-blue-700 hover:to-fuchsia-700 text-white shadow-lg shadow-blue-500/20 transition-all">
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 Samuel Esteves Gomes</p>
            </div>

            <div className="flex space-x-6">
              <a href="tel:+351967580744" className="text-gray-400 hover:text-blue-400 transition-colors">
                Phone Number
              </a>
              <a href="mailto:samuel.gomes.k276@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                Email
              </a>
              <a
                href="https://linkedin.com/in/samuel-esteves-gomes"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a href="https://github.com/Samuel-k276" className="text-gray-400 hover:text-blue-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Component for social links
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-blue-400 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
      aria-label={label || "Social link"}
    >
      {icon}
    </a>
  )
}

// Component for project cards
function ProjectCard({
  title,
  description,
  features,
  tags,
  githubLink,
  demoLink,
}: {
  title: string
  description: string
  features: string[]
  tags: string[]
  githubLink: string
  demoLink?: string
}) {
  return (
    <div className="group h-full">
      <div className="h-full bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-blue-900/20 group-hover:border-blue-500/30">
        <div className="p-6 flex flex-col h-full">
          <h3 className="text-xl font-semibold mb-2 text-blue-400">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>

          <ul className="mb-4 text-gray-300 text-sm space-y-1 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-gray-800/50 text-fuchsia-300 border-fuchsia-500/30">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex space-x-3 mt-auto">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Github size={16} className="mr-1" /> GitHub
            </a>
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition-colors"
              >
                <ExternalLink size={16} className="mr-1" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Component for fade-in animations
function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setIsVisible(true)
        }, delay * 1000)
      }
    })

    const { current } = domRef
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [delay])

  return (
    <div
      ref={domRef}
      className={cn("transition-opacity duration-1000 ease-in-out", isVisible ? "opacity-100" : "opacity-0")}
    >
      {children}
    </div>
  )
}

// Component for vertical project cards
function VerticalProjectCard({
  title,
  description,
  features,
  tags,
  githubLink,
  demoLink,
  imageSrc,
}: {
  title: string
  description: string
  features: string[]
  tags: string[]
  githubLink: string
  demoLink?: string
  imageSrc: string
}) {
  return (
    <div className="group">
      <div className="glass-card rounded-xl overflow-hidden glow-border transition-all duration-300 group-hover:translate-y-[-5px]">
        <div className="relative h-48 md:h-64 overflow-hidden">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-gray-900/70 text-fuchsia-300 border-fuchsia-500/30">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-300 mb-4">{description}</p>

          <h4 className="text-lg font-medium mb-3 text-blue-400">Key Features</h4>
          <ul className="mb-6 text-gray-300 text-sm space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 mt-1.5 mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex space-x-4">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Github size={16} className="mr-1" /> GitHub
            </a>
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition-colors"
              >
                <ExternalLink size={16} className="mr-1" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
