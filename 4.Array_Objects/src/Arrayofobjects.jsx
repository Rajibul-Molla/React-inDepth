function Arrayofobjects(){

const users = [
  { firstName: "Rajibul", lastName: "Molla", age: 20 },
  { firstName: "Aarav", lastName: "Sharma", age: 24 },
  { firstName: "Priya", lastName: "Patel", age: 28 },
  { firstName: "Kabir", lastName: "Das", age: 22 },
  { firstName: "Ananya", lastName: "Roy", age: 26 }
];

function getFullName(users){
  return users.firstName + " " + users.lastName;
} 

return (
    <>
    <ul>
        {
            users.map((user,index)=>(
                <li key={index}>{getFullName(user)} is {user.age} years old</li>

            ))
        }
    </ul>



    

    
    
    
    
    </>
)
}
export default Arrayofobjects