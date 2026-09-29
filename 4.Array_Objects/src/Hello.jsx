function Hello(){

    const fruits = ["Apple","Mango","Banana"];
    console.log(fruits)
    return (
        <>
        <h1>Fruit List</h1>
        <ul>
            {
                fruits.map((fruit,index)=>(
                    <li key={index}>{fruit}</li>
                ))

                    
                
            }
        </ul>
        
        
        
        </>
    )
}
export default Hello