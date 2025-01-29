const Skill = (props) => {
    return (
        <>
            <div className="flex">
                <img className={props.size} src={props.link} />
                <h2 className="text-2xl font-medium max-w-xl pt-5">{props.name}</h2>
            </div>
        </>
    )
}

export default Skill    