import Style from "../css/changepass.module.css"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Changeplanfooter from "./Changeplanfooter";
import { Link, useLocation } from "react-router-dom";
import Accnavbar from "./Accnavbar";
import { useState } from "react";
import { Alert } from "react-bootstrap";

export default function Changepassword() {
  const [cpass , setCpass] = useState()
  const [npass , setNpass] = useState()
  const [rpass , setRpass] = useState()
  const [fail , setFail] = useState(false)
  const [success , setSuccess] = useState(false)
  let loction = useLocation();
  let data = loction.state.x;
  let mail = loction.state.user.email;
  const handleSubmit = () => {
    if(npass === rpass){
      fetch('http://127.0.0.1:3000/changepassword', 
      { method : "post" ,headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email : mail , currentPass : cpass , newPass : npass })}).then((response) => response.json().then((res) => {
        console.log(res)
        if(res === "success"){
          setSuccess(true)
          setFail(false)
        }else if(res === "Password Wrong"){
          setFail(true)
        }
      }))
    }else{
      alert("pass not same")
    }
  }
  return (
    <>
    <div style={{backgroundColor:"#f4f4f4"}}>
    <Accnavbar change ={true}  x = {data} />
    
    <div style={{marginLeft:"100px",marginTop:"30PX" }}>
        <h2>Change Password</h2>
        {success ? <Alert variant="success" style={{width:"1300px" , height:"70px"}}>
            <h3>Password Change Success</h3>
          </Alert> : <></>}    
          {fail ? <Alert variant="danger" style={{width:"1300px" , height:"70px"}}>
            <h3>Wrong Password</h3>
          </Alert> : <></>}    
        <div>
        <input className={`${Style.pass}`}  placeholder="Current password" type="password" onChange={(e) => {
          setCpass(e.target.value)
        }}/><br></br>
        <input className={`${Style.pass}`}  placeholder="New password" type="password" onChange={(e) => {
          setNpass(e.target.value)
        }}/><br></br>
        <input className={`${Style.pass}`}  placeholder="Re-enter new password" type="password" onChange={(e) => {
          setRpass(e.target.value)
        }}/><br></br>
        <div style={{marginTop:"20px"}}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Sign out of all devices" />
        
        </div>
        <div style={{marginTop:"30px",marginBottom:"50px"}}>
        <button className="m-2" style={{background:"#2F3DFF",border:"0",width:"85px",height:"35px",color:"white"}} onClick={handleSubmit}>Save</button>
        <Link  style={{textDecoration:"none",color:"black"}} to="/acc" state={data}>
        <button style={{background:"#ccc",border:"0",width:"85px",height:"35px"}}>Cancel</button>
        </Link>
        </div>
        </div>

    </div>
    <Changeplanfooter/>
    </div>

    </>
    
  )
}
