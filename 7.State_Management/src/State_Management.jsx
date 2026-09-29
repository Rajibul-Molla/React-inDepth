import { useState } from "react"

function State_Management(){

    let [count,setCount]= useState(0);
    function increment(){
        setCount(count+1)
    }
    const decrement = ()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    return (
        <>
        <h2>Count {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrease</button>

        </>
    )


}
export default State_Management