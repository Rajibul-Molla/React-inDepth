import "./App.css"

function Hello (){
    const isLoggedIn = true;



    
    if(isLoggedIn){
        return <h1>User is loggedin</h1>
    }
    else{
        return <h1>User is Not Loggedin</h1>
    }



  // Turnary Operator
  /*return (
    <>
    {isLoggedIn ? <h1>Pass</h1> : <h1>Fail</h1>}
    
    </>
  )*/


    
//Store in A variable
/*function Hello() {
    const isLoggedIn = true;

    let content;
    if (isLoggedIn) {
        content = <h1>User is logged in</h1>;
    } else {
        content = <h1>User is Not Logged in</h1>;
    }

    return (
        <>
            <h1>Conditional Rendering</h1>
            {content}
        </>
    );
}

export default Hello;*/











    //Logical operator
   /* return (
        <>
        {isLoggedIn && <p>You have logged in</p>}
        
        </>
    )*/






    // Conditional rendering in css
    /*const isVisible = true;
    const visibility = isVisible ? "visible": "invisible"
    return (
        <>
        <h1 className={visibility}>Conditional Rendering</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolor reprehenderit magni, nostrum quae suscipit ipsam impedit rerum pariatur modi aliquid assumenda iure soluta labore, enim repellendus, ab laudantium ullam.</p>
        
        
        </>
    )*/



}
export default Hello
