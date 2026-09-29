function Array_props(props){

    return (

        <>
        <h1>Pass array as properties</h1>
        <h2>Hello {props.name} your age is {props.age} </h2>

        <ul>
            {props.hobbies.map((hobbie)=>(
                <li>{hobbie}</li>
            ))}
        </ul>
        
        
        </>
    )


}
export default Array_props