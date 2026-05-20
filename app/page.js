"use client"

import React from "react"
import { 
  Home, 
  PenTool, 
  Mail, 
  ArrowUpRight 
} from "lucide-react"
import { Dock, DockIcon } from "@/components/magicui/dock"

// Custom high-fidelity SVG brand icons in legibly contrasty colors
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

const TwitterXIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export default function PortfolioPage() {
  const [currentTime, setCurrentTime] = React.useState("")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const updateClock = () => {
      const now = new Date()
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }
      setCurrentTime(now.toLocaleString('en-US', options))
    }
    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  const techCategories = [
    {
      title: "Frontend",
      skills: ["React", "Nextjs", "Shadcn", "Tailwindcss", "Framer-Motion"]
    },
    {
      title: "Backend",
      skills: ["Nodejs", "Expressjs"]
    },
    {
      title: "Db & Services",
      skills: [ "Appwrite", "Supabase", "MongoDB"]
    },
    {
      title: "Currently Learning",
      skills: ["Redis"]
    }
  ]

  const projects = [
    {
      step: "PROJECT 1",
      title: "Petmate",
      desc: "Pet Adoption site.",
      img: "/project-bg.png"
    },
    {
      step: "Techwave",
      title: "The podcast page",
      desc: "Click the \"Code\" tab to see the code for a component and grab the part that you need, or click the clipboard button to quickly copy the entire snippet in one step.",
      img: "/project-bg.png"
    },
    {
      step: "Y Library",
      title: "Library and book management",
      desc: "Every component is built entirely out of Tailwind utility classes, so you can easily dive in and adjust anything you want to better fit your use case.",
      img: "/project-bg.png"
    }
  ]

  return (
    <div className="min-h-screen w-full bg-background relative flex flex-col items-center overflow-x-hidden">
      
      {/* 1. Spotlight highlight (lowest background overlay) */}
      <div className="bg-grid-spotlight pointer-events-none -z-30" />
      
      {/* 2. Grid Pattern Overlay (crisp grid lines drawn on top of the spotlight glow) */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-20" />
      
      {/* MAIN CONTAINER: Centered dark blueprint drafting grid column aligned to the 56px grid (896px = 16 cells) */}
      <main className="flex-1 w-full max-w-[896px] border-l border-r border-border flex flex-col bg-[#0a0b10]/55 backdrop-blur-[1px] relative text-foreground">
        
        {/* Left and Right Side Blueprint Stripe Gutters, positioned inside main to guarantee stretching to 100% of the scrollable height */}
        <div className="hidden md:block absolute top-0 bottom-0 left-[-56px] w-[56px] border-l border-r border-[#3b4b66] bg-blueprint-stripes opacity-70 pointer-events-none -z-10" />
        <div className="hidden md:block absolute top-0 bottom-0 right-[-56px] w-[56px] border-l border-r border-[#3b4b66] bg-blueprint-stripes opacity-70 pointer-events-none -z-10" />

        {/* SECTION 1: Friendly Profile Card Compartment */}
        <section className="w-full px-6 py-16 md:py-20 border-b border-border flex justify-center bg-transparent relative">
          <div className="w-full max-w-[650px] relative">
            {/* Glowing background ambient emerald light */}
            <div className="absolute inset-0 bg-primary/5 rounded-[20px] blur-2xl transform translate-y-4 scale-95 -z-10" />
            
            {/* Main Profile Card Container (Mockup on grid) */}
            <div className="w-full bg-card border border-border rounded-[20px] p-8 shadow-high flex flex-col gap-8 relative overflow-hidden text-white">
              
              {/* Header Row: Avatar, Role handle, night kanji */}
              <div className="flex items-start justify-between select-none">
                <div className="flex items-center gap-4">
                  {/* Grayscale Squircle Profile Avatar (rounded-[14px]) */}
                  <div className="w-16 h-16 rounded-[14px] overflow-hidden border border-border flex-shrink-0">
                    <img 
                      src="/profile.jpg" 
                      alt="Partha Pratim Dutta" 
                      className="w-full h-full object-cover filter grayscale"
                    />
                  </div>
                  
                  {/* Name & Handle/Role */}
                  <div>
                    <h1 className="text-xl font-bold tracking-tight text-white leading-none mb-1">
                      Partha Pratim Dutta
                    </h1>
                    <p className="text-xs font-semibold text-foreground-secondary leading-none">
                      Frontend devloper
                    </p>
                  </div>
                </div>
                
                {/* Top-Right Kanji Symbol: 夜 (Night) */}
                <div className="text-foreground-secondary/75 font-semibold text-lg">
                  夜
                </div>
              </div>
              
              {/* Middle Content */}
              <div className="flex flex-col gap-3 my-2">
                <h2 className="text-[2rem] font-bold leading-[1.12] tracking-tighter text-white font-sans">
                  I create websites that work as hard as you do
                </h2>
                <p className="text-sm font-normal leading-relaxed text-foreground-secondary max-w-[500px]">
                  I build designs that solve problems, inspire action, and drive success.
                </p>
              </div>
              
              {/* Bottom Footer Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pt-4 border-t border-border">
                {/* Developer quote */}
                <div className="font-mono text-[11px] leading-tight text-foreground-secondary/80 select-none">
                  &ldquo;How do i center<br />a div again??&rdquo;
                </div>
                
                {/* Status indicator & high-fidelity live clock */}
                <div className="flex flex-col items-end gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-[11px] font-semibold text-foreground-secondary">
                      Available for collaborations
                    </span>
                  </div>
                  
                  {/* Local clock with hydration preservation */}
                  <div className="font-mono text-[10px] text-foreground-secondary/60 select-none min-h-[14px]">
                    {mounted ? currentTime : "05/20/2026, 04:36:50 PM"}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* SECTION 2: Flat Blueprint Tech Stack Row (Split Left/Right grid columns) */}
        <section className="w-full px-6 py-16 md:py-20 border-b border-border bg-transparent flex justify-center">
          <div className="w-full flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            {/* Left Grid Side: Tech Stack header */}
            <div className="flex flex-col flex-shrink-0 select-none md:w-1/3">
              {/* Visual bracket indicator */}
              <div className="text-[2.2rem] font-bold text-primary tracking-widest leading-none mb-4 opacity-95 font-mono">
                {"{}"}
              </div>
              
              {/* Stacked title */}
              <h2 className="text-[3.2rem] md:text-[3.6rem] font-black text-white tracking-tighter leading-[0.92] font-sans uppercase">
                TECH <br /> STACK
              </h2>
            </div>
            
            {/* Right Grid Side: Skill lists */}
            <div className="flex-grow space-y-8 w-full md:w-2/3">
              {techCategories.map((category, catIdx) => (
                <div key={catIdx} className="flex flex-col gap-3">
                  <h3 className="text-xs font-semibold text-foreground-secondary tracking-wider uppercase">
                    {category.title}
                  </h3>
                  
                  {/* Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIdx) => (
                      <span 
                        key={skillIdx}
                        className="px-4 py-2 rounded-full bg-card border border-border text-foreground text-[11px] font-medium transition-all duration-200 hover:scale-[1.03] hover:border-primary hover:text-primary cursor-default shadow-xs"
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

        {/* SECTION 3: Flat Tailwind CSS-style Project Grid (Separated directly by thin border lines exactly like reference) */}
        <section id="projects" className="w-full flex flex-col bg-transparent">
          
          {/* Header compartment: Separated by a horizontal border line */}
          <div className="w-full px-8 py-14 border-b border-border select-none bg-transparent">
            <h2 className="text-3xl md:text-[2.6rem] font-bold text-white tracking-tight leading-[1.1] max-w-3xl font-sans">
              Get a better idea of how my components work <br className="hidden md:inline" /> by exploring my live playground.
            </h2>
          </div>
          
          {/* 3-Column Flat Blueprint Border Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 border-b border-border">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="p-8 flex flex-col flex-grow bg-transparent border-b last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 border-border transition-colors duration-200 hover:bg-[#12131a]/25"
              >
                {/* Isometric flat thumbnail element */}
                <div className="w-full aspect-video rounded-[10px] overflow-hidden mb-6 relative bg-palette-3 border border-border">
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                  />
                </div>
                
                {/* Step / project monospace label */}
                <span className="font-mono text-[10px] font-bold text-primary tracking-widest uppercase">
                  {proj.step}
                </span>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-white leading-tight mt-2 mb-3">
                  {proj.title}
                </h3>
                
                {/* Paragraph Description */}
                <p className="text-[12px] font-normal leading-relaxed text-foreground-secondary mb-8 flex-grow">
                  {proj.desc}
                </p>
                
                {/* Action button (rounded-[10px] in solid glowing green #32bb78) */}
                <button className="w-full py-3 bg-primary hover:bg-[#2ba267] text-[#0a0b10] text-xs font-bold rounded-[10px] tracking-wide transition-colors shadow-low active:scale-[0.98]">
                  View Details
                </button>
              </div>
            ))}
          </div>
          
        </section>

        {/* SECTION 4: CTA Contact / Footer Section */}
        <section className="w-full px-6 py-16 flex flex-col items-center text-center gap-6 bg-palette-3/15">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white font-sans">
              Need something different? <br className="md:hidden" /> Don't mind sharing
            </h3>
            <p className="text-sm font-normal text-foreground-secondary max-w-sm">
              Let us know if we are your fit, for your awesome exceptional work!
            </p>
          </div>
          
          {/* Dynamic envelope card button */}
          <a
            href="mailto:contact@sprrrint.com"
            className="w-full max-w-md bg-card border border-border hover:border-primary hover:shadow-low transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] py-4 px-6 rounded-[20px] flex items-center justify-center gap-3 font-semibold text-xs md:text-sm text-white group"
          >
            <span>Send us Mail at contact@sprrrint.com</span>
            <Mail className="w-5 h-5 text-foreground-secondary group-hover:text-primary transition-colors" />
          </a>
        </section>

      </main>

      {/* SECTION 5: macOS Floating Navigation Dock (Fixed bottom center) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Dock className="shadow-high border border-border/80 bg-[#0a0b10]/70 backdrop-blur-xl px-4 py-2">
          <DockIcon>
            <a href="#" className="text-foreground-secondary hover:text-primary transition-colors" title="Home">
              <Home className="w-5 h-5" />
            </a>
          </DockIcon>
          <DockIcon>
            <a href="mailto:contact@sprrrint.com" className="text-foreground-secondary hover:text-primary transition-colors" title="Contact / Work">
              <PenTool className="w-5 h-5" />
            </a>
          </DockIcon>
          <DockIcon>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary hover:text-primary transition-colors w-full h-full flex items-center justify-center" title="GitHub">
              <GithubIcon className="w-5 h-5" />
            </a>
          </DockIcon>
          <DockIcon>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary hover:text-primary transition-colors w-full h-full flex items-center justify-center" title="LinkedIn">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </DockIcon>
          <DockIcon>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary hover:text-primary transition-colors w-full h-full flex items-center justify-center" title="Twitter / X">
              <TwitterXIcon className="w-5 h-5" />
            </a>
          </DockIcon>
          <DockIcon>
            <a href="mailto:contact@sprrrint.com" className="text-foreground-secondary hover:text-primary transition-colors" title="Email">
              <Mail className="w-5 h-5" />
            </a>
          </DockIcon>
        </Dock>
      </div>
      
    </div>
  )
}
