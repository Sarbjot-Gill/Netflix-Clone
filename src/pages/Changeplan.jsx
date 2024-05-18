import { Alert, Col, Row } from "react-bootstrap";
import Style from "../css/changeplan.module.css";
import Changeplanfooter from "./Changeplanfooter";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Accnavbar from "./Accnavbar";
import Modal from 'react-bootstrap/Modal';


export default function Changeplan() {
  const [plan, setPlan] = useState();
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [currentPlan , setCurrentPlan] = useState()
  let loction = useLocation();
  let currentPlann = loction.state.user.Plan;
  let data = loction.state.x
  let mail = loction.state.user.email
  console.log(data);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePlan = () => {
    fetch('http://127.0.0.1:3000/changeplan', 
    { method : "post" ,headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email : mail , currentPlan : currentPlan , newPlan : plan })})
    setCurrentPlan(plan)
    setSuccess(true)
     
      handleClose()
  }
  useEffect(() => {
    setPlan(currentPlann);
    setCurrentPlan(currentPlann)
  }, []);
  console.log(plan);
  return (
    <>
      <Accnavbar change ={true}  x = {data} />
      <div style={{ backgroundColor: "#f4f4f4" }}>
        <div
          style={{ marginLeft: "100px", marginTop: "15px", fontSize: "30px" }}
        >
          {success ? <Alert variant="success" style={{width:"1300px" , height:"70px"}}>
            <h3>Plan Change Success</h3>
          </Alert> : <></>}    
       
          <p>Change Streaming Plan</p>
        </div>

        <div style={{ marginLeft: "110px", marginRight: "100px" }}>
          {plan === "Mobile" ? (
            <>
              <Row className={`${Style.changeplanroww} `}>
                <Col className={`${Style.changeplancoll1} `} xs="2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="blue"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                    style={{ position: "absolute", marginRight: "220px", backgroundColor:"white" , borderRadius:"30px" }}
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  {plan === currentPlan ? (
                    <p>
                      CurrentPlan <br /> Mobile
                    </p>
                  ) : (
                    <p>Mobile</p>
                  )}
                </Col>
                <Col className={`${Style.changeplancol2} `}>
                  Good video quality in SD (480p). Watch ad-free on any phone or
                  tablet. Computer and TV not included. Download on 1 device.
                </Col>
                <Col xs="2" className={`${Style.changeplancol3} `}>
                  ₹149/month
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Row
                className={`${Style.changeplanrow} `}
                onClick={() => {
                  setPlan("Mobile");
                }}
              >
                <Col className={`${Style.changeplancol1} `} xs="2">
                  Mobile
                </Col>
                <Col className={`${Style.changeplancol2} `}>
                  Good video quality in SD (480p). Watch ad-free on any phone or
                  tablet. Computer and TV not included. Download on 1 device.
                </Col>
                <Col xs="2" className={`${Style.changeplancol3} `}>
                  ₹149/month
                </Col>
              </Row>
            </>
          )}
          {plan === "Basic" ? (
            <>
              <Row className={`${Style.changeplanroww} `}>
                <Col className={`${Style.changeplancoll1} `} xs="2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="blue"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                    style={{ position: "absolute", marginRight: "220px", backgroundColor:"white" , borderRadius:"30px" }}
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  {plan === currentPlan ? (
                    <p>
                      CurrentPlan <br /> Basic
                    </p>
                  ) : (
                    <p>Basic</p>
                  )}
                </Col>
                <Col className={`${Style.changeplancol2} `}>
                  Good video quality in SD (480p). Watch ad-free on any phone or
                  tablet. Computer and TV not included. Download on 1 device.
                </Col>
                <Col xs="2" className={`${Style.changeplancol3} `}>
                  ₹199/month
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Row
                className={`${Style.changeplanrow} `}
                onClick={() => {
                  setPlan("Basic");
                }}
              >
                <Col className={`${Style.changeplancol1} `} xs="2">
                  Basic
                </Col>
                <Col className={`${Style.changeplancol2} `}>
                  Good video quality in SD (480p). Watch ad-free on any phone or
                  tablet. Computer and TV not included. Download on 1 device.
                </Col>
                <Col xs="2" className={`${Style.changeplancol3} `}>
                  ₹199/month
                </Col>
              </Row>
            </>
          )}

          {plan === "Standard" ? (
            <>
              <Row className={`${Style.changeplanroww} `}>
                <Col className={`${Style.changeplancoll1} `} xs="2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="blue"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                    style={{ position: "absolute", marginRight: "220px", backgroundColor:"white" , borderRadius:"30px" }}
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  {plan === currentPlan ? (
                    <p>
                      CurrentPlan <br /> Standard
                    </p>
                  ) : (
                    <p>Standard</p>
                  )}
                </Col>
                <Col className={`${Style.changeplancol2} `}>
                  Good video quality in SD (480p). Watch ad-free on any phone or
                  tablet. Computer and TV not included. Download on 1 device.
                </Col>
                <Col xs="2" className={`${Style.changeplancol3} `}>
                  ₹499/month
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Row
                className={`${Style.changeplanrow} `}
                onClick={() => {
                  setPlan("Standard");
                }}
              >
                <Col className={`${Style.changeplancol1} `} xs="2">
                  Standard
                </Col>
                <Col className={`${Style.changeplancol2} `}>
                  Good video quality in SD (480p). Watch ad-free on any phone or
                  tablet. Computer and TV not included. Download on 1 device.
                </Col>
                <Col xs="2" className={`${Style.changeplancol3} `}>
                  ₹499/month
                </Col>
              </Row>
            </>
          )}
          {plan === "Premimum" ? (
            <>
              <Row className={`${Style.changeplanroww} `}>
                <Col className={`${Style.changeplancoll1} `} xs="2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="blue"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                    style={{ position: "absolute", marginRight: "220px", backgroundColor:"white" , borderRadius:"30px" }}
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  {plan === currentPlan ? (
                    <p>
                      CurrentPlan <br /> Premium
                    </p>
                  ) : (
                    <p>Premium</p>
                  )}
                </Col>
                <Col className={`${Style.changeplancol2} `}>
                  Good video quality in SD (480p). Watch ad-free on any phone or
                  tablet. Computer and TV not included. Download on 1 device.
                </Col>
                <Col xs="2" className={`${Style.changeplancol3} `}>
                  ₹649/month
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Row
                className={`${Style.changeplanrow} `}
                onClick={() => {
                  setPlan("Premimum");
                }}
              >
                <Col className={`${Style.changeplancol1} `} xs="2">
                  Premium
                </Col>
                <Col className={`${Style.changeplancol2} `}>
                  Good video quality in SD (480p). Watch ad-free on any phone or
                  tablet. Computer and TV not included. Download on 1 device.
                </Col>
                <Col xs="2" className={`${Style.changeplancol3} `}>
                  ₹649/month
                </Col>
              </Row>
            </>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "80px",
            }}
          >
            <center>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/acc" state={data}
              >
                <button
                  className="m-2"
                  style={{
                    background: "#ccc",
                    border: "0",
                    width: "80px",
                    height: "30px",
                  }}
                >
                  Back
                </button>
              </Link>
              <button
               onClick={handleShow}
                style={{
                  background: "lightblue",
                  border: "0",
                  width: "80px",
                  height: "30px",
                }}
              >
                Continue
              </button>
            </center>
          </div>
        </div>
        <Modal show={show} onHide={handleClose} centered>
       <div className="pb-4">
          <h2 className="mt-2 ms-2">Confirm Streaming Plan</h2>
          <div className="py-1" style={{backgroundColor:"#f2f2f2"}}>
           <div className="mt-2 ms-2" style={{color:"#6e6e6e"}}>
            <p>Current Plan <br />
            {currentPlan}</p>
            </div>
          <hr />
          <div className="ms-2">
            <p>New Plan <br />
            {plan}</p>
            </div>
          </div>
          <p className="pt-3 ps-3" >your Plan will Change on your Next payment</p>
          <center>
          <div>
            <button className="btn btn-light" onClick={handleClose}>Cancel</button>
            <button className="btn btn-dark" onClick={handlePlan}>Change</button>
          </div>
          </center>
        </div>       
      </Modal>
        <Changeplanfooter />
      </div>
    </>
  );
}
