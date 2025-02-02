import { useInView } from "react-intersection-observer";

import TextScramble from "./TextScramble";
import FadeUpOnScroll from "./FadeUpOnScroll";

const About = ({ aboutRef }) => {

    const { ref, inView } = useInView({
        threshold: 0.5
    });

    return (
        <>     
            <div ref={(node) => { ref(node); aboutRef.current = node; }} className="justify-between px-64 py-64 min-h-screen snap-start">
                <h1 className="pb-2 pt-16 w-custom-small text-5xl font-extrabold font-alumni text-glow text-blue-400">
                <TextScramble text="&%$(@#!#" desiredText="About Me" inView={inView} />
                </h1>
                <FadeUpOnScroll>
                <h2 className="pt-4 text-3xl font-semibold font-alumni text-gray-300">I’m someone who’s always looking to improve, whether it’s learning new programming concepts, refining my problem-solving skills, or taking on challenges that push me out of my comfort zone. I enjoy the process of figuring things out and constantly building on what I know. Outside of coding, I train as an amateur boxer. It’s a completely different kind of challenge, but it’s taught me a lot about discipline, persistence, and adapting under pressure—skills that help me become a better developer. No matter what I’m working on, I’m always focused on progress and growth.</h2>
                </FadeUpOnScroll>
            </div>
        </>
    )
}

export default About    