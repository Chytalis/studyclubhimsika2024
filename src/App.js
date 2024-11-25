import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './Footer';
import Carousel from './components/Carousel';
import Cards from './components/Cards';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <Cards/>
      <Carousel/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App