import ToggleText from "./ToggleText"
import State_Management from "./State_Management"
import LikeButton from "./LikeButton"

import UserProfile from "./UserProfile"
import Student from "./Student"

import InputExample from "./InputExample"

function App() {

  return (
    <>
    <State_Management />

    <h1>Toggle Text Example</h1>

    <ToggleText />
    <h1>Like Button Example</h1>

    <LikeButton />


    <h1>User Profile</h1>
    <UserProfile />

    {/* pass object in state variable */}
    <Student />

    <h1>Input Example</h1>
    {/* input handling */}
    <InputExample />
    </>
  )
}

export default App
