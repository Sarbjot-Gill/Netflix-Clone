import { Col, Row } from "react-bootstrap";
import Nnavbar from "./Navbar";
import { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";

export default function List() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);
  const [like , setLike] = useState(false)
  const [like2 , setLike2] = useState(false)
  const [like3 , setLike3] = useState(false)
  const [enter , setEnter] = useState(false)
  let loction = useLocation()
  let navigate = useNavigate()
   let profile = loction.state.profile
  // console.log(loction.state)
  let arr = [like , like2 , like3]
  const handleClick = () => {
    if(like === false || like2 === false || like3 === false){
      alert("pls select three items")
    }else{
      profile.list = arr
      console.log(profile)
      fetch('http://127.0.0.1:3000/addlist', 
      { method : "post" ,headers: {
  
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:loction.state.email,index:loction.state.index,profile:profile})})
      .then(navigate("/pro" , {state:loction.state.email}))
    }
  }
  useEffect(() => {
    fetch("http://127.0.0.1:3000/content", { method: "GET" }).then((response) =>
      response.json().then((dataa) => {
        setData(dataa);
        setLoad(false);
      })
    );
  }, []);
  return (
    <>
      {load ? (
        <>
          {" "}
          <h1>Loading</h1>
        </>
      ) : (
        <div style={{ marginLeft: "120px", marginRight: "120px" }}>
          <Nnavbar />
          <hr></hr>
          <Row>
            <Col xs="5">
              <h1 style={{ fontWeight: "bold", marginRight: "40px" }}>
                Test, select 3 you like.
              </h1>
              <p style={{ fontWeight: "600", marginTop: "20px" }}>
                This helps us to find TV shows and movies you’ll love. Select
                the ones you like.
              </p>
            </Col>
            <Col style={{ marginTop: "30px" }} xs="7">
              <Row>
                {data.map((e,index) => {
                  return (
                    <>
                      <Col style={{ padding: "0" }}>
                        <div
                          style={{
                            backgroundImage: `url(${e.thumbnail})`,
                            marginTop: "5px",
                            width: "150px",
                            height: "100px",
                            borderRadius: "5px",
                            backgroundSize: "150px 100px",
                            cursor:"pointer"
                          }}
                          onClick={() => {
                            if(like === false){
                              setLike(e);
                            }else if(like2 === false){
                              setLike2(e);
                            }else if(like3 === false){
                              setLike3(e);
                              
                            }
                            
                          }}
                          onMouseEnter={() => {
                            setEnter(index)
                          }}
                          onMouseLeave={() => {
                            setEnter(false)
                          }}
                        >
                            {like === e ? <>
                                <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
                              height:"100%"
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="26"
                              fill="currentColor"
                              className="bi bi-hand-thumbs-up-fill"
                              style={{ marginTop: "38px", color: "white" }}
                              viewBox="0 0 16 16"
                            >
                              <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                            </svg>
                            
                          </div>
                            </> : <></>}
                            {like2 === e ? <>
                                <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
                              height:"100%"
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="26"
                              fill="currentColor"
                              className="bi bi-hand-thumbs-up-fill"
                              style={{ marginTop: "38px", color: "white" }}
                              viewBox="0 0 16 16"
                            >
                              <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                            </svg>
                            
                          </div>
                            </> : <></>}
                            {like3 === e ? <>
                                <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
                              height:"100%"
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="26"
                              fill="currentColor"
                              className="bi bi-hand-thumbs-up-fill"
                              style={{ marginTop: "38px", color: "white" }}
                              viewBox="0 0 16 16"
                            >
                              <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                            </svg>
                            
                          </div>
                            </> : <></>}
                            {enter === index ? <>
                                <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
                              height:"100%"
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="26"
                              fill="currentColor"
                              className="bi bi-hand-thumbs-up-fill"
                              style={{ marginTop: "38px", color: "white" }}
                              viewBox="0 0 16 16"
                            >
                              <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                            </svg>
                            
                          </div>
                            </> : <></>}
                          
                          {/* <img src={e.thumbnail} style={{marginTop:"5px",width:"150px",height:"100px",borderRadius:"5px"}}></img> */}
                        </div>
                      </Col>
                      
                    </>
                  );
                })}
                
              </Row>
              <button style={{background:"#ccc",border:"0",width:"85px",height:"35px",marginTop:"50px",marginLeft:"300px"}} onClick={handleClick}>done</button>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}