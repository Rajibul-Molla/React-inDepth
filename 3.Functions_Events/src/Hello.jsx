function Hello(){

    const testStyle ={
        color:"red"
    }

    function getName(yourName){
       
        return yourName;

    }
    /*const getName = (yourName) =>{
        return yourName;
    }*/

    function handleClick(){
        alert("button was clicked")
    }



    const handleChange = (event) =>{
        console.clear()
        console.log("Value is : ",event.target.value);
    }


    // multiple Event handling
     const handleMouseOver = ()=>{
        console.log("Mouse is over the text")

     }
     const handleDoubleClick = ()=>{
        console.log("Text Double click")

     }



    // pass data as paramenrt to function
    const name = "Rajibul molla"
    const name2= "Somya Rani"


    return (
        <>
            <h1 style={testStyle}>Hello {getName(name)}</h1>
            <h2>Bye {getName(name2)}</h2>



            
            <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick} 
            style={{ cursor: "pointer" }}
            >Lorem ipsum dolor sit amet.</p>






            <button onClick={handleClick}>Click me</button>
            <button onClick={()=>{alert("HEllo from inline function")}}>Say Hello</button>


            <br />
            <br />
            <input type="text" placeholder="Type Something" onChange={handleChange} />


        
        
        </>
    )

}
export default Hello