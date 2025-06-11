
import React, { useRef, useEffect } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "Junior Front-end Developer",
      company: "Sang Media - Morbi (Gujarat)",
      period: "September 2024 - April 2025",
      type: "INTERN FRONT END DEVELOPER",
      description:
        "As a Frontend Developer, I developed and optimized dynamic, scalable web applications using React.js and Next.js, focusing on performance and user experience. I implemented and integrated RESTful APIs to ensure smooth backend communication and leveraged Redux Toolkit and React Query (TanStack Query) for efficient state and data management. I crafted responsive, visually consistent UIs using Tailwind CSS and Bootstrap, adhering to modern design principles. Additionally, I collaborated with cross-functional teams and utilized Node.js for minor backend tasks, contributing to a more cohesive development workflow.",
      skills: ["React", "Next.js", "Redux Toolkit", "React Query", "RESTful APIs", "Tailwind CSS", "Bootstrap", "Node.js", "Team Collaboration"]
    },
    {
      title: "Intern Front-end Developer",
      company: "Sang Media - Morbi (Gujarat)",
      period: "July 2024 - September 2024",
      type: "INTERN FRONT END DEVELOPER",
      description:
        "Built and maintained responsive, high-performance web applications using React.js during my internship as a Front-end Developer. Collaborated with backend teams to integrate RESTful APIs, ensuring smooth data flow and optimal user experiences. Utilized Redux Toolkit and React Query for efficient state management and data caching. Designed consistent, device-friendly UIs using Tailwind CSS and Bootstrap. Actively participated in code reviews and team stand-ups, contributing to agile development cycles. Focused on writing clean, reusable code and followed best practices to enhance code maintainability and scalability.",
      skills: [
        "Redux Toolkit",
        "React Query",
        "Tailwind CSS",
        "Bootstrap",
        "Code Reviews",
        "Agile Development",
        "Clean Code",
        "Best Practices",
      ],
    },
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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey and key contributions in web development
          </p>
        </div>

        <div ref={experienceRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-12 md:ml-16 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 hidden md:block group-hover:scale-125 transition-transform duration-300"></div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center text-blue-400 mb-2">
                      <Building size={16} className="mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-400 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                      {exp.type}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
