import { useState,useEffect } from "react"

function Timer(){

  const [seconds,setSeconds] = useState(0);
  
    useEffect(()=> {
        const interval = setInterval(()=>{
            setSeconds ((prev)=> prev + 1)
        },1000)

        // clear interval to overcome double run problem (clen up function)
        return ()=>{
            clearInterval(interval)
            console.log("TImer Cleared")
        }



  },[])



  return (

    <>
    <h2>Seconds: {seconds}</h2>

    
    
    </>
  )


}
export default Timer