import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaAffiliatetheme } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full text-white bg-gray-700 py-4 px-8 flex justify-between items-center">
      {/* Social Media Links */}
      <div className="text-2xl flex gap-6">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sarfaraz-hussai9"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          href="https://github.com/sarfaraz-hussain9"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-500 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          href="https://instagram.com/sarfaraz_hussai9"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition-colors duration-300"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Back to Top Logo */}
      <div className="text-2xl">
        <a
          href="#hero"
          aria-label="Back to Top"
          className="hover:text-blue-500 transition-transform transform hover:scale-110 duration-300"
        >
          <FaAffiliatetheme />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
