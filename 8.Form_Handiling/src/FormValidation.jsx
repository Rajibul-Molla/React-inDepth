import { useState } from "react"
function FormValidation(){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [error,setError] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!name || !email){
            setError("Please Fill all details")
            console.log(error)
        }else{
            setError("")
            console.log("FOrm Submited: ",{name,email})
            alert("Sucess")

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Basic Form Validation</h1>
            <input type="text" placeholder="Enter Your name" value ={name} onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <br/>
            <input type="email" placeholder="Enter Your Email" value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }} />
            <br/>

            <button type="submit">Submit</button>
        </form>
    )


}
export default FormValidation