import Props_example from "./Props_example.jsx"
import Props_destecturing  from "./Props_destecturing.jsx"
import Array_props from "./Array_props.jsx";
import Pass_function_as_props from "./pass_function_as_props.jsx";
function App() {
//TO be pass as Array
  const hobbies = ["Reading", "Watching Movie","Traveling"];

  //TO be pass as props
  function message(){
    alert("Hello from message box")
  }




  return (
    <>
      <Props_example name="Rajibul Molla" age={30}/>
      <Props_example name="Somnath Gandu" age={29}/>




      <Props_destecturing name="Somya" age={20} />
      {/* defalut value will apply when we dont pass any arguments */}
      <Props_destecturing  />



      {/* pass array as a props  */}
      <Array_props name="Abc" age={50} hobbies={hobbies}/>



      {/* pass function as props */}
      <Pass_function_as_props lable="Click Me" handleclick={message}/>

      
    </>
  )
}

export default App