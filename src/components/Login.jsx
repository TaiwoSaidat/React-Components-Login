import Input from "./layout/Input"

function Login() {
  return (
    <div>
      <h1 style={{color:'green'}} >Log in</h1>
      <form className="form" >
        <Input type="text" placeholder="Username"/>
        <Input type="placeholder" placeholder="Password"/>

        {/* <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password" /> */}
        <button type="Submit"> Log In </button>
      </form>
    </div>
  )
}

export default Login
