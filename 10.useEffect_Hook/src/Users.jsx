import { useState,useEffect } from "react"

function Users(){

  const [users,setUsers] = useState([]);
  
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))

        // return ()=>{
        //     clearFetch
        // }


  },[])




  return (

    <>
    <h2>Fetch User data With useEffect</h2>
    <ul>
        {
            users.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))
        }
    </ul>

    
    
    </>
  )


}
export default Users