import JavaLogo from '../assets/JavaLogo.png';
import PythonLogo from '../assets/PythonLogo.png';
import Skill from '../components/Skill';

const Skills = ({ skillsRef }) => {
    return (
        <>
            <div ref={skillsRef} className="flex">
                <div className="justify-between px-64 py-64 min-h-screen snap-start">
                    <h1 className="text-5xl pb-2 pt-16 w-custom-small">Skills</h1>
                    <h2 className="text-lg pt-4 max-w-xl">I have a strong foundation in Java, with extensive experience in both backend development and object-oriented programming. I also have experience working with foundational web technologies like HTML, CSS, JavaScript, PHP, as well as popular frameworks like Bootstrap and jQuery for building interactive and responsive websites. Additionally, I am proficient in React and Tailwind CSS, I also have experience working with SQL databases for data management, as well as Python and Lua for scripting and automation.</h2>
                </div>
                <div className="justify-between py-64 min-h-screen snap-start">
                    <Skill name="Java" link={JavaLogo} size="w-14 h-14 pr-2"/>
                    <Skill name="Python" link={PythonLogo} size="w-12 h-12 pr-2"/>
                    <h2 className="text-2xl font-medium pt-5 max-w-xl">Python</h2>
                    <h2 className="text-2xl font-medium pt-5 max-w-xl">JavaScript</h2>
                    <h2 className="text-2xl font-medium pt-5 max-w-xl">PHP</h2>
                    <h2 className="text-2xl font-medium pt-5 max-w-xl">Lua</h2>
                </div>
            </div>
        </>
    )
}

export default Skills    