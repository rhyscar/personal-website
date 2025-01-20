const Navbar = (props) => {
    return (
        <>
            <nav className="flex items-center justify-between px-6 py-2">
                <div className="flex flex-col p-6">
                    <h1 className="text-4xl"> {props.name} </h1>
                    <h2 className="text-lg"> {props.description} </h2>
                </div>

                <div className="flex gap-x-4 pr-12">
                    <div className="hover:text-blue-400 transition duration-300">
                        <i className="fa fa-linkedin-square"></i>
                        <a href="https://www.linkedin.com/in/rhyscarroll/" target="_blank" className="text-lg pl-1">LinkedIn</a>
                    </div>
                    <div className="hover:text-blue-400 transition duration-300">
                        <i className="fa fa-github"></i>
                        <a href="https://github.com/rhyscar" target="_blank" className="text-lg pl-1">GitHub</a>
                    </div>
                </div>
            </nav>
            <hr className="border-b-1 border-black"></hr>
        </>
    )
}

export default Navbar