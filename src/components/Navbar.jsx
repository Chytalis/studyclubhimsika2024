import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  
    return (
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-[#000000] bg-[#CDC1FF] z-50">
        {/* Logo Section */}
        <div className="flex items-center"><a href='Hero'>
          <img
            src="https://pbs.twimg.com/media/EWS3Wo3U8AE2LJt.jpg" 
            alt="Logo"
            className="rounded-2xl h-10 w-auto " 
          />

        </a>
          
          <h1 className="ml-3 text-xl font-bold text-[#FFF6E3]"><a href='Hero'>BIT</a></h1>
        </div>
  
        {/* Menu */}
        <ul className="hidden md:flex text-lg text-[#FFF6E3]">
          <li>
            <Link to="hero" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="card" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="carousel" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
  
        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 text-white">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
  
        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'py-6 text-4xl absolute top-0 left-0 w-full h-screen bg-[#CDC1FF] flex flex-col justify-center items-center'
          }
        >
          <li>
            <Link to="hero" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="card" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="carousel" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Navbar;
  