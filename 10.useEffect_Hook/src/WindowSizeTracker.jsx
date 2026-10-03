import { useState,useEffect } from "react"

function WindowSizeTracker(){

  const [width,setWidth] = useState(window.innerWidth);
  
    useEffect(()=> {
        const handleReSize = ()=>{
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize",handleReSize)

        return ()=>{
            window.removeEventListener("resize",handleReSize)
            console.log("Unsubscribed")
        }



  },[])




  return (

    <>
    <h2>Window Width Tracker</h2>
    <p>Current Width: {width}px</p>

    
    
    </>
  )


}
export default WindowSizeTracker