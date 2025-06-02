
import React, { useRef, useEffect } from 'react';
import { Code, Zap, Users, Target } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency"
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Focusing on user experience and accessibility"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Delivering solutions that meet business objectives"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={aboutRef} className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a dedicated Front-End Developer with expertise in building innovative, 
              user-friendly web applications using React's ecosystem. Skilled in integrating 
              cutting-edge design with functional UI to deliver engaging user experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My experience spans developing comprehensive solutions, optimizing performance, 
              and delivering scalable applications that meet modern web standards.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                React.js
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                JavaScript
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                Node.js
              </span>
              <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30">
                TypeScript
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
