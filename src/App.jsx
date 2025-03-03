import { BrowserRouter } from "react-router-dom";
import { FlickeringGrid } from "./magicui/flickering-grid";
import React, { useState, useEffect } from 'react';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.windowHeight);
  };

  window.addEventListener('resize', handleResize);
  
  // Cleanup
  return () => window.removeEventListener('resize', handleResize);
}, []);
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-cover bg-no-repeat bg-center'>


      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={8}
        gridGap={20}
        color="#6B7280"
        maxOpacity={0.3}
        flickerChance={0.1}
       
      />
   
          <Navbar />
          <Hero />
          {/*<StarsCanvas />*/}
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/*<Feedbacks />*/}
        <div className='relative z-0'>
          <Contact />
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
