const About = ({ aboutRef }) => {
    return (
        <>
            <div ref={aboutRef} className="justify-between px-64 py-64 flex min-h-screen snap-start">
                <h1 className="text-5xl py-2 maxwi-30">About Me</h1>
                <h2 className="text-lg py-2 pl-60">Aspiring Software Engineer and second-year student at RMIT University in Melbourne, passionate about developing innovative solutions and continuously expanding my technical expertise.</h2>
            </div>
        </>
    )
}

export default About