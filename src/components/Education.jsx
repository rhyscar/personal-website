const Education = ({ educationRef }) => {
    return (
        <>  
            <div ref={educationRef} className="justify-between px-64 py-64 min-h-screen snap-start">
                <h1 className="text-5xl pb-2 pt-16 w-custom-small">Education</h1>
                <h2 className="text-lg pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia odit nisi animi magnam fugiat autem, blanditiis, soluta corrupti eius facere. Officia officiis dolores aliquid sapiente quisquam iste est suscipit?</h2>
            </div>
        </>
    )
}

export default Education