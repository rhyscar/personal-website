const Education = ({ educationRef }) => {
    return (
        <>  
            <div ref={educationRef} className="justify-between px-64 py-64 min-h-screen snap-start">
                <h1 className="text-5xl pb-8 pt-16 w-custom-smal font-semibold">Education</h1>
                <h2 className="text-xl font-semibold">Bachelor of Computer Science</h2>
                <h3 className="text-lg">RMIT University | Melbourne, Victoria | 2025 – 2026</h3>
                <h3 className="text-lg pb-6">WAM: 90 | GPA: 3.9</h3>
                <h2 className="text-xl font-semibold">Associate Degree in Information Technology with Distinction</h2>
                <h3 className="text-lg">RMIT University | Melbourne, Victoria | 2023 – 2024</h3>
            </div>
        </>
    )
}

export default Education