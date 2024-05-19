import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaAffiliatetheme } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
        <div className="w-full h-full text-white bg-black py-2 px-8 flex justify-between">

        <div className="text-2xl flex gap-4">
        <a target="_blank" href="https://www.linkedin.com/in/sarfaraz-hussai9"><FaLinkedin/></a>
        <a target="_blank" href="https://github.com/sarfaraz-hussain9"> <FaGithub /></a>
        <a target="_blank" href="https://instagram.com/sarfaraz_hussai9"><FaInstagram/></a>

        </div>
        
        <div className="text-2xl">
            <a href="#hero"><FaAffiliatetheme/></a>
        </div>

        </div>
    </>
  )
}

export default Footer