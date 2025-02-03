const Skill = (props) => {
    return (
        <>
            <div className="flex pt-6">
                <img className={props.size} src={props.link} />
                <h2 className="text-2xl font-semibold max-w-xl pt-5 pl-2">{props.name}</h2>
            </div>
        </>
    )
}

export default Skill