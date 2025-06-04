import { FaGithub, FaLinkedin, FaRegAddressCard } from "react-icons/fa";
import "../index.css";

const SocialBar = () => {
return (
    <div className="social-bar">
        <a href="https://github.com/DiegoLinares11" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/diego-jos%C3%A9-linares-mart%C3%ADnez-90643720a/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
        </a>
        <a href="/CVDiegoLinares.pdf" target="_blank" rel="noopener noreferrer" title="Ver CV">
            <FaRegAddressCard />
        </a>
    </div>
);
};

export default SocialBar;
