import { useInView } from "react-intersection-observer";

import TextScramble from "./TextScramble";
import FadeUpOnScroll from "./FadeUpOnScroll";

const Education = ({ educationRef }) => {

    const { ref, inView } = useInView({
        threshold: 0.5
    });

    return (
        <>
            <div ref={(node) => { ref(node); educationRef.current = node; }} className="justify-between px-4 py-56 sm:px-64 sm:py-64 min-h-screen snap-start">
                <h1 className="text-5xl pb-8 pt-16 w-custom-smal font-semibold font-alumni text-blue-400 text-glow">
                    <TextScramble text="&%$(@#!#" desiredText="Education" inView={inView} />
                </h1>
                <FadeUpOnScroll>
                    <h2 className="text-4xl font-extrabold text-gray-300 font-alumni">Bachelor of Computer Science</h2>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-300 font-alumni">RMIT University | Melbourne, Victoria | 2025 – 2026</h3>
                    <h3 className="text-xl font-extrabold text-gray-300 font-alumni pb-6">WAM: 90 | GPA: 3.9</h3>
                    <h2 className="text-4xl font-extrabold text-gray-300 font-alumni">Associate Degree in Information Technology with Distinction</h2>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-300 font-alumni">RMIT University | Melbourne, Victoria | 2023 – 2024</h3>
                </FadeUpOnScroll>
            </div>
        </>
    )
}

export default Education