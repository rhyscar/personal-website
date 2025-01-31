const Footer = () => {
    return (
        <>
            <hr className="border-b-1 border-black"></hr>
            <div className="justify-between px-64 py-12 snap-start">
                <h1 className="text-5xl w-custom-small font-semibold">Rhys</h1>
                <a href="mailto:rhyscarroll22@gmail.com">
                    <h2 className="text-lg pt-4 pb-2 hover:text-blue-400 transition duration-300">rhyscarroll22@gmail.com</h2>
                </a>
                <a href="https://www.linkedin.com/in/rhyscarroll/" target="_blank">
                    <i className="fa fa-linkedin-square fa-2x hover:text-blue-400 transition duration-300"></i>
                </a>
                <a href="https://github.com/rhyscar" target="_blank">
                    <i className="fa fa-github fa-2x pl-3 hover:text-blue-400 transition duration-300"></i>
                </a>
            </div>
        </>
    )
}

export default Footer