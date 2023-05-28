import React from "react";
import fire from './fire.png'
import './Fire.css';

const Fire = () => {
    return (
        <div class="fire-btn flex justify-center items-center">
            <a class="fire justify-center items-center flex" href="/"><img  src={fire} alt="fire" /></a>
        </div>
    )
}

export default Fire;