import React from "react";
import './Navbar.css';

const Navbar = () => {

    return (
    <div className="navbar bg-[#080707] p-6 grid grid-cols-2 gap-16 md:gap-96">
        <div className="md:w-6/12 md:float-left md:ml-20 md:mt-7">
            <a href="/"><p class="name md:text-3xl">THARUN M</p></a>
        </div>
        <div className="md:w-6/12 md:float-right md:ml-40 md:mt-7">
            <a href="https://drive.google.com/file/d/19nWGUQx7C4g8acR9qZyXKimNEbaxwuLk/view?usp=sharing" target="_blank" rel="noreferrer"><p className="resume md:text-3xl">MY RESUME</p></a>
        </div>
    </div>
    );
}

export default Navbar;