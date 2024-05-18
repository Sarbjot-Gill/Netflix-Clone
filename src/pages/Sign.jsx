import Footer from "./Footer";
import Nnavbar from "./Navbar";
import Sstyle from "../css/sign.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Sign() {
  const [mail ,setmail] = useState("")
  const navigate = useNavigate();
  const checkLog = (e) => {
    e.preventDefault()
    let data = {email:e.target.email.value,pass:e.target.password.value}
    // navigate("/home" , {state:mail})
    fetch('http://127.0.0.1:3000/log', 
    { method : "POST" ,headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)})
    // .then((e) => {console.log(e)})
     .then((response) =>response.json().then((dataa) => {
      // console.log(dataa)
      if(dataa === "success"){
      navigate("/pro" , {state:mail})
      }else if(dataa === "fail"){
      alert("user dont exist")
    }else if(dataa === "pass not match"){
      alert("password not same")
    }
     }
  )
  )
  }
  return (
    <div className={Sstyle.back}
    >
      <Nnavbar />
      <div className={Sstyle.fflex}
      >
        <div
          className={`${Sstyle.ccard} `}
          
        >
          <div className="card-body" style={{width:"350px" ,marginLeft:"50px" ,marginTop:"40px",color:"white"}}><h2>Sign In</h2>
          <div style={{marginTop:"30px"}}>
            <form onSubmit={checkLog}>
                <input className={`${Sstyle.inp} bg-transparent`} onChange={(e)=>{setmail(e.target.value)}} name="email" placeholder="Email"  type="text"/>
                <input  className={`${Sstyle.inp} bg-transparent`} name="password" placeholder="Password" type="password"/>
                <button type="submit"  className="btn " style={{width:"100%", backgroundColor:"red",color:"white",marginBottom:"20px"}}>Sign In</button>
            </form>
            <center><p>Forget Password?</p></center>
          </div>
          <div style={{marginTop:"50px"}}>
            <input type="checkbox" style={{ transform: 'scale(1.7)' , marginRight:"15px" , marginBottom:"20px"}}></input>
            <label>Remember Me</label>
            <p>New to Netflix <b>Sign Up Now</b></p>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
