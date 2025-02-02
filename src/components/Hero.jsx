import { useInView } from "react-intersection-observer";

import TextScramble from "./TextScramble";
import FadeUpOnScroll from "./FadeUpOnScroll";

const Hero = ({ scrollToSection, aboutRef}) => {

    const { ref, inView } = useInView({
        threshold: 0.5
    });

    return (
        <>  
            <div ref={ref} className="justify-between px-64 py-64 max-w-5xl min-h-screen snap-start">
                <h1 className="text-5xl font-extrabold font-alumni text-glow text-blue-400">
                <TextScramble text="&%$(@#!#" desiredText="Computer Science Student" inView={inView} />
                </h1>
                <FadeUpOnScroll>
                <h1 className="py-2 text-3xl font-semibold pl-1 font-alumni text-gray-300">Committed to Excellence</h1>
                <h2 className="py-2 text-3xl font-semibold pl-1 font-alumni text-gray-300">Aspiring Software Engineer and second-year student at RMIT University in Melbourne, passionate about developing innovative solutions and continuously expanding my technical expertise.</h2>
                <div className="flex gap-x-4 pr-16 py-2">
                    <button className="text-neutral-900 font-alumni text-3xl bg-blue-500 rounded-md shadow-lg hover:shadow-blue-500 hover:bg-blue-500 transition duration-300 font-bold px-8 py-2">Resume</button>
                    <button onClick={() => scrollToSection(aboutRef)} className="font-alumni border-blue-500 text-blue-500 border-2 rounded-md shadow-lg hover:shadow-blue-500 hover:text-blue-500 hover:border-blue-500 transition duration-300 text-3xl font-bold px-8 py-2">Learn More
                        <i className="fa fa-chevron-down text-xl pl-2 pb-1"></i>
                    </button>
                </div>
                </FadeUpOnScroll>
            </div>
        </>
    )
}

export default Hero