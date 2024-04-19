import { Card, Col, Row } from "react-bootstrap";
import Nnavbar from "./Navbar";
import Style from "../css/account.module.css";
import { Link } from "react-router-dom";

export default function Managepayment() {
  return (
    <>
      <Nnavbar />
      <Link  style={{textDecoration:"none",color:"black"}} to="/acc">
      <div style={{ marginLeft: "80px", marginTop: "20px", fontWeight: "500",width:"150px",cursor:"pointer" }}>
        <p className={Style.black}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-left mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
          </svg>
          Account
        </p>
      </div>
      </Link>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="currentColor"
          className="bi bi-shield-lock"
          viewBox="0 0 16 16"
        >
          <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
          <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415" />
        </svg>
      </div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        Manage payment method
      </h1>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        Control how you pay for your membership.
      </p>

      <Card
        style={{
          marginLeft: "300px",
          marginRight: "300px",
          marginTop: "40px",
          height: "70px",
        }}
      >
        <Card.Body>
          <Row>
            <Col xs="1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-credit-card   "
                style={{ marginRight: "10px" }}
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
            </Col>
            <Col
              xs="8"
              style={{ marginTop: "8px", fontWeight: "500", fontSize: "15px" }}
            >
              <p>ss**@sbi</p>
            </Col>
            <Col xs="2">
              <button className={Style.update}  style={{backgroundColor:"white",height:"35px",width:"100px",borderRadius:"5px",marginTop:"3px"}}>Update</button>
            </Col>
            <Col xs="1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                style={{marginTop:"6px"}}
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      
      <p className={Style.black} style={{ marginLeft:"650px", marginTop: "40px",fontWeight:"600",width:"220px",paddingLeft:"15px",cursor:"pointer" }}>Change Payment Method</p>
    </>
  );
}
