
import { Code, Database, Layout, PenTool, Share2, Zap } from 'lucide-react';

const Skills = () => {
  const frontendSkills = [
    { name: "React.js", icon: <Code size={24} /> },
    { name: "Next.js", icon: <Zap size={24} /> },
    { name: "TypeScript", icon: <Code size={24} /> },
    { name: "JavaScript", icon: <Code size={24} /> },
    { name: "Tailwind CSS", icon: <PenTool size={24} /> },
    { name: "Redux Toolkit", icon: <Database size={24} /> },
    { name: "TanStack Query", icon: <Share2 size={24} /> },
    { name: "HTML/CSS", icon: <Layout size={24} /> },
  ];

  const otherSkills = [
    { name: "Node.js", icon: <Code size={24} /> },
    { name: "RESTful APIs", icon: <Share2 size={24} /> },
    { name: "Bootstrap", icon: <PenTool size={24} /> },
    { name: "Firebase", icon: <Database size={24} /> },
    { name: "MySQL", icon: <Database size={24} /> },
    { name: "WordPress", icon: <Layout size={24} /> },
    { name: "Flutter", icon: <Layout size={24} /> },
    { name: "TypeScript", icon: <Code size={24} /> },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            I've acquired and honed various technical skills throughout my frontend development journey.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Frontend Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {frontendSkills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-card"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="text-primary mb-2">{skill.icon}</div>
                <h4 className="font-medium text-gray-800">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-center">Additional Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {otherSkills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-card"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="text-primary mb-2">{skill.icon}</div>
                <h4 className="font-medium text-gray-800">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
