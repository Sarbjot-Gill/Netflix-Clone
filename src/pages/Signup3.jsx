import Nnavbar from "./Navbar";

import { Button, Col, Row } from "react-bootstrap";
import Footer from "./Footer";
import Ustyle from "../css/sign.module.css";
import { useEffect, useState } from "react";

export default function Signup3({x,y}) {
  const[shadow, setShadow] = useState(1)
  function stepClick(){
    x(4)
    y(shadow)
  }
 useEffect(()=>{
 
  if(shadow === 1){
    document.getElementById('one').className = "card shadow-lg ";
    document.getElementById('two').className = "card";
    document.getElementById('three').className = "card";
    document.getElementById('four').className = "card";
    document.getElementById('ticone').style.visibility = "visible";
    document.getElementById('tictwo').style.visibility = "hidden";
    document.getElementById('ticthree').style.visibility = "hidden";
    document.getElementById('ticfour').style.visibility = "hidden";

  }
  else if(shadow === 2){
    document.getElementById('one').className = "card ";
    document.getElementById('two').className = "card shadow-lg ";
    document.getElementById('three').className = "card";
    document.getElementById('four').className = "card";
    document.getElementById('ticone').style.visibility = "hidden";
    document.getElementById('tictwo').style.visibility = "visible";
    document.getElementById('ticthree').style.visibility = "hidden";
    document.getElementById('ticfour').style.visibility = "hidden";
  }
  else if(shadow === 3){
    document.getElementById('one').className = "card ";
    document.getElementById('two').className = "card ";
    document.getElementById('three').className = "card shadow-lg ";
    document.getElementById('four').className = "card";
    document.getElementById('ticone').style.visibility = "hidden";
    document.getElementById('tictwo').style.visibility = "hidden";
    document.getElementById('ticthree').style.visibility = "visible";
    document.getElementById('ticfour').style.visibility = "hidden";
  }
  else if(shadow === 4){
    document.getElementById('one').className = "card ";
    document.getElementById('two').className = "card ";
    document.getElementById('three').className = "card ";
    document.getElementById('four').className = "card shadow-lg ";
    document.getElementById('ticone').style.visibility = "hidden";
    document.getElementById('tictwo').style.visibility = "hidden";
    document.getElementById('ticthree').style.visibility = "hidden";
    document.getElementById('ticfour').style.visibility = "visible";
  }
 },[shadow])
  return (
    <div>
      <Nnavbar />
      <hr></hr>
      <div style={{ marginTop: "50px",marginBottom:"100px" }}>
        <div style={{ marginLeft: "200px" }}>
          <p style={{ fontSize: "13px", margin: "0px" }}>
            STEP <b>2</b> OF <b>3</b>
          </p>
          <h2>Choose the plan that’s right for you</h2>
          <Row style={{ width: "90%" , marginTop:"50px"}}>
            <Col style={{paddingRight:"0"}} onClick={() =>{
              setShadow(1)
            }} >
              <div id="one"  className="card " style={{cursor:"pointer"}} >
                <div>
                  <div className={Ustyle.colone}>
                    <h5 className="pt-2 px-2">Mobile</h5>
                    <h6 className="px-2">480p</h6>
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
                id="ticone"
                style={{marginLeft:"90%", marginBottom:"10px",visibility:"hidden"}}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
                  </div>
                  <div className="card-body">
                    <p className={Ustyle.txt1}> Monthly Price</p>
                    <p>149</p>
                    <hr />
                    <p className={Ustyle.txt1}>Video and sound quality</p>
                    <p>Fair</p>
                    <hr />
                    <p className={Ustyle.txt1}> Resolution</p>
                    <p>480p</p>
                    <hr />
                    <p className={Ustyle.txt1}> Supported devices</p>
                    <p>Mobile phone, tablet</p>
                    <hr />
                    <p className={Ustyle.txt1}>
                      {" "}
                      Devices your household can watch at the same time
                    </p>
                    <p>1</p>
                    <hr />
                    <p className={Ustyle.txt1}> Download devices</p>
                    <p>1</p>
                   
                  </div>
                </div>
              </div>
            </Col>
            <Col style={{paddingRight:"0"}}onClick={() =>{
              setShadow(2)
            }} >
              <div className="card" id="two" style={{cursor:"pointer"}} >
                <div>
                  <div className={Ustyle.coltwo} onClick={() =>{
              setShadow(2)
            }}>
                    <h5 className="pt-2 px-2">Basic</h5>
                    <h6 className="px-2">720p</h6>
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
                id="tictwo"
                style={{marginLeft:"90%", marginBottom:"10px",visibility:"hidden"}}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
                  </div>
                  <div className="card-body">
                    <p className={Ustyle.txt1}> Monthly Price</p>
                    <p>₹199</p>
                    <hr />
                    <p className={Ustyle.txt1}>Video and sound quality</p>
                    <p>Good</p>
                    <hr />
                    <p className={Ustyle.txt1}> Resolution</p>
                    <p>720p (HD)</p>
                    <hr />
                    <p className={Ustyle.txt1}> Supported devices</p>
                    <p>TV, computer, mobile phone, tablet</p>
                    <hr />
                    <p className={Ustyle.txt1}>
                      {" "}
                      Devices your household can watch at the same time
                    </p>
                    <p>1</p>
                    <hr />
                    <p className={Ustyle.txt1}> Download devices</p>
                    <p>1</p>
                    
                  </div>
                </div>
              </div>
            </Col>
            <Col style={{paddingRight:"0"}} onClick={() =>{
              setShadow(3)
            }}>
              <div id="three" className="card" style={{cursor:"pointer"}}>
                <div>
                  <div className={Ustyle.colthree}>
                    <h5 className="pt-2 px-2">Standard</h5>
                    <h6 className="px-2">1080p</h6>
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
                id="ticthree"
                style={{marginLeft:"90%", marginBottom:"10px",visibility:"hidden"}}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
                  </div>
                  <div className="card-body">
                    <p className={Ustyle.txt1}> Monthly Price</p>
                    <p>₹499</p>
                    <hr />
                    <p className={Ustyle.txt1}>Video and sound quality</p>
                    <p>Great</p>
                    <hr />
                    <p className={Ustyle.txt1}> Resolution</p>
                    <p>1080p (Full HD)</p>
                    <hr />
                    <p className={Ustyle.txt1}> Supported devices</p>
                    <p>Mobile phone, tablet</p>
                    <hr />
                    <p className={Ustyle.txt1}>
                      {" "}
                      Devices your household can watch at the same time
                    </p>
                    <p>2</p>
                    <hr />
                    <p className={Ustyle.txt1}> Download devices</p>
                    <p>2</p>
                  
                  </div>
                </div>
              </div>
            </Col>
            <Col style={{paddingRight:"0"}} onClick={() =>{
              setShadow(4)
            }}>
              <div id="four" className="card" style={{cursor:"pointer"}}>
                <div>
                  <div className={Ustyle.colfour}>
                    <h5 className="pt-2 px-2">Premium</h5>
                    <h6 className="px-2">4K + HDR</h6>
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
                id="ticfour"
                style={{marginLeft:"90%", marginBottom:"10px",visibility:"hidden"}}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
                  </div>
                  <div className="card-body">
                    <p className={Ustyle.txt1}> Monthly Price</p>
                    <p>₹649</p>
                    <hr />
                    <p className={Ustyle.txt1}>Video and sound quality</p>
                    <p>Best</p>
                    <hr />
                    <p className={Ustyle.txt1}> Resolution</p>
                    <p>4K (Ultra HD) + HDR</p>
                    <hr />
                    <p className={Ustyle.txt1}> Supported devices</p>
                    <p>Mobile phone, tablet</p>
                    <hr />
                    <p className={Ustyle.txt1}>
                      {" "}
                      Devices your household can watch at the same time
                    </p>
                    <p>4</p>
                    <hr />
                    <p className={Ustyle.txt1}> Download devices</p>
                    <p>6</p>
                    
                  </div>
                </div>
              </div>
            </Col>
          </Row>
         
          <Button
              style={{
                width: "30%",
                marginTop: "60px",
                height: "60px",
                backgroundColor: "red",
                fontSize: "20px",
                marginLeft:"350px"
              }}
              onClick={stepClick}
              
            >
              Next
            </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
