
import { ArrowDown } from 'lucide-react';
import image from '../assets/home-main.svg'
const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen pt-24 flex items-center relative animated-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-primary font-medium text-lg md:text-xl mb-3">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
              Bhargavi Patel
            </h1>
            <h3 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
              Front-End Developer
            </h3>
            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-xl">
              A dedicated and highly motivated Frontend Developer with a strong focus on creating engaging and user-friendly web applications. Skilled in building interactive interfaces that deliver seamless user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="button-primary"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="button-outline"
                onClick={(e) => {
                  e.preventDefault();
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden animated-border">
              <img
                src={image}
                alt="Bhargavi Patel Resume"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-primary hover:text-primary/80">
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
