import { useNavigate } from "react-router-dom";
import "./home.css"
const home = ()=>{
  const navigate = useNavigate();
    return(
      <div>
       <h1>Contacto App</h1>
       <div>
        <img src="../../images/contact.png" alt="" height= "300" width="300"/>
       </div>
       <button onClick={()=>{
        navigate("/login")
       }} class = "login">Login</button>
       <button onClick={
        ()=>{
        navigate("/register")
        }
       } class = "register">Register</button>
      </div>
    )
}


export default home;