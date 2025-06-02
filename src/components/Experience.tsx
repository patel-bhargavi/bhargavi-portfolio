
import React, { useRef, useEffect } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Sang Media Pvt.Ltd - Morbi (Gujarat)",
      period: "July 2024 - September 2024",
      type: "INTERN FRONT END DEVELOPER",
      description: "Developed a comprehensive web application using React framework, integrating dynamic user interface with backend services. Collaborated with backend teams to integrate RESTful APIs, ensuring smooth data flow and application functionality. Built a clean and responsive frontend design using modern CSS frameworks and Best Query for optimized data handling. Created registration, authentication, and user management features utilizing cutting-edge technologies and methodologies.",
      skills: ["React", "RESTful APIs", "CSS Frameworks", "Authentication", "User Management"]
    },
    {
      title: "Full Stack Developer",
      company: "Sang Media Pvt.Ltd - Morbi (Gujarat)",
      period: "July 2024 - September 2024",
      type: "INTERN FRONT END DEVELOPER",
      description: "Enhanced Query Tactics Query for efficient data and data management. Created registration, authentication, and user management features utilizing cutting-edge technologies. Focused on performance optimization and user experience improvements. Contributed to team knowledge sharing and development best practices.",
      skills: ["Data Management", "Performance Optimization", "Team Collaboration", "Best Practices"]
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
