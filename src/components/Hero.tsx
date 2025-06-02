
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!laptopRef.current) return;
    
    const rect = laptopRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = (e.clientY - centerY) / 10;
    const rotateY = (e.clientX - centerX) / 10;
    
    setMousePosition({ x: rotateY, y: -rotateX });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div ref={heroRef} className="text-center z-10 px-6 max-w-7xl mx-auto">
        {/* Main content with 3D laptop animation beside name */}
        <div className="flex items-center justify-center flex-col lg:flex-row gap-12 lg:gap-20 mb-8">
          {/* Name Section */}
          <div className="flex-1 lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
              Bhargavi Patel
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 animate-fade-in delay-300">
              Front-End Developer
            </p>
          </div>

          {/* 3D Interactive Developer Laptop Animation */}
          <div className="flex-shrink-0">
            <div 
              ref={laptopRef}
              className="w-80 h-80 relative perspective-1000 cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              {/* Laptop Base with 3D interaction */}
              <div 
                className={`absolute inset-0 transition-transform duration-300 ease-out ${
                  isHovering ? '' : 'animate-laptop-float'
                }`}
                style={{
                  transform: isHovering 
                    ? `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(0)`
                    : undefined
                }}
              >
                {/* Laptop Screen */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-t-lg border-2 border-gray-600 animate-screen-glow">
                  {/* Screen Content - Code Animation */}
                  <div className="p-3 h-full overflow-hidden relative">
                    <div className="text-xs font-mono text-green-400 animate-typing">
                      <div className="animate-code-line" style={{ animationDelay: '0s' }}>{'<div className="hero">'}</div>
                      <div className="animate-code-line" style={{ animationDelay: '0.5s' }}>{'  <h1>Hello World</h1>'}</div>
                      <div className="animate-code-line" style={{ animationDelay: '1s' }}>{'  <p>Developer</p>'}</div>
                      <div className="animate-code-line" style={{ animationDelay: '1.5s' }}>{'</div>'}</div>
                    </div>
                    {/* Cursor Blink */}
                    <div className="absolute bottom-3 left-3 w-1 h-4 bg-green-400 animate-cursor-blink"></div>
                  </div>
                </div>
                
                {/* Laptop Keyboard */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-52 h-20 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg border-2 border-gray-600">
                  {/* Keyboard Keys */}
                  <div className="grid grid-cols-12 gap-0.5 p-2 h-full">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-gray-600 rounded-sm animate-key-press"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                  {/* Trackpad */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-600 rounded border border-gray-500"></div>
                </div>
                
                {/* Floating Code Elements */}
                <div className="absolute inset-0">
                  {/* React Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 text-blue-400 animate-float-code" style={{ animationDelay: '0s' }}>
                    <div className="w-full h-full border-2 border-current rounded-full relative">
                      <div className="absolute inset-1 border border-current rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* JavaScript Symbol */}
                  <div className="absolute top-12 left-4 w-6 h-6 bg-yellow-400 text-black flex items-center justify-center text-xs font-bold rounded animate-float-code" style={{ animationDelay: '0.5s' }}>
                    JS
                  </div>
                  
                  {/* CSS Symbol */}
                  <div className="absolute bottom-12 right-8 w-6 h-6 bg-blue-500 text-white flex items-center justify-center text-xs font-bold rounded animate-float-code" style={{ animationDelay: '1s' }}>
                    CSS
                  </div>
                  
                  {/* HTML Brackets */}
                  <div className="absolute bottom-16 left-8 text-orange-400 text-lg font-mono animate-float-code" style={{ animationDelay: '1.5s' }}>
                    {'</>'}
                  </div>
                  
                  {/* Binary Code Stream */}
                  <div className="absolute top-16 left-16 text-green-400 text-xs font-mono animate-binary-stream" style={{ animationDelay: '2s' }}>
                    101010
                  </div>
                  
                  {/* Git Branch */}
                  <div className="absolute bottom-20 right-16 text-purple-400 text-sm animate-float-code" style={{ animationDelay: '2.5s' }}>
                    git
                  </div>
                </div>
                
                {/* Orbiting Particles */}
                <div className={`absolute inset-0 ${isHovering ? 'animate-pulse' : 'animate-orbit-laptop'}`}>
                  <div className="absolute top-8 left-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
                  <div className="absolute bottom-8 right-8 w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-20 right-12 w-2 h-2 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>

              {/* 3D Depth Shadow */}
              <div 
                className="absolute inset-0 bg-black/20 blur-xl transform translate-y-4 translate-x-4 -z-10 transition-transform duration-300"
                style={{
                  transform: isHovering 
                    ? `translateY(${4 + mousePosition.y / 4}px) translateX(${4 + mousePosition.x / 4}px)`
                    : undefined
                }}
              ></div>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in delay-500">
          Passionate about creating innovative, user-friendly web applications using React, 
          JavaScript, and modern web technologies. Focused on delivering high-quality solutions.
        </p>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-700">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/25"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/25"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/25"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown size={32} className="mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
