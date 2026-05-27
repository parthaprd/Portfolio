export const projects = [
  {
    slug: "petmate",
    step: "PROJECT 1",
    title: "Petmate",
    desc: "Pet Adoption site.",
    img: "/project-bg.png",
    longDescription:
      "Petmate is a modern pet adoption platform built to connect loving families with pets in need of a home. The application focuses on a clean, friendly browsing experience while keeping the adoption workflow simple for both adopters and shelters.\n\nThe site features a curated catalogue of available pets with rich filtering, detailed pet profiles, and a streamlined application flow. Authentication and persistent data are handled through Appwrite, allowing shelters to manage listings and applicants in real time.\n\nDesign-wise, Petmate emphasizes clarity and warmth — generous whitespace, soft typography, and accessible color contrast — to make the journey of finding a companion feel approachable rather than transactional.",
    tech: ["React", "Next.js", "Tailwind CSS", "Appwrite"],
    features: [
      "Browse and filter adoptable pets by species, age, and location",
      "Detailed pet profiles with photos, temperament, and medical notes",
      "Authenticated adoption application flow backed by Appwrite",
      "Shelter dashboard for managing listings and incoming applicants",
      "Responsive, accessible UI tuned for fast first-load performance",
    ],
    liveUrl: "#",
    repoUrl: "#",
    year: "2025",
    role: "Frontend Developer",
  },
  {
    slug: "techwave",
    step: "Techwave",
    title: "The podcast page",
    desc: "Click the \"Code\" tab to see the code for a component and grab the part that you need, or click the clipboard button to quickly copy the entire snippet in one step.",
    img: "/project-bg.png",
    longDescription:
      "Techwave is a marketing and discovery page for an indie tech podcast. It pairs editorial-style typography with smooth motion to give visitors a memorable, magazine-feeling first impression of the show.\n\nThe page is built around a high-impact hero, an episode highlight reel, and a guest spotlight grid. Subtle scroll-driven animations and staggered reveals — powered by Framer Motion — keep the experience lively without sacrificing clarity or load performance.\n\nEvery section is designed to be content-first: episode metadata, transcripts, and links to listening platforms are surfaced quickly, so listeners can spend less time exploring the page and more time enjoying the show.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    features: [
      "Cinematic hero section with scroll-linked motion",
      "Episode highlight reel with auto-playing previews",
      "Guest spotlight grid with hover micro-interactions",
      "One-click links to major podcast listening platforms",
      "Fully responsive layout optimized for Core Web Vitals",
    ],
    liveUrl: "#",
    repoUrl: "#",
    year: "2025",
    role: "Frontend Developer",
  },
  {
    slug: "y-library",
    step: "Y Library",
    title: "Library and book management",
    desc: "Every component is built entirely out of Tailwind utility classes, so you can easily dive in and adjust anything you want to better fit your use case.",
    img: "/project-bg.png",
    longDescription:
      "Y Library is a full-stack library and book management system built for small libraries and reading clubs. It replaces spreadsheet-based tracking with a clean, real-time interface for managing the catalogue, members, and lending activity.\n\nThe backend is a Node.js / Express API backed by MongoDB, exposing endpoints for inventory, members, and loan transactions. The frontend gives librarians a focused dashboard to issue and return books, while members get a simple search and reservation experience.\n\nThe project emphasizes reliability and clarity over flash: predictable forms, fast search, and detailed activity logs that make it easy to audit any book's full history at a glance.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Full CRUD catalogue with cover images and metadata",
      "Member registration with role-based access for librarians",
      "Issue, return, and reservation flows with due-date tracking",
      "Fast full-text search across titles, authors, and tags",
      "Activity log and per-book lending history",
    ],
    liveUrl: "#",
    repoUrl: "#",
    year: "2024",
    role: "Full-stack Developer",
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}
