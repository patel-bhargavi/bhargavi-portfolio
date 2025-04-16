
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Slang Media",
      location: "Morbi, Gujarat",
      position: "Junior Frontend Developer",
      period: "September 2024 - April 2025",
      description: [
        "Developed and optimized dynamic, scalable web applications using React.js and Next.js, focusing on performance and user experience.",
        "Implemented and integrated RESTful APIs to ensure smooth backend communication and leveraged Redux Toolkit and React Query (TanStack Query) for efficient state and data management.",
        "Crafted responsive, visually appealing UIs using Tailwind CSS and Bootstrap, adhering to modern design principles.",
        "Collaborated with cross-functional teams and utilized Node.js for minor backend tasks, contributing to a more cohesive development workflow."
      ]
    },
    {
      company: "Slang Media",
      location: "Morbi, Gujarat",
      position: "Intern Frontend Developer",
      period: "July 2024 - September 2024",
      description: [
        "During my internship as a Frontend Developer, I gained practical experience building and maintaining responsive, high-performance web applications using React.js and Next.js.",
        "Collaborated closely with backend teams to integrate RESTful APIs, ensuring seamless data flow and optimized user experiences.",
        "My work involved managing application state effectively using Redux Toolkit and React Query (TanStack Query) for efficient data fetching and caching.",
        "Contributed to designing intuitive UIs with Tailwind CSS and Bootstrap, maintaining consistency across devices and screen sizes.",
        "Additionally, further enhanced my full-stack development understanding through exposure to Node.js for basic backend interactions."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-12 relative">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="sm:w-1/3">
                  <div className="p-4 bg-secondary rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg text-gray-800">{experience.company}</h3>
                    <div className="flex items-center text-gray-600 mt-2">
                      <MapPin size={16} className="text-primary mr-2" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Calendar size={16} className="text-primary mr-2" />
                      <span className="text-sm">{experience.period}</span>
                    </div>
                  </div>
                </div>
                <div className="sm:w-2/3">
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">{experience.position}</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-gray-600 text-base">{item}</li>
                    ))}
                  </ul>
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
