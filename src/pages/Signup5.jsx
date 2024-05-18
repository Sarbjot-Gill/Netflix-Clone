import Footer from "./Footer";
import Nnavbar from "./Navbar";
import { Button } from "react-bootstrap";
import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Signup5({a ,x,data}) {
  const navigate = useNavigate();
  const [price , setPrice] = useState(0)
  const [cnolabel , setCnolebel] = useState(false)
  function nextP(){
    x(3)
  }
  let date = new Date()
  let currentDate = {date : date.getUTCDate() , month : date.getUTCMonth() , year : date.getUTCFullYear()}
console.log(currentDate)
const email = data.email;
  useEffect(() =>{ if(a === "Mobile"){
    setPrice("149")
  }else if(a === "Basic"){
    setPrice("200")
  }else if(a === "Standard"){
    setPrice("499")
  }else if(a === "Premimum"){
    setPrice("659")
  }})
  const submitData = (e) =>{
    e.preventDefault()
    let card = {name : e.target.cname.value, cardnumber : e.target.cno.value , exdate :e.target.cdate.value , cvv :e.target.cvv.value}
    data.card = card
    data.date = currentDate
    console.log(data)
    if(e.target.cno.value.length <16){
      e.target.cno.style.border = "2px solid red"
      setCnolebel(true)
    }else{
    fetch('http://127.0.0.1:3000/data', 
    { method : "post" ,headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)})
     .then((response) =>response.json().then((dataa) => {
      console.log(dataa);
      if(dataa === "exist"){
        alert("user already exist")
      }else if(dataa === "success"){
        navigate("/member" , {state:email})
      }
    })
  )}
  }
 
  // }

 
  // function foco(){
  //   this.type='date';
  // }
  return (
    <>
      <Nnavbar />
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "150px",
        }}
      >
        <div className="mt-5" style={{ width: "500px" }}>
          <p className="mt-5" style={{ fontSize: "13px" }}>
            STEP <b>3</b> OF <b>3</b>
          </p>
          <h2>Set up your credit or debit card</h2>
          <div className="row" style={{width:"117px"}}>
            <div className="col">
            <IconContext.Provider value={{size:"2em"}}>
            <FaCcMastercard />
            </IconContext.Provider>
            </div>
            <div className="col">
            <IconContext.Provider value={{size:"2em"}}>
            <SiVisa />
            </IconContext.Provider>
              </div>
          </div>
          <form onSubmit={submitData}>
            <input type="number" placeholder="Card Number" name="cno" style={{width:"100%" , height:"8vh"}} required/>
           {cnolabel ? (<label className="text-danger" name="lableno">Card number must be more then 15 digits</label>) : (<></>)}  
            <div className="row mt-2">
              <div className="col"><input type="text" name="cdate" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} placeholder="Expiration Date" style={{width:"100%" , height:"8vh"}} required/></div>
              <div className="col"><input type="password"  name="cvv"  placeholder="CVV" style={{width:"100%" , height:"8vh"}} required/></div>
            </div>
            <input type="text" className="mt-2" name="cname" placeholder="Name on Card "  style={{width:"100%" , height:"8vh"}} required/>
            <div className="row mt-3" style={{backgroundColor:"#f4f4f4" ,height:"10vh",width:"100%" }}>
              <div className="col-8"><b><p className="mt-3" style={{marginBottom:"0"}}>₹{price}/month</p></b><p style={{color:"gray",marginTop:"0"}}>{a}</p></div>
              <div className="col-2">
              <p className="text-primary mt-4 m-5" onClick={nextP}><ul>Change</ul></p>
            </div>
            </div>
            <Button
            type="submit"
              style={{
                width: "100%",
                marginTop: "20px",
                height: "60px",
                backgroundColor: "red",
                fontSize: "20px",
              }}
             
            >
              Start MemberShip
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
