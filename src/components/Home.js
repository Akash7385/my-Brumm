import React from 'react';
import { IoIosStarOutline } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import About from './About';
import Contact from './Contact';
import './Home.css';
import Login from './Login';
import Services from './Services';

const Home = () => {
  return (
    <>
   <section className="hero-section">
         <div className='image'>
          <img src='https://i.pinimg.com/originals/25/1c/38/251c38d4427f8624184005ab91dc06d4.png' />
         </div>
         <div className='home-content'>
        <div className='home-text'>
          <h2>Book Your Ride !
          </h2>
         <h1>Now</h1>
        </div>
        {/* button */}

        <div className='button'>
        <button class="button">Click Me</button>
        </div>
        </div>
        <About/>
      <Contact/>
      <Services/>
      <Login/>
      <div className='review'>
        <h4>Customer Reviews</h4>
            <h3 className='name'>Leonardo Dicapri</h3>
            <p >lorem ipsum sit hoz pit kab set </p>
            <IoStarSharp className='star'/><IoStarSharp className='star'/><IoStarSharp className='star'/><IoStarSharp className='star'/>
            <IoIosStarOutline />
      </div>
      </section>
    </>
  )
}

export default Home