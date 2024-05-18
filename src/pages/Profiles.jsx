import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Mstyle from "../css/membership.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function Profiles() {
  const [pro , setpro] = useState()
  const [load , setLoad] = useState(true)
  const loction = useLocation()
  const Navigate = useNavigate();  
  useEffect(()=> {
    fetch('http://127.0.0.1:3000/getprofile', 
    { method : "post" ,headers: {

      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email:loction.state})})
     .then((response) =>response.json().then((dataa) => {
      setpro(dataa)
      setLoad(false)
    })
  )
  },[])
  return (
    <div className={Mstyle.b}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h1 style={{marginTop:"50px"}}>Whos watching?</h1>{" "}
      </div>
   
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "95px",
        }}
      >
        {load ? <>
        
        </> : <>{pro.map((e,i)=> {
          return (
            <>
            <div onClick={()=>{
              let arr = pro;
              // delete arr[i]
              arr.splice(i,1)
              console.log(e.list)
              if(e.list === undefined){
                Navigate("/list", {state : {profile:e,email:loction.state,index:i}})
              }else{
                Navigate("/home" , {state:{profile:e ,email:loction.state , otherpro:arr }})
              }
              
             }}>
              {e.age === "A" ? <><img
            className={Mstyle.p}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          ></img></> : <>  <img
          className={Mstyle.p}
          src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
        ></img></>}
          
          <center>
            <p
              style={{ color: "white", marginTop: "10px", marginLeft: "30px" }}
            >
              {e.name}
            </p>
          </center>
        </div>
      
            </>
          )
        })}</>}

        <div>
          <Link to="/addpro" state={{email:loction.state , profile:pro}} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="156"
            height="156"
            fill="currentColor"
            className="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
            style={{marginTop:"140px"}} 
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
          </svg>
          </Link>
          <p style={{ color: "white", marginTop: "10px", marginLeft: "40px" }}>
            Add Profile
          </p>
        </div>
      </div>
      <center>
        <Button
          style={{
            color: "white",
            width: "30%",
            marginTop: "20px",
            height: "60px",
            backgroundColor: "black",
            fontSize: "20px",
          }}
        >
          Manage Profile
        </Button>
      </center>{" "}
    </div>
  );
}
