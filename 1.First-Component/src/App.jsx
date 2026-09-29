import Bye from "./Bye.jsx"
import Hello from "./Hello.jsx"
import testImage from "./assets/react.svg"
function App() {


  return (
    <>
      <h1>Hello World</h1>
      <Hello />

      <img src={testImage} alt="Cant get immage" width="200px" />

      <Bye />

      
    </>
  )
}

export default App
