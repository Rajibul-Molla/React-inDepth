import { useState } from "react"

function MultiInputForm(){
    const [formData,setFormData]= useState({
        name: "",
        email: "",
        age: ""
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData.name)
        console.log(formData.email)
        console.log(formData.age)
        console.log(formData)

    }


    const handleChange = (e) =>{
        const {name,value}= e.target
        setFormData((prev)=>({
            ...prev,
            [name] : value

        }
 
        ))
    }

    return (
        <form onSubmit={handleSubmit}>
        <h1>Multiple Input Form</h1>

        <input type="text" name="name" placeholder="name"
        value={formData.name} 
        onChange={handleChange}
        
        />
        <br/>

        <input type="email" name="email" placeholder="email"
        value={formData.email} 
        onChange={handleChange}
         />
        <br/>

        <input type="number" name="age" placeholder="Age"
        value={formData.age} 
        onChange={handleChange}
         />
        <br/>

        <button type="submit">Submit</button>


        
        </form>
    )
}
export default MultiInputForm