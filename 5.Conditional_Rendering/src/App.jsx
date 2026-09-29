
import Hello from "./Hello.jsx"
import Bye from "./Bye.jsx"

function App() {

  // load component based on condition


  const value = true;

  if(value){
    return <Hello />
  }
  else{
    return <Bye />
  }


 

  // return (
  //   <>

  //   <Hello />
      
  //   </>
  // )
}

export default App
