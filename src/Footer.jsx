import React from 'react'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    

<footer class="bg-[#CDC1FF] ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://pbs.twimg.com/media/EWS3Wo3U8AE2LJt.jpg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BIBIT</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0 dark:text-black-400">
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
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-900 lg:my-8" />
        <span class="block text-sm  text-gray-900 sm:text-center dark:text-gray-800">© 2024 <a href="Hero" class="hover:underline">BITBIT™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer