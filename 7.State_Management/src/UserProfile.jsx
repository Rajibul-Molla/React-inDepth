import { useState } from "react"

function UserProfile(){
const [name,setName] = useState("Guest");
const [age,setAge] = useState(18);



return (
    <>
    <h2>Name: {name}</h2>
    <h3>Age: {age}</h3>
        <button onClick={()=> setName("Rajibul Molla")}>Change Name</button>

        <button onClick={()=> setAge(age + 1)}>Change Age</button>
    
    </>
)

}
export default UserProfile