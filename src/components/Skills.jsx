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

const Skills = ({ skillsRef }) => {
    return (
        <>
            <div ref={skillsRef} className="flex snap-start">
                <div className="justify-between px-64 py-64 min-h-screen">
                    <h1 className="text-5xl pb-2 pt-16 w-custom-small font-semibold">Skills</h1>
                    <h2 className="text-lg pt-4 max-w-xl">I have a strong foundation in Java, with extensive experience in both backend development and object-oriented programming. I also have experience working with foundational web technologies like HTML, CSS, JavaScript, PHP, as well as popular frameworks like Bootstrap and jQuery for building interactive and responsive websites. Additionally, I am proficient in React and Tailwind CSS, I also have experience working with SQL databases for data management, as well as Python and Lua for scripting and automation.</h2>
                </div>
                <div className="justify-between py-64 min-h-screen">
                    <Skill name="Java" link={JavaLogo} size="w-14 h-14"/>
                    <Skill name="Python" link={PythonLogo} size="w-14 h-14"/>
                    <Skill name="JavaScript" link={JavaScriptLogo} size="w-14 h-14"/>
                    <Skill name="PHP" link={PHPLogo} size="w-14 h-14"/>
                    <Skill name="Lua" link={LuaLogo} size="w-14 h-14"/>
                </div>
                <div className="w-1 h-96 bg-black self-center mx-12"/>
                <div className="justify-between py-64 min-h-screen">
                    <Skill name="HTML" link={HTMLLogo} size="w-14 h-14"/>
                    <Skill name="CSS" link={CSSLogo} size="w-14 h-14"/>
                    <Skill name="Tailwind" link={TailwindLogo} size="w-14 h-14"/>
                    <Skill name="React" link={ReactLogo} size="w-14 h-14"/>
                    <Skill name="jQuery" link={JQueryLogo} size="w-14 h-14"/>
                </div>
            </div>
        </>
    )
}

export default Skills    