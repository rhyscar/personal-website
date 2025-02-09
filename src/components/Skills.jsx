import JavaLogo from '../assets/JavaLogo.png';
import PythonLogo from '../assets/PythonLogo.png';
import JavaScriptLogo from '../assets/JavaScriptLogo.png';
import PHPLogo from '../assets/PHPLogo.png';
import LuaLogo from '../assets/LuaLogo.png';
import HTMLLogo from '../assets/HTMLLogo.png';
import CSSLogo from '../assets/CSSLogo.png';
import TailwindLogo from '../assets/TailwindLogo.png';
import ReactLogo from '../assets/ReactLogo.png';
import JQueryLogo from '../assets/JQueryLogo.png';
import Skill from './Skill';

import { useInView } from "react-intersection-observer";

import TextScramble from "./TextScramble";
import FadeUpOnScroll from "./FadeUpOnScroll";

const Skills = ({ skillsRef }) => {

    const { ref, inView } = useInView({
        threshold: 0.25
    });

    return (
        <>
            <div ref={(node) => { ref(node); skillsRef.current = node; }} className="sm:flex flex-wrap snap-start min-h-screen">
                <div className="justify-between sm:px-64 sm:py-64 xl:px-32 2xl:px-64 px-4 pt-56">
                    <h1 className="text-5xl pb-2 pt-16 w-custom-small font-extrabold font-alumni text-glow text-blue-400">
                        <TextScramble text="&%$(@#!#" desiredText="Skills" inView={inView} />
                    </h1>
                    <FadeUpOnScroll>
                        <h2 className="text-2xl sm:text-3xl font-alumni text-gray-300 font-semibold pt-4 max-w-xl">I have a strong foundation in Java, with extensive experience in both backend development and object-oriented programming. I also have experience working with foundational web technologies like HTML, CSS, JavaScript, PHP, as well as popular frameworks like Bootstrap and jQuery for building interactive and responsive websites. Additionally, I am proficient in React and Tailwind CSS, I also have experience working with SQL databases for data management, as well as Python and Lua for scripting and automation.</h2>
                    </FadeUpOnScroll>
                </div>
                <div className="flex items-center justify-center md:ml-40 xl:ml-20 2xl:ml-12 xl:space-x-0 sm:space-x-12 sm:py-10 pb-10">
                    <FadeUpOnScroll>
                        <div className="flex flex-col space-y-6 font-alumni text-gray-300">
                            <Skill name="Java" link={JavaLogo} size="w-14 h-14" />
                            <Skill name="Python" link={PythonLogo} size="w-14 h-14" />
                            <Skill name="JavaScript" link={JavaScriptLogo} size="w-14 h-14" />
                            <Skill name="PHP" link={PHPLogo} size="w-14 h-14" />
                            <Skill name="Lua" link={LuaLogo} size="w-14 h-14" />
                        </div>
                    </FadeUpOnScroll>
                    <FadeUpOnScroll>
                        <hr className="w-1 mx-8 sm:mx-16 h-[500px] mt-10 bg-gray-300 border-none" />
                    </FadeUpOnScroll>
                    <FadeUpOnScroll>
                        <div className="flex flex-col space-y-6 font-alumni text-gray-300">
                            <Skill name="HTML" link={HTMLLogo} size="w-14 h-14" />
                            <Skill name="CSS" link={CSSLogo} size="w-14 h-14" />
                            <Skill name="Tailwind" link={TailwindLogo} size="w-14 h-14" />
                            <Skill name="React" link={ReactLogo} size="w-14 h-14" />
                            <Skill name="jQuery" link={JQueryLogo} size="w-14 h-14" />
                        </div>
                    </FadeUpOnScroll>
                </div>
            </div>
        </>
    )
}

export default Skills    