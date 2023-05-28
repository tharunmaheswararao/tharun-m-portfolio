import './Skills.css';
import html5 from '../assets/html5.png'
import css3 from '../assets/css3.png'
import js from '../assets/javascript.png'
import python from '../assets/python.png'
import jquery from '../assets/jquery.png'
import nodejs from '../assets/nodejs.png'
import express from '../assets/Expressjs.png'
import tailwind from '../assets/tailwindcss.png'
import bootstrap from '../assets/bootstrap.png'
import c from '../assets/C.png'
import java from '../assets/java.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import mysql from '../assets/mysql.png'
import react from '../assets/logo512.png'
import angular from '../assets/angular.png'
import ts from '../assets/typescript.png'
import linux from '../assets/linux.png'

const Skills = () => {
    return (
        <div id="gallery" className="flex flex-col text-white items-center px-5 py-10 ">
            <div class="main text-6xl text-center md:text-7xl mb-10 text-[#c72020] font-bold">
                <span class="socod text-left">I'm co<span className='text-white'>M</span>fortable with...</span>
            </div>

            <div class="flex flex-col lg:flex-row lg:px-20 mt-6">
                <div class="flex flex-col mb-0 basis-1/3">
                    <img
                        src={html5}
                        class="w-100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700 object-cover"
                        alt="html5-skill"
                    />
            
                    <img
                        src={jquery}
                        className="w-100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700 object-cover"
                        alt="jQuery-skill"
                    />

                    <img
                        src={angular}
                        className="w-100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700 object-cover"
                        alt="Express.js-skill"
                    />
                </div>

                <div class="flex flex-col mb-0 basis-1/3">
                    <img
                        src={c}
                        className="w-100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700 object-cover"
                        alt="C-skill"
                    />

                    <img
                        src={express}
                        className="w-100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700 object-cover"
                        alt="Github-skill"
                    />

                    <img
                        src={github}
                        className="w-100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700 object-cover"
                        alt="Angular-skill"
                    />
                </div>

                <div className="flex flex-col lg:mx-3 mb-0 basis-1/3">
                    <img
                        src={js}
                        class="w-100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700 object-cover"
                        alt="JavaScript-skill"
                    /> 

                    <img
                        src={python}
                        className="w-100 shadow-lg  rounded-xl mb-4 hover:scale-110 duration-700"
                        alt="Python-skill"
                    />

                    <img
                        src={tailwind}
                        className="w-100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700 object-cover"
                        alt="tailwindcss-skill"
                    />
                </div>

                <div class="flex flex-col mb-0 basis-1/3">
                    <img
                        src={java}
                        className="w-100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700 object-cover"
                        alt="Java-skill"
                    />

                    <img
                        src={mysql}
                        className="w-100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700 object-cover"
                        alt="MySql-skill"
                    />

                    <img
                        src={ts}
                        className="100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700 object-cover"
                        alt="TypeScript-skill"
                    />
                </div>

                <div className="flex flex-col mb-0 basis-1/3">
                    <img
                        src={css3}
                        className="w-100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700"
                        alt="CSS3-skill"
                    />

                    <img
                        src={nodejs}
                        className="w-100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700"
                        alt="Node.js-skill"
                    /> 

                    <img
                        src={bootstrap}
                        className="w-100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700 object-cover"
                        alt="Bootstrap-skill"
                    />
                </div>

                <div class="flex flex-col mb-0 basis-1/3">
                    <img
                        src={git}
                        className="w-100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700 object-cover"
                        alt="Git-skill"
                    />

                    <img
                        src={react}
                        className="w-100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700 object-cover"
                        alt="React-skill"
                    />

                    <img
                        src={linux}
                        className="w-100 shadow-lg rounded-xl mb-4 hover:scale-110 duration-700 object-cover"
                        alt="Linux-skill"
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills;