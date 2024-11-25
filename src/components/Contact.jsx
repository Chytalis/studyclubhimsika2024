import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { Link } from 'react-scroll';

const Contact = () => {
  return (
    <div name="contact" className="py-10 flex flex-col items-center mb-0 bg-gradient-to-t from-blue-200  ">
      
      <h1 className="text-5xl font-bold text-[#FFF6E3] text-center mb-8">Contact</h1>

      {/* Contact Items */}
      <div className="space-y-6">
        {/* LinkedIn */}
        <div className="flex items-center space-x-4 group">
          <div className="bg-black text-white p-3 rounded-full">
            <FaLinkedin className="text-8xl" />
          </div>
          <span className="text-lg font-semibold text-black">Bibit Aryo Utomo</span>
          <a
            href="https://id.linkedin.com/in/bibit-aryo-utomo-34a539333"
            className="text-teal-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-600"
          >
            https://id.linkedin.com/in/bibit-aryoutomo
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-4 group">
            <a href="mailto:aryobibit.1760@gmail.com">
             <div className="bg-black text-white p-3 rounded-full">
            <FaEnvelope className="text-8xl" />
          </div>    
            </a>
         
          <span className="text-lg font-semibold text-black"> Bibit Aryo</span>
          <a
            href="mailto:aryobibit.1760@gmail.com"
            className="text-teal-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-600"
          >
            aryobibit.1760@gmail.com
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center space-x-4 group">
            <a href="https://github.com/Chytalis">
          <div className="bg-black text-white p-3 rounded-full">
            <FaGithub className="text-8xl" />
          </div>  
            </a>
          <span className="text-lg font-semibold text-black">Chytalis</span>
          <a
            href="https://github.com/Chytalis"
            className="text-teal-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-600"
          >
            https://github.com/Chytalis
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
