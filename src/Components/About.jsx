import React from 'react'
import aboutimage from '../images/about.png';

function About() {
  return (
    <div>
        <div id='about'>
            <div className="about-image">
                <img src={aboutimage} alt="" />
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid amet beatae blanditiis eum incidunt tempore corporis! Ipsam sint enim quod!</p>
                <button>READ MORE</button>
            </div>
        </div>
    </div>
  )
}

export default About