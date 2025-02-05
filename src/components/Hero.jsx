import { useInView } from "react-intersection-observer";

import TextScramble from "./TextScramble";
import FadeUpOnScroll from "./FadeUpOnScroll";

const Hero = ({ scrollToSection, aboutRef }) => {

    const { ref, inView } = useInView({
        threshold: 0.5
    });

    return (
        <>
            <div ref={ref} className="justify-between px-4 py-56 sm:px-56 sm:py-56 md:px-64 md:py-64 lg:px-64 lg:py-64 max-w-5xl min-h-screen snap-start">
                <h1 className="text-4xl sm:text-5x1 font-extrabold font-alumni text-glow text-blue-400 w-96 whitespace-nowrap">
                    <TextScramble text="&%$(@#!#" desiredText="Computer Science Student" inView={inView} />
                </h1>
                <FadeUpOnScroll>
                    <h1 className="py-2 text-3xl font-semibold pl-1 font-alumni text-gray-300">Committed to Excellence</h1>
                    <h2 className="py-2 text-3xl font-semibold pl-1 font-alumni text-gray-300">Aspiring Software Engineer and second-year student at RMIT University in Melbourne, passionate about developing innovative solutions and continuously expanding my technical expertise.</h2>
                    <div className="flex-col ml-2">
                        <a href="/RhysCarrollResume2025.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="text-neutral-900 font-alumni text-3xl bg-blue-500 rounded-md shadow-lg hover:shadow-blue-500 transition duration-300 font-bold px-8 py-2">Resume</button>
                        </a>
                        <button onClick={() => scrollToSection(aboutRef)} className="text-blue-500 font-alumni text-3xl border-blue-500 border-2 rounded-md shadow-lg hover:shadow-blue-500 transition duration-300 font-bold px-8 py-1.5 ml-2 md:ml-0 lg:ml-4 sm:ml-4 mt-4">Learn More
                            <i className="fa fa-chevron-down text-xl pl-2"></i>
                        </button>
                    </div>
                </FadeUpOnScroll>
            </div>
        </>
    )
}

export default Hero