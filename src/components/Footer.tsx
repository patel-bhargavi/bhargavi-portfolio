
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold font-montserrat">
              Bhargavi<span className="text-primary">.dev</span>
            </h2>
          </div>

          <div className="flex gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/bhargavi-patel-1016b9238"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full text-white hover:bg-primary transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/patel-bhargavi/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full text-white hover:bg-primary transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:work.bhargavi@yahoo.com"
              className="bg-gray-700 p-3 rounded-full text-white hover:bg-primary transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Bhargavi Patel. All rights reserved.</p>
            <p className="mt-2">Frontend Developer based in Gujarat, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
