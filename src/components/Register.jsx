import Input from "./layout/Input"

function Register(props) {
  return (
    <div>
      <h1 style={{color:'green'}} >{props.isUser ? 'Login' : 'Register'}</h1>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {props.isUser === false && (<Input type="password" placeholder="Confirm Password" />)}
        <button type="submit">{props.isUser ? 'Login' : 'Register'}</button>
      </form>
    </div>
  )
}

export default Register
