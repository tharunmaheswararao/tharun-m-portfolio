import './Contact.css';
import { FaGithub, FaHackerrank, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsFillEnvelopeAtFill } from "react-icons/bs";

const Contact = () => {
    
    return (
        <div id="my-contact" className="flex flex-col items-center px-5 py-10">
            <div class="main text-6xl md:text-7xl mb-10">
                <span class="socod text-left text-[#c72020] font-bold">CONTACT <span className='text-white'>M</span>E</span>   
            </div>
            <div className="flex flex-row gap-4 text-4xl md:text-5xl mb-10 hover:text-white">
                <div className='text-white'>
                    <a href='mailto: tharun.m1807@gmail.com' target="_blank" rel="noreferrer"><BsFillEnvelopeAtFill className='hover:bg-[#080707]' /></a>
                </div>
                <div className='text-white'>
                    <a href='https://www.linkedin.com/in/tharun-maheswararao-3394a7223/' target="_blank" rel="noreferrer"><FaLinkedin className='hover:bg-[#080707]' /></a>
                </div>
                <div className='text-white'>
                    <a href='https://github.com/tharunmaheswararao' target="_blank" rel="noreferrer"><FaGithub className='hover:bg-[#080707]' /></a>
                </div>
                <div className='text-white'>
                    <a href='https://www.instagram.com/_tharun.m_/' target="_blank" rel="noreferrer"><FaInstagram className='hover:bg-[#080707]' /></a>
                </div>
                <div className='text-white'>
                    <a href='https://www.hackerrank.com/tharunsamael?hr_r=1' target="_blank" rel="noreferrer"><FaHackerrank className='hover:bg-[#080707]' /></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;