import React from "react";
import './about.css';

const About = () => {
    return (
        <div id="about-container" class="container items-center px-5 py-10 md:py-0 md:px-0">
            <div class="heading text-6xl md:text-7xl mb-10 text-[#c72020] font-bold items-center md:ml-20 text-center">
                <span class="text-center">ABOUT <span className='text-white'>M</span>E</span>
            </div>
            <div class="content mt-5 md:text-justify justify-center items-center md:ml-16 md:mt-16 md:mb-10">
                <p id="about-content" className="md:text-center text-xl tracking-tighter md:leading-loose md:tracking-wide text-justify">I am a dynamic and ambitious final-year computer science and engineering student, determined to make a significant impact in the field of technology. My passion for technology is fueled by my drive to solve complex problems and create innovative solutions that improve the world around us. My coursework has provided me with a strong foundation in programming, data structures, and algorithms, and I am always looking for opportunities to apply my skills and gain hands-on experience in the field.
                I am a natural leader and excel at working collaboratively in cross-functional teams. I have a proven track record of delivering outstanding results and am always looking for opportunities to take on new challenges and responsibilities. My strong analytical and problem-solving skills, combined with my ability to think creatively and outside of the box, make me an invaluable asset to any organization.
                If you're looking for a driven, passionate, and dedicated computer science and engineering student who will go above and beyond to achieve success, look no further. Let's connect and discuss how I can contribute to your organization's growth.</p>
            </div>
        </div>
    )
}

export default About;