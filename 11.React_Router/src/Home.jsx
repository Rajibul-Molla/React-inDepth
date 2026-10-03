// useNavigate help us to route with js

import { useNavigate } from "react-router-dom"
function Home(){

    const navigate = useNavigate();

    const gotoAbout = ()=>{
        navigate("/about")
    }

    return (
        <>
        <h2>Welcome to Home Page</h2>
        <button onClick={gotoAbout}>Go To About</button>
        </>
    )

}
export default Home