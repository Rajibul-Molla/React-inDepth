import{useRef} from "react"

function UnControlledForm(){

    const nameRef = useRef ("Rajibul");
    // const nameRef = useRef ("Rajibul");
    const emailRef = useRef ();


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Name: ",nameRef.current.value);
        console.log("Email: ",emailRef.current.value)

    }


    return(
        <form onSubmit={handleSubmit}>
            <h1>Uncontrolled Form</h1>
            <input type="text" ref={nameRef} placeholder="Name"/>
            <br/>
            <input type="email" ref={emailRef}placeholder="Email"/>
            <br/>
            <button type="submit">Submit</button>
        
        </form>
    )
}
export default UnControlledForm