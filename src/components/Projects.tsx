
import React, { useRef, useEffect } from 'react';
import { ExternalLink, Github, Code, Database, Palette } from 'lucide-react';

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "HRM & Task Management",
      description: "A comprehensive tracking app developed by designing key UI features based on Figma designs. Built a clean and responsive business theme using React, TypeScript, Tailwind CSS, and Bootstrap to create integrated forms with React Hook Form and validation. Implemented secure user authentication and utilized intelligent system design for optimal performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "React Hook Form", "Authentication"],
      icon: Database,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Catloga – Digital Tile Catalogue Maker",
      description: "Developed a digital tile catalogue platform that enables businesses to easily create, manage, and showcase their tile collections online. Designed an intuitive and visually appealing user interface using React and Tailwind CSS, allowing users to upload product images, organize tiles by categories, and generate interactive digital catalogues. Integrated secure authentication and efficient data management for seamless user experience. This project streamlined the process of presenting and sharing tile collections with clients, enhancing business visibility and customer engagement.",
      technologies: ["React", "Tailwind CSS", "Authentication", "UI/UX Design", "React Query"],
      icon: Database,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of my recent work and development projects
          </p>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-900/50"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon size={32} className="text-white" />
                  </div>
                  <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                      <Github size={20} />
                    </button>
                    <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600 group-hover:border-gray-500 group-hover:bg-gray-600/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/patel-bhargavi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
