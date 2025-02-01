const Navbar = (props) => {
    return (
        <>
            <nav className="flex items-center justify-between px-6 py-2">
                <div className="flex flex-col p-6">
                    <h1 className="text-5xl font-extrabold font-alumni text-glow text-blue-400"> {props.name} </h1>
                    <h2 className="text-3xl font-semibold font-alumni text-gray-300"> {props.description} </h2>
                </div>

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
            </nav>
            <hr className="border-b-1 border-gray-300"></hr>
        </>
    )
}

export default Navbar