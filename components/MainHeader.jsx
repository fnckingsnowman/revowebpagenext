import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBook, FaInstagram } from 'react-icons/fa'; // Import some icons

const MainHeader = () => {
  return (
    <nav className="fixed top-0 z-10 w-full flex items-start h-24 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-lg backdrop-brightness-75 group">
      <a href="https://tongtonginc.com/" className="p-6 text-4xl font-bold font-prof-bens tan-color">Tongtong.inc</a>

      {/* Icons Section */}
      <div className="py-6 ml-8 flex space-x-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-500 ease-in-out">
        {/* Github Icon */}
        <div className="relative">
          <a
            href="https://github.com/tongtongwang86/Revolute"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-400 transition-colors group"
          >
            <FaGithub />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-1 text-xs text-white bg-transparent rounded px-2 opacity-0 transition-opacity duration-200 hover:opacity-100">
            Github
          </span>
        </div>

        {/* LinkedIn Icon */}
        <div className="relative">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-400 transition-colors group"
          >
            <FaLinkedin />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-1 text-xs text-white bg-transparent rounded px-2 opacity-0 transition-opacity duration-200 hover:opacity-100">
            LinkedIn
          </span>
        </div>

        {/* Email Icon */}
        <div className="relative">
          <a
            href="mailto:tongtong@tongtonginc.com"
            className="text-white text-3xl hover:text-gray-400 transition-colors group"
          >
            <FaEnvelope />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-1 text-xs text-white bg-transparent rounded px-2 opacity-0 transition-opacity duration-200 hover:opacity-100">
            Email
          </span>
        </div>

        {/* Documentation Icon */}
        <div className="relative">
          <a
            href="https://documentation.tongtonginc.com"
            className="text-white text-3xl hover:text-gray-400 transition-colors group"
          >
            <FaBook />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-1 text-xs text-white bg-transparent rounded px-2 opacity-0 transition-opacity duration-200 hover:opacity-100">
            Documentations
          </span>
        </div>

        {/* Instagram Icon */}
        <div className="relative">
          <a
            href="/"
            className="text-white text-3xl hover:text-gray-400 transition-colors group"
          >
            <FaInstagram />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-1 text-xs text-white bg-transparent rounded px-2 opacity-0 transition-opacity duration-200 hover:opacity-100">
            Instagram
          </span>
        </div>
      </div>
    </nav>
  );
}

export default MainHeader;
