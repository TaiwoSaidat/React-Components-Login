import Input from "./layout/Input"

function Signup() {
  return (
    <div>
      <h1 style={{color:'green'}} >Sign Up</h1>
      <form className="form" >
        <Input type="text" placeholder="Username"/>
        <Input type="placeholder" placeholder="Password"/>
        <button type="Submit"> Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
