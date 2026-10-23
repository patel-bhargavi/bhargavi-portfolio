export const profile = {
  name: "Bhargavi Patel",
  role: "Full-Stack Developer",
  positioning: "React, Node.js & AI-Powered Applications",
  location: "Ahmedabad, Gujarat, India",
  email: "patelbhargavi1624@gmail.com",
  phone: "+91 99787 76575",
  phoneHref: "tel:+919978776575",
  github: "https://github.com/patel-bhargavi",
  linkedin: "https://www.linkedin.com/in/bhargavi-patel-1016b9238/",
  siteUrl: "https://bhargavi-patel.vercel.app/",
} as const;

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export const footerLinks = [
  ...navItems,
  { id: "architecture", label: "Architecture" },
  { id: "education", label: "Education" },
] as const;

export type SkillDepth = "Professional experience" | "Project work" | "Working knowledge";

export type SkillGroup = {
  id: string;
  label: string;
  summary: string;
  items: { name: string; depth: SkillDepth; note: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    summary:
      "Interfaces built with React and Next.js, responsive layout, and state that stays predictable as screens grow.",
    items: [
      { name: "JavaScript", depth: "Professional experience", note: "Daily language across product UI work." },
      { name: "TypeScript", depth: "Professional experience", note: "Used for typed React interfaces, including the HRM project." },
      { name: "React.js", depth: "Professional experience", note: "Primary UI library since the Sang Media internship." },
      { name: "Next.js", depth: "Professional experience", note: "Used for dynamic, scalable web applications." },
      { name: "HTML5 & CSS3", depth: "Professional experience", note: "Semantic structure and responsive styling." },
      { name: "Tailwind CSS", depth: "Professional experience", note: "Used with Bootstrap for consistent product UI." },
      { name: "Bootstrap", depth: "Professional experience", note: "Used alongside Tailwind on business interfaces." },
      { name: "Redux Toolkit", depth: "Professional experience", note: "State management on Sang Media applications." },
      { name: "TanStack Query", depth: "Professional experience", note: "Server-state and data caching on client apps." },
      { name: "Vue.js", depth: "Working knowledge", note: "Part of my frontend toolkit, alongside React and Next.js." },
      { name: "React Hook Form", depth: "Project work", note: "Forms and validation on the HRM & task app." },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    summary:
      "Node.js and Express APIs, authentication, and the data flow between interface and database.",
    items: [
      { name: "Node.js", depth: "Professional experience", note: "Backend work in the current full-stack role, and smaller backend tasks earlier." },
      { name: "Express.js", depth: "Professional experience", note: "Used to build backend APIs in the current role." },
      { name: "REST APIs", depth: "Professional experience", note: "Designed and integrated REST endpoints with frontend clients." },
      { name: "Authentication", depth: "Professional experience", note: "Secure sign-in on product interfaces and API-backed apps." },
      { name: "API integration", depth: "Professional experience", note: "Connecting React and Next.js clients to backend services." },
    ],
  },
  {
    id: "data",
    label: "Databases",
    summary: "Relational and document data for application features, from schema design through queried reads and writes.",
    items: [
      { name: "PostgreSQL", depth: "Professional experience", note: "Used in the current full-stack role for application data." },
      { name: "MongoDB", depth: "Professional experience", note: "Used alongside PostgreSQL for application data." },
      { name: "MySQL", depth: "Working knowledge", note: "Familiar from study and practice, separate from the databases used in current employment." },
    ],
  },
  {
    id: "platform",
    label: "Cloud & delivery",
    summary:
      "Project demos are deployed on Vercel. Docker, AWS, and microservice boundaries are working knowledge, not production systems I owned.",
    items: [
      { name: "Git & GitHub", depth: "Project work", note: "Public repositories for the 3D viewer and panorama projects." },
      { name: "Vercel", depth: "Project work", note: "Live demos are deployed for the AR viewer and panorama viewer." },
      { name: "Docker", depth: "Working knowledge", note: "Container concepts. Not claimed as production ownership." },
      { name: "AWS fundamentals", depth: "Working knowledge", note: "Core cloud ideas and services studied. Not claimed as production ownership." },
      { name: "Microservices concepts", depth: "Working knowledge", note: "How services talk to each other. Shown later as an illustrative diagram only." },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  problem: string;
  contribution: string;
  features: string[];
  technologies: string[];
  live?: string;
  github?: string;
  accent: "violet" | "blue" | "cyan";
};

export const projects: Project[] = [
  {
    id: "infinitenotes",
    title: "InfiniteNotes",
    category: "Music platform",
    problem: "Learning an instrument is split across chords, practice, and discovery, with no single place that understands the player.",
    contribution:
      "Built the public InfiniteNotes product at infinitenotes.tech: a music platform for learning, playing, and understanding music, with Supabase behind the app.",
    features: [
      "Coming-soon experience for an intelligent music platform",
      "Guitar chords in Western notation and Indian Sa Re Ga Ma",
      "Product direction for an AI chord simplifier, music tutor, voice-to-chord, and mood discovery",
      "Paths for learners and for teachers who create and share lessons",
    ],
    technologies: ["React", "Vite", "Supabase"],
    live: "https://infinitenotes.tech/",
    accent: "violet",
  },
  {
    id: "myspace",
    title: "MySpace",
    category: "Personal AI chat",
    problem: "Thinking out loud needs a calm chat, not a blank document, and the conversation should be saveable once you sign in.",
    contribution:
      "Built MySpace, a personal chat for organizing thoughts, planning, and reflecting. Signed-in chats can be saved with personal memory. The model calls use Gemini.",
    features: [
      "Chat for organizing thoughts, planning next steps, and reflecting",
      "Guest mode keeps the conversation temporary",
      "Sign-in for saved chats and personal memory",
      "Light and dark themes",
    ],
    technologies: ["React", "Vite", "Gemini", "Supabase"],
    live: "https://myspace-ai-chat.vercel.app/",
    accent: "cyan",
  },
  {
    id: "smart-apply",
    title: "Smart Apply",
    category: "Job applications",
    problem: "Applying to jobs means repeating the same details, resume, and message for every role.",
    contribution:
      "Built Smart Apply, a workspace for preparing and sending applications, with account sign-in and a guest session that stays in the browser.",
    features: [
      "Quick Apply for a single job",
      "Bulk Apply for personalized applications to multiple recruiters",
      "Resumes, email templates, and application history",
      "AI Apply is marked as coming soon on the product",
    ],
    technologies: ["React", "Vite", "Supabase"],
    live: "https://smart-apply-sigma.vercel.app/",
    accent: "blue",
  },
  {
    id: "panorama",
    title: "React 360 Panorama View",
    category: "Immersive viewing",
    problem: "A single photograph cannot show a space. Viewers need to look around a panorama with mouse and touch.",
    contribution:
      "Developed a panoramic 360-degree image viewer in React with Three.js, aimed at product showcases and virtual tours.",
    features: [
      "Seamless panoramic viewing",
      "Mouse and touch controls",
      "Suited to real estate, tourism, and product visualization",
    ],
    technologies: ["React", "Three.js", "WebGL"],
    live: "https://react-360view-panorama.vercel.app/",
    github: "https://github.com/patel-bhargavi/react-360-panorama",
    accent: "cyan",
  },
  {
    id: "catloga",
    title: "Catloga",
    category: "Digital catalogue",
    problem: "Tile businesses need a practical way to organize collections and share them with clients.",
    contribution:
      "Built the interface for creating, managing, and showcasing tile collections, including authentication and catalogue data.",
    features: [
      "Upload product images and organize tiles by category",
      "Generate interactive digital catalogues",
      "Secure authentication and data management for the catalogue workflow",
    ],
    technologies: ["React", "Tailwind CSS", "React Query", "Authentication"],
    accent: "blue",
  },
  {
    id: "hrm",
    title: "HRM & Task Management",
    category: "Business application",
    problem: "HR and task tracking needs a clear business interface, not a loose collection of forms.",
    contribution:
      "Designed key UI from Figma and built a responsive business theme with validated forms and authentication.",
    features: [
      "Responsive layout from Figma using React, TypeScript, Tailwind CSS, and Bootstrap",
      "Integrated forms with React Hook Form and validation",
      "Secure user authentication",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Bootstrap", "React Hook Form"],
    accent: "violet",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company: "Karavya Solutions LLP",
    location: "Ahmedabad",
    period: "July 2025 — Present",
    summary:
      "I design and develop web applications across the stack: React and Next.js interfaces, Node.js and Express APIs, and PostgreSQL and MongoDB data. The work covers architecture through deployment and maintenance, with attention to performance, code quality, and collaboration with the rest of the team.",
    points: [
      "Build backend APIs with Node.js and Express and connect them to React and Next.js clients.",
      "Design application data in PostgreSQL and MongoDB.",
      "Carry features from design through deployment and maintenance.",
      "Optimize application performance and keep the codebase maintainable as it grows.",
    ],
    skills: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "TypeScript"],
  },
  {
    title: "Junior Front-end Developer",
    company: "Sang Media",
    location: "Morbi, Gujarat",
    period: "September 2024 — April 2025",
    summary:
      "I built and optimized React.js and Next.js applications, integrated REST APIs, and kept client state predictable with Redux Toolkit and TanStack Query. Interfaces were implemented with Tailwind CSS and Bootstrap, with some Node.js work on smaller backend tasks.",
    points: [
      "Developed dynamic web applications with React.js and Next.js, focused on performance and user experience.",
      "Integrated RESTful APIs and managed server state with Redux Toolkit and TanStack Query.",
      "Built responsive UI with Tailwind CSS and Bootstrap.",
      "Collaborated with the team and handled smaller Node.js backend tasks.",
    ],
    skills: ["React", "Next.js", "Redux Toolkit", "TanStack Query", "REST", "Tailwind CSS", "Bootstrap", "Node.js"],
  },
  {
    title: "Intern Front-end Developer",
    company: "Sang Media",
    location: "Morbi, Gujarat",
    period: "July 2024 — September 2024",
    summary:
      "Internship focused on responsive React.js applications, REST integration, and the team’s review rhythm. I wrote reusable UI with Tailwind CSS and Bootstrap and joined code reviews and stand-ups.",
    points: [
      "Built and maintained responsive React.js interfaces.",
      "Worked with backend teammates to integrate RESTful APIs.",
      "Used Redux Toolkit and TanStack Query for state and cached data.",
      "Joined code reviews, stand-ups, and the agile cycle.",
    ],
    skills: ["React", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "Bootstrap"],
  },
] as const;

export const approach = [
  {
    title: "Understand the problem first",
    text: "I start from the workflow and the interface it needs, including design references such as Figma, before writing components.",
  },
  {
    title: "Build interfaces that stay maintainable",
    text: "Reusable React structure, responsive layout, and consistent styling with Tailwind CSS and Bootstrap keep later changes smaller.",
  },
  {
    title: "Design the API and data path together",
    text: "REST endpoints, authentication, and PostgreSQL or MongoDB models are planned so the screen and the data agree.",
  },
  {
    title: "Use AI where it helps the product",
    text: "I treat model-backed features as a product decision. I only want them in an application when they solve a real task for the user.",
  },
  {
    title: "Ship with performance in mind",
    text: "Current work includes deployment, maintenance, and performance. Public demos are deployed on Vercel.",
  },
] as const;

export const education = [
  {
    degree: "B.E (Information Technology)",
    institution: "L.E. College",
    location: "Morbi.Gujarat",
    period: "2022 - 2025",
    type: "Bachelor's Degree",
  },
  {
    degree: "Diploma - C.E(Computer Engineering)",
    institution: "SREZ College",
    location: "Rajkot",
    period: "2019 - 2022",
    type: "Diploma",
  },
  {
    degree: "SSC",
    institution: "Eklavya School",
    location: "Chotila (Surendranagar)",
    period: "2018–2019",
    type: "Secondary",
  },
] as const;

export const certifications = ["React with Redux Course - UDEMY", "Web Development Course"] as const;
