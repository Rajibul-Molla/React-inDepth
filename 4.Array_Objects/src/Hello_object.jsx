function Hello_object(){
    const obj ={
        firstName : "Rajibul",
        lastName: "Molla",
        age: 30
    }

    function fullName(user){
        return user.firstName + " " + user.lastName;
        
        
    }

    return (
        <>
            <h2>Person Details</h2>
            {/* <p>First Name : {obj.firstName}</p>
            <p>Last Name : {obj.lastName}</p> */}

            <p>Full Name: {fullName(obj)}</p>
            <p>Age : {obj.age}</p>

        
        </>
    )

}
export default Hello_object