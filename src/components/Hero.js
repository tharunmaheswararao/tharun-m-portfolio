import React from "react";
import './Hero.css';
import heroimg from './hero.png';

const Hero = () => {
    return (
        <div className="hero items-center">
            <p id="hero-line" className="text-center items-center text-white mb-10 text-2xl border-none md:float-left md:mt-20 md:ml-24 md:text-left md:text-xl">I am <p id="name" className="text-6xl font-extrabold text-[#c72020] border-none -mb-10 -mt-4 md:-ml-2">THARUN M</p><br />and I gathered my passion towards Computer Science</p>
            <div id="img-hero" class="w-full mt-10 md:w-96 md:ml-auto md:mr-10 md:float-right md:mt-14">
                <img src={heroimg} alt="hero-img"></img>
            </div>
            <div className="grid grid-cols-4 float-left ml-24 -mt-10 gap-2 pl-3">
                <div>
                    <a href="#about-container" id="about-me" className="hidden md:block "><p>ABOUT ME</p></a>
                </div>
                <div>
                    <a href="#gallery" id="stack" className="hidden md:block"><p>STACK</p></a>
                </div>
                <div>
                    <a href="#my-achievements" id="achievements" className="hidden md:block"><p>ACHIEVEMENTS</p></a>
                </div>
                <div>
                <a href="#my-contact" id="contact-me" className="hidden md:block"><p>CONTACT ME</p></a>
                </div>
            </div>
            <div id="motto" class="float-left mt-6 mb-16 ml-24 items-center text-center grid grid-cols-1 gap-4 md:pt-0 md:mt-24 md:ml-52 md:grid-cols-4 md:gap-x-10 md:text-center md:mb-32 ">
                <div>
                    <span class="text-5xl text-white text-center">eat<span class="text-[#c72020]">()</span>;</span>
                </div>
                <div>
                    <span class="text-5xl text-white text-center">sleep<span class="text-[#c72020]">()</span>;</span>
                </div>
                <div>
                    <span class="text-5xl text-white text-center">code<span class="text-[#c72020]">()</span>;</span>
                </div> 
                <div>
                    <span class="text-5xl text-white text-center">repeat<span class="text-[#c72020]">()</span>;</span>
                </div>
            </div>
        </div>
    );
}

export default Hero;