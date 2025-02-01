const Contact = ({ contactRef }) => {
    return (
        <>
            <div ref={contactRef} className="justify-between px-64 py-64 min-h-screen snap-start">
                <h1 className="text-5xl pb-2 pt-16 w-custom-small font-semibold text-blue-400 text-glow font-alumni">Contact</h1>
                <h2 className="text-3xl font-alumni font-semibold text-gray-300 pt-4">I’d love to connect! Whether you have a question, a collaboration opportunity, or just want to say hello, feel free to reach out. You can contact me via email or connect with me on LinkedIn. I’m always open to meaningful conversations and networking.</h2>
                <div className="flex pt-4">
                    <h2 className="pr-1 text-3xl font-alumni font-semibold text-gray-300">Email:</h2>
                    <a href="mailto:rhyscarroll22@gmail.com">
                        <h2 className="text-3xl font-alumni font-semibold text-gray-300 underline pb-2 hover:text-blue-400 hover:text-glow transition duration-300">rhyscarroll22@gmail.com</h2>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact