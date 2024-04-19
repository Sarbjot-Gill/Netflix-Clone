import Nnavbar from "./Navbar";
import Style from "../css/changepass.module.css"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Changeplanfooter from "./Changeplanfooter";
import { Link } from "react-router-dom";

export default function Changepassword() {
  return (
    <>
    <div style={{backgroundColor:"#f4f4f4"}}>
    <Nnavbar/>
    
    <div style={{marginLeft:"100px",marginTop:"30PX" }}>
        <h2>Change Password</h2>
        <div>
        <input className={`${Style.pass}`}  placeholder="Current password" type="password"/><br></br>
        <input className={`${Style.pass}`}  placeholder="New password" type="password"/><br></br>
        <input className={`${Style.pass}`}  placeholder="Re-enter new password" type="password"/><br></br>
        <div style={{marginTop:"20px"}}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Sign out of all devices" />
        
        </div>
        <div style={{marginTop:"30px",marginBottom:"50px"}}>
        <button className="m-2" style={{background:"#2F3DFF",border:"0",width:"85px",height:"35px",color:"white"}}>Save</button>
        <Link  style={{textDecoration:"none",color:"black"}} to="/acc">
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
