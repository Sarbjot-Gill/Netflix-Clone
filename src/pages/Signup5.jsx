import Footer from "./Footer";
import Nnavbar from "./Navbar";
import { Button } from "react-bootstrap";
import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Signup5({a ,x}) {
  const [price , setPrice] = useState(0)
  function nextP(){
    x(3)
  }
  useEffect(() =>{ if(a === "Mobile"){
    setPrice("149")
  }else if(a === "Basic"){
    setPrice("200")
  }else if(a === "Standard"){
    setPrice("499")
  }else if(a === "Premimum"){
    setPrice("659")
  }
  console.log(a)},[] )
 
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
          <form >
            <input type="number" placeholder="Card Number"  style={{width:"100%" , height:"8vh"}} />
            <div className="row mt-2">
              <div className="col"><input type="text"  onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} placeholder="Expiration Date" style={{width:"100%" , height:"8vh"}}/></div>
              <div className="col"><input type="Number"    placeholder="CVV" style={{width:"100%" , height:"8vh"}}/></div>
            </div>
            <input type="text" className="mt-2" placeholder="Name on Card "  style={{width:"100%" , height:"8vh"}} />
            <div className="row mt-3" style={{backgroundColor:"#f4f4f4" ,height:"10vh",width:"100%" }}>
              <div className="col-8"><b><p className="mt-3" style={{marginBottom:"0"}}>₹{price}/month</p></b><p style={{color:"gray",marginTop:"0"}}>{a}</p></div>
              <div className="col-2">
              <p className="text-primary mt-4 m-5" onClick={nextP}><ul>Change</ul></p>
            </div>
            </div>
            <Link to="/member">
            <Button
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
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
