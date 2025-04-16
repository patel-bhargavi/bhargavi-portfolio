
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "HRM & Task Management",
      description: "Developed and implemented key UI screens based on Figma designs using React TypeScript, Tailwind CSS, and shadcn/ui, ensuring a clean and responsive interface. Integrated backend services using Redux Toolkit and React Query to handle API calls efficiently and manage state and caching.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "TanStack Query"],
      github: "#",
      live: "#"
    },
    {
      title: "Catloga - Digital Tile Catalogue Platform",
      description: "Developed a responsive and user-centric interface for a digital catalog system showcasing tile manufacturing designs. Translated Figma designs into high-quality UI components using React TypeScript, Tailwind CSS, and shadcn/ui. Implemented seamless API integrations using Redux Toolkit and React Query to ensure efficient state management and optimized data fetching.",
      image: "https://images.unsplash.com/photo-1536566482680-fca31930a0bd?q=80&w=2787&auto=format&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "TanStack Query"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. These showcase my skills and experience in frontend development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card bg-white overflow-hidden"
              style={{ animationDelay: `${0.3 * index}s` }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary text-gray-700 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
