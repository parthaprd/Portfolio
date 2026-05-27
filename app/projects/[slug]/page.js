import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
} from "lucide-react"
import { projects, getProjectBySlug } from "@/lib/projects"

// Inline GitHub brand SVG (lucide-react v1.16 doesn't ship a Github icon)
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Project not found | Partha Pratim Dutta",
    }
  }

  return {
    title: `${project.title} | Partha Pratim Dutta`,
    description: project.desc,
  }
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const paragraphs = project.longDescription.split("\n\n")

  return (
    <div className="min-h-screen w-full bg-background relative flex flex-col items-center overflow-x-hidden">
      {/* 1. Spotlight highlight (lowest background overlay) */}
      <div className="bg-grid-spotlight pointer-events-none -z-30" />

      {/* 2. Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-20" />

      {/* MAIN CONTAINER */}
      <main className="flex-1 w-full max-w-[896px] border-l border-r border-border flex flex-col bg-[#0a0b10]/55 backdrop-blur-[1px] relative text-foreground">
        {/* Left and Right Side Blueprint Stripe Gutters */}
        <div className="hidden md:block absolute top-0 bottom-0 left-[-56px] w-[56px] border-l border-r border-[#3b4b66] bg-blueprint-stripes opacity-70 pointer-events-none -z-10" />
        <div className="hidden md:block absolute top-0 bottom-0 right-[-56px] w-[56px] border-l border-r border-[#3b4b66] bg-blueprint-stripes opacity-70 pointer-events-none -z-10" />

        {/* Back link */}
        <div className="w-full px-6 md:px-8 pt-10 pb-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-foreground-secondary hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to portfolio</span>
          </Link>
        </div>

        {/* Hero */}
        <section className="w-full px-6 md:px-8 pt-6 pb-10 border-b border-border flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] font-bold text-primary tracking-widest uppercase">
              {project.step}
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] text-white">
              {project.title}
            </h1>
            <p className="text-sm md:text-base font-normal leading-relaxed text-foreground-secondary max-w-[640px]">
              {project.desc}
            </p>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <span className="px-4 py-2 rounded-full bg-card border border-border text-foreground text-[11px] font-medium shadow-xs">
              <span className="text-foreground-secondary mr-1.5">Year</span>
              {project.year}
            </span>
            <span className="px-4 py-2 rounded-full bg-card border border-border text-foreground text-[11px] font-medium shadow-xs">
              <span className="text-foreground-secondary mr-1.5">Role</span>
              {project.role}
            </span>
          </div>

          {/* Hero image */}
          <div className="w-full aspect-video rounded-[10px] overflow-hidden relative bg-palette-3 border border-border shadow-high mt-2">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="w-full px-6 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-border">
          {/* Main content */}
          <div className="md:col-span-2 flex flex-col gap-10">
            {/* About */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-semibold text-foreground-secondary tracking-wider uppercase">
                About
              </h2>
              <div className="flex flex-col gap-4">
                {paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-sm md:text-[15px] leading-relaxed text-foreground/90"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-semibold text-foreground-secondary tracking-wider uppercase">
                Key Features
              </h2>
              <ul className="flex flex-col gap-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed text-foreground/90">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1 flex flex-col gap-8">
            {/* Tech Stack */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-semibold text-foreground-secondary tracking-wider uppercase">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-card border border-border text-foreground text-[11px] font-medium transition-all duration-200 hover:scale-[1.03] hover:border-primary hover:text-primary cursor-default shadow-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3">
              <h2 className="text-xs font-semibold text-foreground-secondary tracking-wider uppercase">
                Links
              </h2>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-primary hover:bg-[#2ba267] text-[#0a0b10] text-xs font-bold rounded-[10px] tracking-wide transition-colors shadow-low active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Site</span>
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-transparent border border-border hover:border-primary hover:text-primary text-foreground text-xs font-bold rounded-[10px] tracking-wide transition-colors active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            </div>
          </aside>
        </section>

        {/* Footer back link */}
        <section className="w-full px-6 md:px-8 py-12 flex justify-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-foreground-secondary hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all projects</span>
          </Link>
        </section>
      </main>
    </div>
  )
}
