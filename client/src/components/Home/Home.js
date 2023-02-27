import React from 'react';
import rioVideo from '../Home/rio.mp4'
import '../Home/Home.css'
import Header from '../Header/Header';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';

const Home = () => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

    return(

        <div>
        
        <div className="Home"> 
        <Header/>
        <div className="overlay"></div>

        <video src={rioVideo} autoPlay loop muted />
        <div className="content">
            <h1> BEM VINDO!</h1>
            <p>Aqui tem rolé para todos os bolsos</p>
        </div>
        <Section/>
        <Footer />

        <div className="custom-cursor" style={{ left: mousePosition.x, top: mousePosition.y }} />
        </div>
        </div>

    )
};

export default Home;