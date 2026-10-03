import { useState,useEffect } from "react"

function First(){

  const [count,setCount] = useState(0);
  const [name,setName] = useState("Ronith");


  const handleChangeName = () =>{
    setName(preName => {
      return (preName === "Ronith" ? "Rajibul Molla": "Ronith")
    })
  }

  // runs eatch time component re-rendered
  // useEffect(()=> {
  //   console.log("Component Re-endered")
  // })


  /*runs only once take a dependency array and leave it blank
    useEffect(()=> {
    console.log("Component Re-endered")
  },[])*/


  // Depends on specific variable also we can use props variable in the array
    useEffect(()=> {
      document.title = `Count: ${count}`
    console.log("Component Re-endered")
  },[count])

  return (

    <>
    <h2>Count: {count}</h2>
    <h2>Name: {name}</h2>
    <button onClick={()=> setCount(count+1)}>Increment</button>
    <button onClick={handleChangeName}>Change Name</button>
    
    
    </>
  )


}
export default First