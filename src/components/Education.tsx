
import React, { useRef, useEffect } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationRef = useRef<HTMLDivElement>(null);

  const education = [
    {
      degree: "B.E (Information Technology)",
      institution: "L.E. College",
      location: "Morbi.Gujarat",
      period: "2022 - 2025",
      type: "Bachelor's Degree",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      degree: "Diploma - C.E(Computer Engineering)",
      institution: "SREZ College",
      location: "Rajkot",
      period: "2019 - 2022",
      type: "Diploma",
      icon: Award,
      color: "from-purple-500 to-pink-500"
    },
    {
      degree: "SSC",
      institution: "Eklavya School",
      location: "Chotila (Surendranagar)",
      period: "2018-2019",
      type: "",
      icon: Award,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const certifications = [
    "React with Redux Course - UDEMY",
    "Web Development Course",
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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic background and professional development journey
          </p>
        </div>

        <div ref={educationRef} className="">
          {/* Education */}
          <div className=''>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="mr-3 text-blue-400" size={32} />
              Education
            </h3>

            <div className="grid grid-cols-2 w-full gap-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-900/50 group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <edu.icon size={24} className="text-white" />
                    </div>
                    {edu.type && (
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                        {edu.type}
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {edu.degree}
                  </h4>

                  <div className="text-gray-300 mb-2 flex items-center">
                    <GraduationCap size={16} className="mr-2 text-gray-400" />
                    {edu.institution}
                  </div>

                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {edu.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {/* <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Award className="mr-3 text-purple-400" size={32} />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 group cursor-pointer"
                  style={{ animationDelay: `${(index + 3) * 150}ms` }}
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {cert}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
