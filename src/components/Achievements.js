import udemy from '../assets/udemy.png';
import nptel from '../assets/nptel.png';
import './Achievements.css';

const Achievements = () => {
    
    return (
        <div id="my-achievements" className="flex flex-col text-white items-center px-5 py-10 ">
            <div class="main text-4xl md:text-7xl mb-10 text-[#c72020] font-bold">
                <span class="socod text-left">ACHIEVE<span className='text-white'>M</span>ENTS</span>
            </div>
            <div class="grid md:grid-cols-4 gap-4 grid-cols-1 ">
                <div class="bord w-72 h-72 bg-[#ffffff20] bg-opacity-10 backdrop-blur-sm rounded-3xl drop-shadow-lg shadow-lg md:hover:-translate-y-10 md:hover:shadow-[#f89999] duration-300">
                    <img class="w-50 h-40 p-10 ml-20" src={udemy} alt="udemy" />
                    <span class="text-lg font-medium">The Complete JavaScript Course: From Zero to Expert!<br/><br/>Nov 2022</span>
                </div>
                <div class="bord w-72 h-72 bg-[#ffffff20] bg-opacity-10 backdrop-blur-sm rounded-3xl drop-shadow-lg shadow-lg md:hover:-translate-y-10 md:hover:shadow-[#f89999] duration-300 ">
                    <img class="w-50 h-40 p-10 ml-20" src={udemy} alt="udemy" />
                    <span class="text-lg font-medium">The Complete Python Bootcamp<br/><br/>Nov 2022</span>
                </div>
                <div class="bord w-72 h-72 bg-[#ffffff20] bg-opacity-10 backdrop-blur-sm rounded-3xl drop-shadow-lg shadow-lg md:hover:-translate-y-10 md:hover:shadow-[#f89999] duration-300">
                    <img class="w-100 p-10 mt-5" src={nptel} alt="NPTEL" /><br />
                    <span class="text-lg font-medium">Social Networks<br/><br/><br/>Nov 2022</span>
                </div>
                <div class="bord w-72 h-72 bg-[#ffffff20] bg-opacity-10 backdrop-blur-sm rounded-3xl drop-shadow-lg shadow-lg md:hover:-translate-y-10 md:hover:shadow-[#f89999] duration-300">
                    <img class="w-100 p-10 mt-5" src={nptel} alt="NPTEL" /><br/>
                    <span class="text-lg font-medium text-justify">Data Analytics with Python<br/><br/><br/>May 2023</span>
                </div>
            </div>
            
        </div>
    )

}

export default Achievements;