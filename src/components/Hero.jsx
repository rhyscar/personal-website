const Hero = ({ scrollToSection, aboutRef}) => {
    return (
        <>  
            <div className="justify-between px-64 py-64 max-w-5xl min-h-screen snap-start">
                <h1 className="text-5xl py-2 font-semibold">Computer Science Student</h1>
                <h1 className="text-4xl py-2">Committed to Excellence</h1>
                <h2 className="text-lg py-2">Aspiring Software Engineer and second-year student at RMIT University in Melbourne, passionate about developing innovative solutions and continuously expanding my technical expertise.</h2>
                <div className="flex gap-x-4 pr-16 py-2">
                    <button className="text-white bg-blue-500 rounded-md shadow-lg hover:shadow-blue-400 hover:bg-blue-400 transition duration-300 text-xl font-bold px-8 py-2">Resume</button>
                    <button onClick={() => scrollToSection(aboutRef)} className="border-blue-500 text-blue-500 border-2 rounded-md shadow-lg hover:shadow-blue-400 hover:text-blue-400 hover:border-blue-400 transition duration-300 text-xl font-bold px-8 py-2">Learn More
                        <i className="fa fa-chevron-down pl-2"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hero