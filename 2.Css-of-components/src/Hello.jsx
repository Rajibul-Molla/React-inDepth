
import "./App.css"

function Hello (){
    const name = "Rajibul Molla"
    const headingStyle = {
        color : "red",
        fontSize: "30px",
        textAlign : "center",
        backgroundColor : "pink"
    }
    return <><h2 style={headingStyle}>Hello {name} this is the example of internal css</h2>
    <p style={{color:"blue",fontSize:"20px"}}>This is the p tag example of inline css</p>

    <p className="test">This is the example of external css</p>

    </>
}
export default Hello