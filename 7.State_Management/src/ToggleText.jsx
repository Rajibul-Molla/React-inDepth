import { useState } from "react"
import "./App.css"
function ToggleText(){

    const [show,setShow] = useState(true);

    function flip(){
        setShow(!show);
    }

    return(

        <>
        <p className={show ? "visible" : "invisible"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, pariatur!</p>
        <button onClick={flip}>{show ? "Hide Text" : "Show Text"}</button>
        


        {/* {show && <p>This is a secret message,</p>} */}


        </>
    )


}
export default ToggleText