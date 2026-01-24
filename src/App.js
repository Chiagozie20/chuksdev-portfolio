import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code, Users, Briefcase, Award, Mail, Phone, Linkedin, ChevronRight, Instagram, Github, MessageCircle, Sparkles, Terminal, Laptop, Zap, Database, Globe, Star, Quote } from 'lucide-react';
import chuksdevLogo from './chuksdevLogo.jpg';

// Logo Component
const Logo = ({ className = "w-12 h-12" }) => (
  <img 
    src={chuksdevLogo}
    alt="ChuksDev Logo"
    className={`${className} rounded-full object-cover`}
  />
);

// Student Avatar Component (generates placeholder avatars with initials)
const StudentAvatar = ({ name, className = "w-12 h-12" }) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  const colors = [
    'bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 
    'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-teal-500'
  ];
  const colorIndex = name.charCodeAt(0) % colors.length;
  
  return (
    <div className={`${className} ${colors[colorIndex]} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
      {initials}
    </div>
  );
};

// Testimonials Data
const testimonials = [
  {
    name: "Chidera Onwunyiri",
    stack: "Full-Stack (React & Node.js)",
    text: "ChuksDev Solutions transformed my career! I went from knowing nothing about coding to building my own e-commerce platform. The hands-on approach and real-world projects made all the difference.",
    rating: 5,
    date: "January 15, 2024"
  },
  {
    name: "Ubah Amarachi",
    stack: "Frontend Development (React)",
    text: "The bootcamp exceeded my expectations. The instructors were patient, the curriculum was well-structured, and I loved the supportive community. Now I'm a confident frontend developer!",
    rating: 4,
    date: "February 5, 2024"
  },
  {
    name: "Emeka Bright",
    stack: "Full-Stack (Python & React)",
    text: "Best investment I've made in myself! The capstone project helped me build a portfolio that landed me my first dev job within 2 months of graduation.",
    rating: 5,
    date: "March 10, 2024"
  },
  {
    name: "Blessing Adeyemi",
    stack: "Backend Development (Node.js)",
    text: "I was skeptical at first, but ChuksDev proved me wrong. The practical approach to teaching backend development with real APIs and databases was exactly what I needed.",
    rating: 5,
    date: "April 2, 2024"
  },
  {
    name: "Ademola Ojo",
    stack: "Full-Stack (MERN Stack)",
    text: "From zero to hero! The MERN stack bootcamp was intense but incredibly rewarding. I can now build complete web applications from scratch. Highly recommend!",
    rating: 5,
    date: "May 18, 2024"
  },
  {
    name: "Abiola Taiwo",
    stack: "Frontend Development (React)",
    text: "The bootcamp's focus on modern frameworks like React prepared me for the real world. I'm now working as a junior developer at a tech startup!",
    rating: 4,
    date: "June 7, 2024"
  },
  {
    name: "Oluwaseun Balogun",
    stack: "Full-Stack (Node.js & MongoDB)",
    text: "ChuksDev doesn't just teach you to code; they teach you to think like a developer. The problem-solving skills I gained are invaluable.",
    rating: 5,
    date: "July 22, 2024"
  },
  {
    name: "Ifeanyi Nnamdi",
    stack: "Backend Development (Python)",
    text: "The Python backend course was comprehensive and practical. Learning to build REST APIs and work with databases has opened so many opportunities for me.",
    rating: 5,
    date: "August 14, 2024"
  },
  {
    name: "Chiamaka Obi",
    stack: "Frontend Development (React & CSS)",
    text: "I loved the emphasis on responsive design and user experience. Now I can create beautiful, functional websites that work on any device.",
    rating: 5,
    date: "September 3, 2024"
  },
  {
    name: "Daniel Ugochukwu",
    stack: "Full-Stack (React & Express)",
    text: "The instructors at ChuksDev are top-notch. They break down complex concepts into digestible lessons. I finished the bootcamp feeling confident and job-ready.",
    rating: 5,
    date: "October 19, 2024"
  },
  {
    name: "Adaeze Favour",
    stack: "Frontend Development (JavaScript & React)",
    text: "Before ChuksDev, I struggled with JavaScript. Now I'm building interactive web apps with React! The learning environment was encouraging and supportive.",
    rating: 5,
    date: "November 8, 2024"
  },
  {
    name: "Victor Onyeka",
    stack: "Full-Stack (MERN Stack)",
    text: "Best coding bootcamp in Nigeria! The curriculum is up-to-date, the projects are challenging, and the career support after graduation is excellent.",
    rating: 5,
    date: "December 24, 2024"
  },
  {
    name: "Chioma Mba",
    stack: "Backend Development (Node.js & PostgreSQL)",
    text: "I appreciated the focus on both SQL and NoSQL databases. This knowledge has been crucial in my current role as a backend developer.",
    rating: 5,
    date: "January 12, 2025"
  },
  {
    name: "Ikenna Okafor",
    stack: "Full-Stack (Python & React)",
    text: "ChuksDev gave me the tools and confidence to pursue my dream of becoming a software developer. The bootcamp was challenging but incredibly rewarding!",
    rating: 5,
    date: "February 28, 2025"
  },
  {
    name: "Adeola Johnson",
    stack: "Frontend Development (React & Tailwind)",
    text: "Learning Tailwind CSS alongside React was a game-changer. I can now create modern, responsive designs quickly and efficiently.",
    rating: 5,
    date: "March 15, 2025"
  },
  {
    name: "Obinna Kalu",
    stack: "Full-Stack (Node.js & React)",
    text: "The hands-on projects prepared me for real-world development. I built a full social media app during the bootcamp that's now part of my portfolio!",
    rating: 5,
    date: "April 30, 2025"
  },
  {
    name: "Funmilayo Adebayo",
    stack: "Frontend Development (JavaScript & Bootstrap)",
    text: "As a complete beginner, I was nervous, but the instructors made everything easy to understand. Now I'm building websites for local businesses!",
    rating: 5,
    date: "May 20, 2025"
  },
  {
    name: "Chinedu Okonkwo",
    stack: "Backend Development (Python & Django)",
    text: "The Django framework course was thorough and practical. I learned how to build secure, scalable backend systems that power modern web applications.",
    rating: 5,
    date: "June 9, 2025"
  },
  {
    name: "Patience Udo",
    stack: "Full-Stack (React & Node.js)",
    text: "ChuksDev's bootcamp changed my life. I went from a non-tech background to landing a developer job at an international company. Forever grateful!",
    rating: 5,
    date: "July 25, 2025"
  },
  {
    name: "Tunde Akinola",
    stack: "Frontend Development (React & Redux)",
    text: "Learning state management with Redux was challenging but the instructors were patient and helpful. Now I can build complex, scalable React applications.",
    rating: 5,
    date: "August 16, 2025"
  },
  {
    name: "Amaka Nwosu",
    stack: "Full-Stack (MERN Stack)",
    text: "The capstone project was the highlight of the bootcamp. Building a complete e-commerce site from scratch gave me the confidence to apply for developer positions.",
    rating: 5,
    date: "September 4, 2025"
  },
  {
    name: "Solomon Eze",
    stack: "Backend Development (Node.js & Express)",
    text: "I learned how to build RESTful APIs, handle authentication, and deploy applications. These skills are exactly what employers are looking for!",
    rating: 5,
    date: "October 21, 2025"
  },
  {
    name: "Chinonso Okoro",
    stack: "Frontend Development (HTML, CSS, JavaScript)",
    text: "Starting with the basics and gradually moving to advanced topics made learning so much easier. The structure of the course was perfect for beginners.",
    rating: 5,
    date: "November 10, 2025"
  },
  {
    name: "Grace Umeh",
    stack: "Full-Stack (Python & React)",
    text: "The combination of Python for backend and React for frontend is powerful. I can now build complete web applications independently!",
    rating: 5,
    date: "December 26, 2025"
  },
  {
    name: "Kingsley Obi",
    stack: "Backend Development (Node.js & MongoDB)",
    text: "Learning MongoDB and building NoSQL database-driven applications was an eye-opener. The practical exercises were extremely helpful.",
    rating: 5,
    date: "January 5, 2026"
  },
  {
    name: "Ebere Chukwudi",
    stack: "Frontend Development (React & TypeScript)",
    text: "Adding TypeScript to React made my code more robust and maintainable. ChuksDev prepared me well for professional development environments.",
    rating: 5,
    date: "January 18, 2026"
  },
  {
    name: "Michael Okafor",
    stack: "Full-Stack (MERN Stack)",
    text: "The bootcamp's emphasis on Git and version control was crucial. I learned industry-standard practices that have been invaluable in my career.",
    rating: 5,
    date: "February 3, 2025"
  },
  {
    name: "Jennifer Nkem",
    stack: "Frontend Development (React & Sass)",
    text: "I love how the course covered both CSS and Sass. Now I can create beautiful, maintainable stylesheets for any project.",
    rating: 5,
    date: "March 22, 2025"
  },
  {
    name: "Chukwuemeka Ibe",
    stack: "Backend Development (Python & FastAPI)",
    text: "Learning FastAPI alongside traditional frameworks gave me a modern edge. The async programming concepts were challenging but worth it!",
    rating: 5,
    date: "April 11, 2025"
  },
  {
    name: "Nneka Okeke",
    stack: "Full-Stack (React & Node.js)",
    text: "ChuksDev doesn't just teach coding; they teach professionalism, teamwork, and problem-solving. I'm now a well-rounded developer thanks to this bootcamp.",
    rating: 5,
    date: "May 27, 2025"
  },
  {
    name: "Oluchi Nnadi",
    stack: "Frontend Development (Vue.js)",
    text: "The Vue.js course was fantastic! Learning an alternative to React expanded my skillset and made me more marketable as a frontend developer.",
    rating: 5,
    date: "June 16, 2025"
  },
  {
    name: "Uche Onwuka",
    stack: "Full-Stack (Django & React)",
    text: "The Django + React combination is powerful for building modern web apps. The bootcamp gave me the skills to build anything I can imagine!",
    rating: 5,
    date: "July 1, 2025"
  }
];

// Animated Background Component
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-64 h-64 bg-green-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-300 opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>
);

// Floating Code Snippet Component
const FloatingCode = () => {
  const codeSnippets = [
    '{ code: "React" }',
    'function build() { }',
    'const dev = true;',
    'npm run create',
  ];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {codeSnippets.map((code, i) => (
        <div
          key={i}
          className="absolute text-green-500 font-mono text-sm animate-float"
          style={{
            top: `${20 + i * 20}%`,
            left: `${10 + i * 15}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i}s`
          }}
        >
          {code}
        </div>
      ))}
    </div>
  );
};

// Navigation Bar
const NavBar = ({ activePage, setActivePage, isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <nav className="bg-black/95 backdrop-blur-md border-b-2 border-green-500 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActivePage('home')}>
            <Logo className="w-10 h-10" />
            <div>
              <span className="text-xl font-bold text-white">CHUKS<span className="text-green-500">DEV</span></span>
              <span className="block text-xs text-gray-400 tracking-wider">SOLUTIONS</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'bootcamp', 'testimonials', 'contact'].map(page => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`${activePage === page ? 'text-green-500' : 'text-white'} hover:text-green-500 transition-all uppercase text-sm font-semibold relative group`}
              >
                {page}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 transform origin-left transition-transform ${activePage === page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
            ))}
          </div>

          <button 
            className="md:hidden text-white hover:text-green-500 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden bg-gray-900 border-t border-gray-800 animate-slideDown">
          {['home', 'about', 'services', 'bootcamp', 'testimonials', 'contact'].map(page => (
            <button
              key={page}
              onClick={() => { setActivePage(page); setIsMenuOpen(false); }}
              className="block w-full text-left px-4 py-3 text-white hover:bg-green-500 hover:text-black transition-all uppercase text-sm font-semibold"
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// Home Page
const HomePage = ({ setActivePage }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Building Websites & Building Futures';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center relative overflow-hidden">
        <AnimatedBackground />
        <FloatingCode />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <div className="w-40 h-40 mx-auto mb-8 relative group">
              <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
              <div className="relative bg-black rounded-full border-4 border-green-500 p-4 transform group-hover:scale-110 transition-transform">
                <Logo className="w-full h-full" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fadeIn">
              CHUKS<span className="text-green-500 animate-pulse">DEV</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 tracking-wide">SOLUTIONS</p>
            <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8 animate-pulse"></div>
            
            <p className="text-2xl md:text-3xl text-white mb-12 max-w-4xl mx-auto h-16 font-light">
              {typedText}<span className="animate-blink">|</span>
            </p>

            {/* Tech Icons */}
            <div className="flex justify-center gap-8 mb-12 flex-wrap">
              {[Terminal, Code, Database, Globe, Zap, Laptop].map((Icon, i) => (
                <div key={i} className="group cursor-pointer">
                  <Icon className="text-green-500 group-hover:text-green-400 transform group-hover:scale-125 transition-all" size={32} />
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => setActivePage('services')}
                className="bg-gradient-to-r from-green-500 to-green-600 text-black px-10 py-4 rounded-lg font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
              >
                <Briefcase className="group-hover:rotate-12 transition-transform" size={20} />
                View Services
              </button>
              <button 
                onClick={() => setActivePage('bootcamp')}
                className="border-2 border-green-500 text-green-500 px-10 py-4 rounded-lg font-bold hover:bg-green-500 hover:text-black transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
              >
                <Users className="group-hover:rotate-12 transition-transform" size={20} />
                Join Bootcamp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { num: '60+', label: 'Projects Delivered' },
              { num: '100+', label: 'Students Trained' },
              { num: '4+', label: 'Years Experience' },
              { num: '98%', label: 'Client Satisfaction' }
            ].map((stat, i) => (
              <div key={i} className="group hover:transform hover:scale-110 transition-all">
                <div className="text-5xl font-bold text-green-500 mb-2 group-hover:text-green-400">{stat.num}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">What We <span className="text-green-500">Offer</span></h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Empowering businesses and individuals through technology</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-black to-gray-900 p-8 rounded-xl border-2 border-green-500 transform hover:scale-105 transition-all hover:shadow-2xl hover:shadow-green-500/30 group">
              <Briefcase className="text-green-500 mb-4 group-hover:rotate-12 transition-transform" size={56} />
              <h3 className="text-3xl font-bold text-white mb-4">Web Development</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Custom websites and web applications built with modern technologies. From e-commerce platforms to sleek portfolios, we transform your digital vision into reality.
              </p>
              <button 
                onClick={() => setActivePage('services')}
                className="text-green-500 font-semibold flex items-center hover:underline group-hover:gap-3 gap-2 transition-all"
              >
                Learn More <ChevronRight size={20} />
              </button>
            </div>

            <div className="bg-gradient-to-br from-black to-gray-900 p-8 rounded-xl border-2 border-green-500 transform hover:scale-105 transition-all hover:shadow-2xl hover:shadow-green-500/30 group">
              <Users className="text-green-500 mb-4 group-hover:rotate-12 transition-transform" size={56} />
              <h3 className="text-3xl font-bold text-white mb-4">Bootcamp Training</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Master full-stack development from the ground up. Learn React, Node.js, Python, PostgreSQL, etc and build production-ready applications in an intensive, hands-on program.
              </p>
              <button 
                onClick={() => setActivePage('bootcamp')}
                className="text-green-500 font-semibold flex items-center hover:underline group-hover:gap-3 gap-2 transition-all"
              >
                Start Learning <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// About Page
const AboutPage = () => (
  <div className="pt-16 bg-white min-h-screen">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
          About <span className="text-green-500">ChuksDev Solutions</span>
        </h1>
        <div className="w-24 h-1 bg-green-500 mx-auto"></div>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          At ChuksDev Solutions, we're not just building websites—we're building futures. We exist at the intersection of innovation and education, empowering the next generation of digital creators while delivering exceptional web solutions to brands ready to make their mark online.
        </p>

        <h2 className="text-4xl font-bold text-black mt-16 mb-8">What We Do</h2>
        
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl mb-8 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <Users className="text-green-500 flex-shrink-0" size={32} />
            <h3 className="text-2xl font-bold text-green-500">For Aspiring Developers</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our intensive bootcamp program is designed for young people who are ready to transform their curiosity into capability. We don't just teach code; we cultivate problem-solvers, critical thinkers, and confident developers who are equipped to thrive in the digital economy. Whether you're taking your first steps into tech or looking to level up your skills, ChuksDev provides the mentorship, hands-on experience, and supportive community you need to succeed.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl mb-8 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <Briefcase className="text-green-500 flex-shrink-0" size={32} />
            <h3 className="text-2xl font-bold text-green-500">For Growing Brands</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We craft custom websites that don't just look good—they work hard for your business. From sleek landing pages to robust web applications, we build digital experiences that convert visitors into customers and help your brand stand out in a crowded marketplace. Every project is approached with creativity, precision, and a deep understanding of what makes businesses grow online.
          </p>
        </div>

        <div className="bg-gradient-to-br from-black to-gray-900 text-white p-10 rounded-xl mt-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-green-500" size={32} />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              We believe that technology should be accessible, education should be transformative, and every brand deserves a powerful online presence. At ChuksDev Solutions, we're committed to bridging the digital divide—one student and one website at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Bootcamp Page
const BootcampPage = ({ setActivePage }) => {
  const bootcampFeatures = [
    {
      title: 'Front-End Development',
      desc: 'HTML, CSS, JavaScript, and React - design responsive, interactive user interfaces.',
      icon: Laptop
    },
    {
      title: 'Back-End Development',
      desc: 'Node.js, Express, Python, and REST APIs - build powerful server-side logic.',
      icon: Database
    },
    {
      title: 'Databases',
      desc: 'PostgreSQL, MongoDB, and more - Store, manage, and retrieve data with confidence using modern database systems.',
      icon: Database
    },
    {
      title: 'Developer Tools',
      desc: 'Git & GitHub for version control, VS Code for coding, and real-world debugging tools.',
      icon: Terminal
    },
    {
      title: 'Deployment & Hosting',
      desc: 'Take your apps live with Vercel, Netlify, Heroku, and more.',
      icon: Globe
    },
    {
      title: 'Capstone Projects',
      desc: 'Create full-stack apps like blogs, e-commerce sites, or dashboards, perfect for your portfolio.',
      icon: Award
    }
  ];

  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Full-Stack Development <span className="text-green-500">Bootcamp</span>
          </h1>
          <p className="text-3xl text-gray-600 italic mb-6">Code, Repeat, Master!</p>
          <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            No Laptop? No Problem
          </div>
        </div>

        <div className="bg-gray-50 p-10 rounded-xl mb-12 shadow-lg">
          <h2 className="text-4xl font-bold text-black mb-8 text-center">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bootcampFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all border-t-4 border-green-500 group">
                  <Icon className="text-green-500 mb-4 group-hover:rotate-12 transition-transform" size={40} />
                  <h3 className="text-xl font-bold text-green-500 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-black to-gray-900 text-white p-10 rounded-xl mb-12 shadow-2xl">
          <h2 className="text-4xl font-bold mb-8">Program Details</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-green-500 mb-4 flex items-center gap-2">
                <Globe size={28} />
                Location
              </h3>
              <p className="text-gray-300 mb-2 flex items-center gap-2">
                <ChevronRight size={16} /> Online at Google Meet
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <ChevronRight size={16} /> Physical Classes at Kwata Junction, Awka
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-500 mb-4 flex items-center gap-2">
                <Award size={28} />
                Bonus
              </h3>
              <p className="text-gray-300 mb-2 flex items-center gap-2">
                <ChevronRight size={16} /> Learn Bootstrap framework
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <ChevronRight size={16} /> Build real-world projects
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => setActivePage('contact')}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-16 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105"
          >
            Enroll Now 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

// Testimonials Page
const TestimonialsPage = ({ setActivePage }) => {
  return (
    <div className="pt-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Student <span className="text-green-500">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-600">Hear from our successful graduates</p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-green-500 transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <StudentAvatar name={testimonial.name} className="w-16 h-16" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-green-600 font-medium">{testimonial.stack}</p>
                  <p className="text-xs text-gray-500">{testimonial.date}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 text-green-500 opacity-20" size={24} />
                <p className="text-gray-700 leading-relaxed italic pl-4">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-br from-black to-gray-900 text-white p-10 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-gray-300 mb-6 text-lg">Start your journey to becoming a professional developer today!</p>
          <button 
            onClick={() => setActivePage('contact')}
            className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-lg font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105"
          >
            Enroll in Bootcamp
          </button>
        </div>
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = () => (
  <div className="pt-16 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
          Get In <span className="text-green-500">Touch</span>
        </h1>
        <p className="text-xl text-gray-600">Let's build something amazing together</p>
        <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
      </div>

      <div className="bg-white p-10 rounded-xl shadow-2xl mb-8">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">Contact Information</h2>
        
        <div className="space-y-6">
          <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group">
            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <Phone className="text-white" size={28} />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-lg">Phone (WhatsApp)</p>
              <a href="tel:+2348147193166" className="text-gray-600 hover:text-green-500 transition-colors">+234 814 719 3166</a>
            </div>
          </div>

          <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group">
            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <Mail className="text-white" size={28} />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-lg">Email</p>
              <a href="mailto:Abelchiagozie1@Gmail.Com" className="text-gray-600 hover:text-green-500 transition-colors">abelchiagozie1@gmail.Com</a>
            </div>
          </div>

          <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group">
            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <Linkedin className="text-white" size={28} />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-lg">LinkedIn</p>
              <p className="text-gray-600">Abel Chukwuoma</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-black to-gray-900 text-white p-10 rounded-xl text-center shadow-2xl">
        <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
        <p className="text-gray-300 mb-8 text-lg">
          Whether you need a website or want to learn to build them yourself, we're here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/2348147193166" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-lg font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
          <a 
            href="mailto:abelchiagozie1@gmail.Com"
            className="border-2 border-green-500 text-green-500 px-10 py-4 rounded-lg font-bold hover:bg-green-500 hover:text-white transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Send Email
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Services Page
const ServicesPage = () => {
  const services = [
    'Investment websites',
    'E-commerce/Online stores',
    'Crypto trading websites',
    'Online Banking websites',
    'Wallet Connect Systems',
    'Shipping/Consignment sites',
    'Donation/Fundraising websites',
    'Portfolio websites',
    'Blog websites',
    'Church websites'
  ];

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Our <span className="text-green-500">Services</span>
          </h1>
          <p className="text-xl text-gray-600">Professional web solutions for every business need</p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-2xl hover:scale-105 transition-all group cursor-pointer"
            >
              <div className="flex items-start">
                <ChevronRight className="text-green-500 mt-1 mr-3 flex-shrink-0 group-hover:translate-x-1 transition-transform" size={24} />
                <p className="text-gray-800 font-semibold text-lg">{service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-black to-gray-900 text-white p-10 rounded-xl shadow-2xl">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Code className="text-green-500" size={40} />
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-green-500 mb-6 flex items-center gap-2">
                <Laptop size={28} />
                Frontend
              </h3>
              <ul className="space-y-3 text-gray-300">
                {['React.js', 'JavaScript & TypeScript', 'HTML5 & CSS3', 'Responsive Design', 'Tailwind CSS'].map((tech, i) => (
                  <li key={i} className="flex items-center gap-2 hover:text-green-400 transition-colors">
                    <ChevronRight size={16} className="text-green-500" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-500 mb-6 flex items-center gap-2">
                <Database size={28} />
                Backend
              </h3>
              <ul className="space-y-3 text-gray-300">
                {['Node.js & Express', 'Python', 'REST APIs', 'MongoDB & SQL', 'Git & Version Control'].map((tech, i) => (
                  <li key={i} className="flex items-center gap-2 hover:text-green-400 transition-colors">
                    <ChevronRight size={16} className="text-green-500" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = ({ setActivePage }) => (
  <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-12 border-t-2 border-green-500">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
            <Logo className="w-12 h-12" />
            <div>
              <p className="text-2xl font-bold">CHUKS<span className="text-green-500">DEV</span></p>
              <p className="text-xs text-gray-400 tracking-wider">SOLUTIONS</p>
            </div>
          </div>
          <p className="text-gray-400 italic">Building Websites & Building Futures</p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-green-500">Quick Links</h3>
          <div className="space-y-2 flex flex-col items-center md:items-start">
            <button onClick={() => setActivePage('about')} className="text-gray-400 hover:text-green-500 transition-colors cursor-pointer">About Us</button>
            <button onClick={() => setActivePage('services')} className="text-gray-400 hover:text-green-500 transition-colors cursor-pointer">Services</button>
            <button onClick={() => setActivePage('bootcamp')} className="text-gray-400 hover:text-green-500 transition-colors cursor-pointer">Bootcamp</button>
            <button onClick={() => setActivePage('testimonials')} className="text-gray-400 hover:text-green-500 transition-colors cursor-pointer">Testimonials</button>
            <button onClick={() => setActivePage('contact')} className="text-gray-400 hover:text-green-500 transition-colors cursor-pointer">Contact</button>
          </div>
        </div>

        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-4 text-green-500">Connect With Us</h3>
          <div className="flex gap-4 justify-center md:justify-end">
            <a 
              href="mailto:abelchiagozie1@gmail.com" 
              className="w-12 h-12 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:rotate-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://wa.me/2348147193166" 
              className="w-12 h-12 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:rotate-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
            </a>
            <a 
              href="https://instagram.com/abel_chukwuoma22" 
              className="w-12 h-12 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:rotate-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://github.com/chiagozie20" 
              className="w-12 h-12 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:rotate-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center">
        <p className="text-sm text-gray-500">
          © 2026 ChuksDev Solutions. All rights reserved. | Built with ❤️ and <span className="text-green-500">Code</span>
        </p>
      </div>
    </div>
  </footer>
);

// Main App Component
export default function ChuksDevSolutions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    let title = 'ChuksDev Solutions';
    switch (activePage) {
      case 'home':
        title += ' - Home';
        break;
      case 'about':
        title += ' - About';
        break;
      case 'services':
        title += ' - Services';
        break;
      case 'bootcamp':
        title += ' - Bootcamp';
        break;
      case 'testimonials':
        title += ' - Testimonials';
        break;
      case 'contact':
        title += ' - Contact';
        break;
      default:
        title += ' - Home';
    }
    document.title = title;
  }, [activePage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>

      <NavBar 
        activePage={activePage} 
        setActivePage={setActivePage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
      {activePage === 'about' && <AboutPage />}
      {activePage === 'services' && <ServicesPage />}
      {activePage === 'bootcamp' && <BootcampPage setActivePage={setActivePage} />}
      {activePage === 'testimonials' && <TestimonialsPage setActivePage={setActivePage} />}
      {activePage === 'contact' && <ContactPage />}

      <Footer setActivePage={setActivePage} />
    </div>
  );
};