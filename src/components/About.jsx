const About = ({ aboutRef }) => {
    return (
        <>
            <div ref={aboutRef} className="justify-between px-64 py-64 min-h-screen snap-start">
                <h1 className="text-5xl pb-2 pt-16 w-custom-small">About Me</h1>
                <h2 className="text-lg pt-4">I’m someone who’s always looking to improve, whether it’s learning new programming concepts, refining my problem-solving skills, or taking on challenges that push me out of my comfort zone. I enjoy the process of figuring things out and constantly building on what I know. Outside of coding, I train as an amateur boxer. It’s a completely different kind of challenge, but it’s taught me a lot about discipline, persistence, and adapting under pressure—skills that help me become a better developer. No matter what I’m working on, I’m always focused on progress and growth.</h2>
            </div>
        </>
    )
}

export default About    