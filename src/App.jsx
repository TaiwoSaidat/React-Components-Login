import Signup from "./components/Signup"
import Login from "./components/Login"

import Register from "./components/Register"

// let isUser = false

// function renderComponent() {
//   if (isUser === true){
//     return <Login />
//   } else {
//     return <Signup />
//   }
// }

function App() {
  let isRegistered = false
  return (
    <div className='container' >
      <h1>My Fourth React App</h1>
      
      <Register isUser={isRegistered } />
      
      {/* ternary operator */}
      {/* {isUser ? <Login /> : <Signup />}       */}
      {/* {renderComponent()} */}
      {/* <Login />
      <Signup /> */}
    </div>
  )
}

export default App
