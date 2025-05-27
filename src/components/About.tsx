import pdf from '../assets/Bhargavi Patel Resume.pdf';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            I am a dedicated and highly motivated Frontend Developer with a strong focus on creating engaging and user-friendly web applications. Skilled in building interactive interfaces that deliver seamless user experiences using modern web technologies.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            Proficient in developing functional UI using React.js, Next.js, TypeScript, and Tailwind CSS. Proficient in integrating RESTful APIs and managing application state using Redux Toolkit and React Query (TanStack Query). Experienced in writing clean, maintainable code and optimizing performance for scalability.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            Committed to continuous learning, attention to detail, and delivering high-quality solutions. Comfortable collaborating in fast-paced environments to meet both user and business needs.
          </p>
          <div className="flex justify-center mt-8">
            <a
              href={pdf} // Ensure this file is in your public folder
              className="button-primary inline-flex items-center gap-2"
              download="Bhargavi_Patel_Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
