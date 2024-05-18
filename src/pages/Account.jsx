import { Col, Row } from "react-bootstrap";
import Overview from "./Overview";
import Membership from "./Membership";
import Security from "./Security";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Style from "../css/account.module.css";
import Accnavbar from "./Accnavbar";

export default function Account() {
  const[page,setPage] = useState(1)
  const[user,setUser] = useState()
  const[Loading,setLoading] = useState(true)
  let loction = useLocation()
  let data = loction.state
  let change = true;
  function getData(data){
    setPage(data)
  }
  useEffect(() => {
    fetch('http://127.0.0.1:3000/acc', 
    { method : "post" ,headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email:data.email})})
    .then((response) => response.json().then((res) => {
      setUser(res[0])
      setLoading(false)
    }))
  }, [])
  return (
    <>
    {Loading ? <h1>loading</h1> : <>
    <Accnavbar change ={change}  x = {data} />
    <Row className="mt-3" style={{width:"100%"}}>
      <Col style={{ display: "flex", justifyContent: "center" }} xs={4}>
        
        <div  style={{marginLeft:"150px"}}>
        <Link  style={{textDecoration:"none",color:"black"}} to="/home">
          <p className={Style.black}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left mx-1"
              viewBox="0 0 16 16"
            >
              <path
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
            Back to Netflix
          </p>
          </Link>
          <div className="mt-5" style={{cursor:"pointer"}} onClick={()=>{setPage(1)}}>
            <p className={Style.black}
              style={{width: "250px", fontWeight: "600" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-house-door mx-2"
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
              </svg>
              Overview
            </p>
          </div>
          <div style={{cursor:"pointer"}} onClick={()=>{setPage(2)}}>
            <p className={Style.black} style={{ width: "250px", fontWeight: "600",marginTop:"20px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-credit-card mx-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
              Membership
            </p>
          </div>
          <div style={{cursor:"pointer"}} onClick={()=>{setPage(3)}}>
            <p className={Style.black} style={{ width: "250px", fontWeight: "600",marginTop:"20px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-shield-check mx-2"
                viewBox="0 0 16 16"
              >
                <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
              </svg>
              Security
            </p>
          </div>
        </div>
      </Col>
      <Col>
      {page === 1 && (  <Overview f= {getData} user = {user} x = {data}/>)}
      {page === 2 && (  <Membership/>)}
      {page === 3 && (  <Security/>)}
      
      </Col>
    </Row>
  </>}
  </>
  );
}
