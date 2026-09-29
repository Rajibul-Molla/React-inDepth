function Pass_function_as_props({lable,handleclick}){

    return (
        <>
        <button onClick={handleclick}>{lable}</button>
        
        </>
    )
}
export default Pass_function_as_props