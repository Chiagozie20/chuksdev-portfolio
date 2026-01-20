import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Code,
  Users,
  Briefcase,
  Award,
  Mail,
  Phone,
  Linkedin,
  ChevronRight,
  Instagram,
  Github,
  MessageCircle,
  Sparkles,
  Terminal,
  Laptop,
  Zap,
  Database,
  Globe,
} from "lucide-react";
import logo from "./ChuksdevLogo.jpg";

// Logo Component
const Logo = ({ className = "w-12 h-12" }) => (
  <img
    src={logo}
    alt="ChuksDev Logo"
    className={`${className} rounded-full object-cover`}
  />
);

// Animated Background Component
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-64 h-64 bg-green-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
    <div
      className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 opacity-10 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: "1s" }}
    ></div>
    <div
      className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-300 opacity-5 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: "2s" }}
    ></div>
  </div>
);

// Floating Code Snippet Component
const FloatingCode = () => {
  const codeSnippets = [
    '{ code: "React" }',
    "function build() { }",
    "const dev = true;",
    "npm run create",
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
            animationDuration: `${3 + i}s`,
          }}
        >
          {code}
        </div>
      ))}
    </div>
  );
};

// Navigation Bar
const NavBar = ({ activePage, setActivePage, isMenuOpen, setIsMenuOpen }) => (
  <nav className="bg-black/95 backdrop-blur-md border-b-2 border-green-500 fixed w-full top-0 z-50 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setActivePage("home")}
        >
          <Logo className="w-10 h-10" />
          <div>
            <span className="text-xl font-bold text-white">
              CHUKS<span className="text-green-500">DEV</span>
            </span>
            <span className="block text-xs text-gray-400 tracking-wider">
              SOLUTIONS
            </span>
          </div>
        </div>

        <div className="hidden md:flex space-x-8">
          {["home", "about", "services", "bootcamp", "contact"].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`${activePage === page ? "text-green-500" : "text-white"} hover:text-green-500 transition-all uppercase text-sm font-semibold relative group`}
            >
              {page}
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 transform origin-left transition-transform ${activePage === page ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              ></span>
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white hover:text-green-500 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

    {isMenuOpen && (
      <div className="md:hidden bg-gray-900 border-t border-gray-800 animate-slideDown">
        {["home", "about", "services", "bootcamp", "contact"].map((page) => (
          <button
            key={page}
            onClick={() => {
              setActivePage(page);
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-3 text-white hover:bg-green-500 hover:text-black transition-all uppercase text-sm font-semibold"
          >
            {page}
          </button>
        ))}
      </div>
    )}
  </nav>
);

// Home Page
const HomePage = ({ setActivePage }) => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building Websites & Building Futures";

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
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 tracking-wide">
              SOLUTIONS
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8 animate-pulse"></div>

            <p className="text-2xl md:text-3xl text-white mb-12 max-w-4xl mx-auto h-16 font-light">
              {typedText}
              <span className="animate-blink">|</span>
            </p>

            {/* Tech Icons */}
            <div className="flex justify-center gap-8 mb-12 flex-wrap">
              {[Terminal, Code, Database, Globe, Zap, Laptop].map((Icon, i) => (
                <div key={i} className="group cursor-pointer">
                  <Icon
                    className="text-green-500 group-hover:text-green-400 transform group-hover:scale-125 transition-all"
                    size={32}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => setActivePage("services")}
                className="bg-gradient-to-r from-green-500 to-green-600 text-black px-10 py-4 rounded-lg font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
              >
                <Briefcase
                  className="group-hover:rotate-12 transition-transform"
                  size={20}
                />
                View Services
              </button>
              <button
                onClick={() => setActivePage("bootcamp")}
                className="border-2 border-green-500 text-green-500 px-10 py-4 rounded-lg font-bold hover:bg-green-500 hover:text-black transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
              >
                <Users
                  className="group-hover:rotate-12 transition-transform"
                  size={20}
                />
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
              { num: "50+", label: "Projects Delivered" },
              { num: "100+", label: "Students Trained" },
              { num: "3+", label: "Years Experience" },
              { num: "98%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group hover:transform hover:scale-110 transition-all"
              >
                <div className="text-5xl font-bold text-green-500 mb-2 group-hover:text-green-400">
                  {stat.num}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            What We <span className="text-green-500">Offer</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Empowering businesses and individuals through technology
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-black to-gray-900 p-8 rounded-xl border-2 border-green-500 transform hover:scale-105 transition-all hover:shadow-2xl hover:shadow-green-500/30 group">
              <Briefcase
                className="text-green-500 mb-4 group-hover:rotate-12 transition-transform"
                size={56}
              />
              <h3 className="text-3xl font-bold text-white mb-4">
                Web Development
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Custom websites and web applications built with modern
                technologies. From e-commerce platforms to sleek portfolios, we
                transform your digital vision into reality.
              </p>
              <button
                onClick={() => setActivePage("services")}
                className="text-green-500 font-semibold flex items-center hover:underline group-hover:gap-3 gap-2 transition-all"
              >
                Learn More <ChevronRight size={20} />
              </button>
            </div>

            <div className="bg-gradient-to-br from-black to-gray-900 p-8 rounded-xl border-2 border-green-500 transform hover:scale-105 transition-all hover:shadow-2xl hover:shadow-green-500/30 group">
              <Users
                className="text-green-500 mb-4 group-hover:rotate-12 transition-transform"
                size={56}
              />
              <h3 className="text-3xl font-bold text-white mb-4">
                Bootcamp Training
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Master full-stack development from the ground up. Learn React,
                Node.js, Python, and build production-ready applications in an
                intensive, hands-on program.
              </p>
              <button
                onClick={() => setActivePage("bootcamp")}
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
          At ChuksDev Solutions, we're not just building websites—we're building
          futures. We exist at the intersection of innovation and education,
          empowering the next generation of digital creators while delivering
          exceptional web solutions to brands ready to make their mark online.
        </p>

        <h2 className="text-4xl font-bold text-black mt-16 mb-8">What We Do</h2>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl mb-8 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <Users className="text-green-500 flex-shrink-0" size={32} />
            <h3 className="text-2xl font-bold text-green-500">
              For Aspiring Developers
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our intensive bootcamp program is designed for young people who are
            ready to transform their curiosity into capability. We don't just
            teach code; we cultivate problem-solvers, critical thinkers, and
            confident developers who are equipped to thrive in the digital
            economy. Whether you're taking your first steps into tech or looking
            to level up your skills, ChuksDev provides the mentorship, hands-on
            experience, and supportive community you need to succeed.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl mb-8 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <Briefcase className="text-green-500 flex-shrink-0" size={32} />
            <h3 className="text-2xl font-bold text-green-500">
              For Growing Brands
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We craft custom websites that don't just look good—they work hard
            for your business. From sleek landing pages to robust web
            applications, we build digital experiences that convert visitors
            into customers and help your brand stand out in a crowded
            marketplace. Every project is approached with creativity, precision,
            and a deep understanding of what makes businesses grow online.
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
              We believe that technology should be accessible, education should
              be transformative, and every brand deserves a powerful online
              presence. At ChuksDev Solutions, we're committed to bridging the
              digital divide—one student and one website at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Services Page
const ServicesPage = () => {
  const services = [
    "Investment websites",
    "E-commerce/Online stores",
    "Crypto trading websites",
    "Online Banking websites",
    "Wallet Connect Systems",
    "Shipping/Consignment sites",
    "Donation/Fundraising websites",
    "Portfolio websites",
    "Blog websites",
    "Church websites",
  ];

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Our <span className="text-green-500">Services</span>
          </h1>
          <p className="text-xl text-gray-600">
            Professional web solutions for every business need
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-2xl hover:scale-105 transition-all group cursor-pointer"
            >
              <div className="flex items-start">
                <ChevronRight
                  className="text-green-500 mt-1 mr-3 flex-shrink-0 group-hover:translate-x-1 transition-transform"
                  size={24}
                />
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
                {[
                  "React.js",
                  "JavaScript & TypeScript",
                  "HTML5 & CSS3",
                  "Responsive Design",
                  "Tailwind CSS",
                ].map((tech, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 hover:text-green-400 transition-colors"
                  >
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
                {[
                  "Node.js & Express",
                  "Python",
                  "REST APIs",
                  "MongoDB & SQL",
                  "Git & Version Control",
                ].map((tech, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 hover:text-green-400 transition-colors"
                  >
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

// Bootcamp Page
const BootcampPage = ({ setActivePage }) => {
  const bootcampFeatures = [
    {
      title: "Front-End Development",
      desc: "HTML, CSS, JavaScript, and React - design responsive, interactive user interfaces.",
      icon: Laptop,
    },
    {
      title: "Back-End Development",
      desc: "Node.js, Express, Python, and REST APIs - build powerful server-side logic.",
      icon: Database,
    },
    {
      title: "Databases",
      desc: "Store, manage, and retrieve data with confidence using modern database systems.",
      icon: Database,
    },
    {
      title: "Developer Tools",
      desc: "Git & GitHub for version control, VS Code for coding, and real-world debugging tools.",
      icon: Terminal,
    },
    {
      title: "Deployment & Hosting",
      desc: "Take your apps live with Vercel, Netlify, Heroku, and more.",
      icon: Globe,
    },
    {
      title: "Capstone Projects",
      desc: "Create full-stack apps like blogs, e-commerce sites, or dashboards, perfect for your portfolio.",
      icon: Award,
    },
  ];

  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Full-Stack Development{" "}
            <span className="text-green-500">Bootcamp</span>
          </h1>
          <p className="text-3xl text-gray-600 italic mb-6">
            Code, Repeat, Master!
          </p>
          <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            🎉 No Laptop? No Problem
          </div>
        </div>

        <div className="bg-gray-50 p-10 rounded-xl mb-12 shadow-lg">
          <h2 className="text-4xl font-bold text-black mb-8 text-center">
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bootcampFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all border-t-4 border-green-500 group"
                >
                  <Icon
                    className="text-green-500 mb-4 group-hover:rotate-12 transition-transform"
                    size={40}
                  />
                  <h3 className="text-xl font-bold text-green-500 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.desc}
                  </p>
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
                <ChevronRight size={16} /> Online via Google Meet
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <ChevronRight size={16} /> Physical Classes at Kwata Junction,
                Awka
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
            onClick={() => setActivePage("contact")}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-16 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105"
          >
            Enroll Now 🚀
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
        <p className="text-xl text-gray-600">
          Let's build something amazing together
        </p>
        <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
      </div>

      <div className="bg-white p-10 rounded-xl shadow-2xl mb-8">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          Contact Information
        </h2>

        <div className="space-y-6">
          <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group">
            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <Phone className="text-white" size={28} />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-lg">
                Phone (WhatsApp)
              </p>
              <a
                href="tel:+2348147193166"
                className="text-gray-600 hover:text-green-500 transition-colors"
              >
                +234 814 719 3166
              </a>
            </div>
          </div>

          <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group">
            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <Mail className="text-white" size={28} />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-lg">Email</p>
              <a
                href="mailto:Abelchiagozie1@Gmail.Com"
                className="text-gray-600 hover:text-green-500 transition-colors"
              >
                Abelchiagozie1@Gmail.Com
              </a>
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
        <h3 className="text-3xl font-bold mb-4">
          Ready to Start Your Journey?
        </h3>
        <p className="text-gray-300 mb-8 text-lg">
          Whether you need a website or want to learn to build them yourself,
          we're here to help.
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
            href="mailto:Abelchiagozie1@Gmail.Com"
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

// Footer Component
const Footer = () => (
  <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-12 border-t-2 border-green-500">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
            <Logo className="w-12 h-12" />
            <div>
              <p className="text-2xl font-bold">
                CHUKS<span className="text-green-500">DEV</span>
              </p>
              <p className="text-xs text-gray-400 tracking-wider">SOLUTIONS</p>
            </div>
          </div>
          <p className="text-gray-400 italic">
            Building Websites & Building Futures
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4 text-green-500">
            Quick Links
          </h3>
          <div className="space-y-2">
            <p className="text-gray-400 hover:text-green-500 transition-colors cursor-pointer">
              About Us
            </p>
            <p className="text-gray-400 hover:text-green-500 transition-colors cursor-pointer">
              Services
            </p>
            <p className="text-gray-400 hover:text-green-500 transition-colors cursor-pointer">
              Bootcamp
            </p>
            <p className="text-gray-400 hover:text-green-500 transition-colors cursor-pointer">
              Contact
            </p>
          </div>
        </div>

        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-4 text-green-500">
            Connect With Us
          </h3>
          <div className="flex gap-4 justify-center md:justify-end">
            <a
              href="mailto:Abelchiagozie1@Gmail.Com"
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
              href="https://instagram.com/chuksdev_solutions"
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
          © 2026 ChuksDev Solutions. All rights reserved. | Built with ❤️ and{" "}
          <span className="text-green-500">Code</span>
        </p>
      </div>
    </div>
  </footer>
);

// Main App Component
export default function ChuksDevSolutions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  // fix scroll issue
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

      {activePage === "home" && <HomePage setActivePage={setActivePage} />}
      {activePage === "about" && <AboutPage />}
      {activePage === "services" && <ServicesPage />}
      {activePage === "bootcamp" && (
        <BootcampPage setActivePage={setActivePage} />
      )}
      {activePage === "contact" && <ContactPage />}

      <Footer />
    </div>
  );
}
