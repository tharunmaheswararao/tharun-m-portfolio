import React from "react";
import './about.css';

const About = () => {
    return (
        <div id="about-container" class="container items-center px-5 py-10 md:py-0 md:px-0">
            <div class="heading text-6xl md:text-7xl mb-10 text-[#c72020] font-bold items-center md:ml-20 text-center">
                <span class="text-center">ABOUT <span className='text-white'>M</span>E</span>
            </div>
            <div class="content mt-5 md:text-justify justify-center items-center md:ml-16 md:mt-16 md:mb-10">
                <p id="about-content" className="md:text-center text-xl tracking-tighter md:leading-loose md:tracking-wide text-justify">
                Motivated software engineer currently pursuing an MS in Software Engineering Systems at Northeastern University. With a strong
                foundation in full-stack development, I am passionate about leveraging my technical skills to build scalable, efficient 
                solutions. I hold a Bachelor's degree in Computer Science Engineering from Rajalakshmi Engineering College, where I honed my
                skills in software development, web technologies, and frameworks. My experience spans both front-end and back-end development,
                enabling me to contribute across the entire Software Development Life Cycle (SDLC). I am excited to collaborate with 
                forward-thinking teams and contribute to impactful software engineering projects.
                </p>
            </div>
        </div>
    )
}

export default About;