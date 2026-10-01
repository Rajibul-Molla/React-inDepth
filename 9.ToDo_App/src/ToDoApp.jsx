import { useState } from "react";

function ToDoApp(){
    const [todo,setTOdo] = useState("")
    const [arr,setArr] =useState([]);

    const handleSubmit = () => {
        if(todo){
            setArr([...arr,{text:todo,completed:false}])
            setTOdo("")
        }

    }
    const handleDelete = (index) =>{
        const newArr = [...arr ]
        newArr[index].completed = true

        setArr(newArr)


    }

return (
    <>
    <h1>ToDO App</h1>
    <input type="text" placeholder="Enter Your Task" value={todo} onChange={(e)=>{
        setTOdo(e.target.value)
    }}/>
    <button onClick={handleSubmit}>Add Task</button>


    <ul>
        {
            arr.map((todo,index)=>(
                <li key={index}>
                    <span style={{textDecoration: todo.completed ? 'line-through': 'none'}}>{todo.text}</span>
                    <button onClick={()=>{
                        handleDelete(index)
                    }}>Delete</button>
                    </li>
            ))
        }

    </ul>
    
    </>
)

}
export default ToDoApp