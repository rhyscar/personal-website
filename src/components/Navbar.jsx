import { useState } from "react";
import { useInView } from "react-intersection-observer";
import TextScramble from "./TextScramble";
import FadeUpOnScroll from "./FadeUpOnScroll";

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.5 });

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleMenuClick = (scrollRef) => {
        props.scrollToSection(scrollRef);
        setIsOpen(false);
    };

    return (
        <>
            <nav ref={ref} className="relative flex items-center justify-between px-6 py-2">
                <div className="flex flex-col p-6">
                    <h1 className="text-5xl font-extrabold font-alumni text-glow text-blue-400">
                        <TextScramble text="&%$(@#!#" desiredText={props.name} inView={inView} />
                    </h1>
                    <FadeUpOnScroll>
                        <h2 className="text-3xl font-semibold font-alumni text-gray-300"> {props.description} </h2>
                    </FadeUpOnScroll>
                </div>

                {/* Hamburger Button (Mobile) */}
                <button
                    onClick={toggleMenu}
                    className="p-2 text-gray-300 md:hidden hover:text-blue-400 focus:outline-none duration-300 hover:text-glow"
                >
                    <i className={`fa ${isOpen ? "fa-times" : "fa-bars"} text-2xl`} />
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex">
                    <FadeUpOnScroll>
                        <div className="flex gap-x-4 pr-12">
                            <div className="group transition">
                                <button onClick={() => props.scrollToSection(props.aboutRef)} className="text-2xl font-semibold pl-1 font-alumni text-gray-300 group-hover:text-blue-400 duration-300 group-hover:text-glow">About Me</button>
                            </div>
                            <p className="text-xl text-gray-300">|</p>
                            <div className="group transition">
                                <button onClick={() => props.scrollToSection(props.skillsRef)} className="text-2xl font-semibold pl-1 font-alumni text-gray-300 group-hover:text-blue-400 duration-300 group-hover:text-glow">Skills</button>
                            </div>
                            <p className="text-xl text-gray-300">|</p>
                            <div className="group transition">
                                <button onClick={() => props.scrollToSection(props.educationRef)} className="text-2xl font-semibold pl-1 font-alumni text-gray-300 group-hover:text-blue-400 duration-300 group-hover:text-glow">Education</button>
                            </div>
                            <p className="text-xl text-gray-300">|</p>
                            <div className="group transition">
                                <button onClick={() => props.scrollToSection(props.contactRef)} className="text-2xl font-semibold pl-1 font-alumni text-gray-300 group-hover:text-blue-400 duration-300 group-hover:text-glow">Contact</button>
                            </div>
                            <p className="text-xl text-gray-300">|</p>
                            <div className="group transition">
                                <i className="fa fa-linkedin-square text-gray-300 group-hover:text-blue-400 duration-300 group-hover:text-glow"></i>
                                <a href="https://www.linkedin.com/in/rhyscarroll/" target="_blank" className="text-2xl font-semibold pl-1 font-alumni text-gray-300 group-hover:text-blue-400 duration-300 group-hover:text-glow">LinkedIn</a>
                            </div>
                            <p className="text-xl text-gray-300">|</p>
                            <div className="group transition">
                                <i className="fa fa-github text-gray-300 group-hover:text-blue-400 duration-300 group-hover:text-glow"></i>
                                <a href="https://github.com/rhyscar" target="_blank" className="text-2xl font-semibold pl-1 font-alumni text-gray-300 group-hover:text-blue-400 duration-300 group-hover:text-glow">GitHub</a>
                            </div>
                        </div>
                    </FadeUpOnScroll>
                </div>

                {/* Mobile Menu */}
                <div className={`absolute left-0 right-0 top-full z-50 bg-gradient-to-b from-neutral-900 to-neutral-950 md:hidden transform transition-all duration-500 ease-out ${isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-2 opacity-0 pointer-events-none"
                    } overflow-hidden`}>
                    <div className="flex flex-col items-center py-4 gap-y-4">
                        <button onClick={() => handleMenuClick(props.aboutRef)} className="text-2xl font-semibold font-alumni text-gray-300 hover:text-blue-400 duration-300 hover:text-glow">
                            About Me
                        </button>
                        <button onClick={() => handleMenuClick(props.skillsRef)} className="text-2xl font-semibold font-alumni text-gray-300 hover:text-blue-400 duration-300 hover:text-glow">
                            Skills
                        </button>
                        <button onClick={() => handleMenuClick(props.educationRef)} className="text-2xl font-semibold font-alumni text-gray-300 hover:text-blue-400 duration-300 hover:text-glow">
                            Education
                        </button>
                        <button onClick={() => handleMenuClick(props.contactRef)} className="text-2xl font-semibold font-alumni text-gray-300 hover:text-blue-400 duration-300 hover:text-glow">
                            Contact
                        </button>
                        <a href="https://www.linkedin.com/in/rhyscarroll/" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)} className="text-2xl font-semibold font-alumni text-gray-300 hover:text-blue-400 duration-300 hover:text-glow">
                            LinkedIn
                        </a>
                        <a href="https://github.com/rhyscar" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)} className="text-2xl font-semibold font-alumni text-gray-300 hover:text-blue-400 duration-300 hover:text-glow">
                            GitHub
                        </a>
                    </div>
                    <hr className="border-b-1 border-gray-300 relative z-50" />
                </div>
            </nav>
            <hr className="border-b-1 border-gray-300 relative z-50" />
        </>
    );
};

export default Navbar;