import { useState } from "react"

function Simple_Form(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name)
        console.log(email)
    }


    return (
        <form onSubmit={handleSubmit}>
        <h1>Simple From Handiling Example</h1>

        <label>Enter UeserName</label>
        <input type="text" value={name} onChange={(e)=>{
            setName(e.target.value)
           
        }}/>

        <br/>
        <br/>
        <label>Enter Email</label>
        <input type="email"
         value={email} 
         onChange={(e)=>{
            setEmail(e.target.value)
            
         }}
         />

        <br/>
        <br/>
        <button type="submit">Submit</button>

        
        </form>
    )
}
export default Simple_Form