import { useState } from "react";
import { Button, } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function AddPro() {
    // const[child , setChild] = useState()
    const[name , setName] = useState("")
    const[age , setAge] = useState("A")
    const navigate = useNavigate()
    let loction = useLocation()
    let arr = {name : name ,age:age}
    let profile = loction.state.profile
    const handleClick = () => {
       
        if(name === ""){
            alert("pls enter name")
        }else{  
            profile.push(arr)
            console.log(profile)
            fetch('http://127.0.0.1:3000/addprofile', 
            { method : "post" ,headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email : loction.state.email , profile:profile})})
            navigate("/pro", {state:loction.state.email})
        }
    }
  return (
    <div className="card" style={{ backgroundColor: "black", color: "white", height:"100vh", }}>
      <div className="card-body">
            {" "}
            <center>
              <div style={{display:"flex", justifyContent:"center", fontSize: "50px", fontWeight: "bolder" ,marginTop:"150px" ,marginRight:"230px"}}>
                Add Profile
              </div>
            
            <h4 style={{ marginLeft: "40px", marginTop: "10px" ,fontSize:"20px",marginRight:"90px"}}>
              Add a profile for another person watching Netflix
            </h4>
            
            <div style={{marginRight:"120px",width:"500px"}}>
            <hr></hr>
            <img
            style={{marginTop:"20px", height:"130px",borderRadius:"9px"}}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          ></img>
          
            <input className="mx-4" type="text" placeholder="Name" onChange={((e) => {setName(e.target.value)})}></input>
            <input type="checkbox" value="C"  onChange={((e) =>{setAge(e.target.value)})}></input>
            <label>Child </label>
                <hr></hr>
                <div>
                <Button
              style={{
                width: "30%",
                marginTop: "20px",
                height: "40px",
                backgroundColor: "red",
                fontSize: "20px",
                border:"1px red solid"
              }}
              onClick={handleClick}
              
            >
              Continue
            </Button>
            <Link to="/pro" state={loction.state.email}>
            <Button
            className="ms-3"
              style={{
                width: "30%",
                marginTop: "20px",
                height: "40px",
                backgroundColor: "Black",
                fontSize: "20px",
                border:"1px white solid"
                
              }}
              
              
            >
              Cancel
            </Button>
            </Link>
            </div>
            </div>
            </center>
            
      </div>
    </div>
  );
}