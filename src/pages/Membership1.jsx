import React from "react";
import Nnavbar from "./Navbar";
import Footer from "./Footer";
import { Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Mstyle from "../css/membership.module.css";

export default function ({p}) {
  function handleClick(){
    p(2)
  }
  function handlecolor(e){
    e.target.style.border = "red solid 2px"
  }
  return (
    <>
    <div>
     
      <hr></hr>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <div className="py-5">
          <div className="card-body ">
            <Row style={{width:"100%"}}>
              <Col style={{display:"flex",justifyContent:"center"}}>
                <div >
                <p
                  style={{
                    display: "flex",
                  }}
                >
                  STEP 1 OF 5
                </p>

                <h1
                  style={{
                    display: "flex",
                  }}
                >
                  What devices will
                </h1>
                <h1
                  style={{
                    display: "flex",
                  }}
                >
                  you be watching on?
                </h1>

                <p
                  style={{
                    display: "flex",
                  }}
                >
                  you can watch Netflix on any of these devices
                </p>
                <p
                  style={{
                    display: "flex",
                  }}
                >
                  Select all that apply

                </p>
                </div>
              </Col>

              <Col>
                <Row>
                  <Col >
                    <div className={`${Mstyle.colhov} card`}  onClick={handlecolor}>
                      <center>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="150px"
                          height="100px"
                          fill="currentColor"
                          class=" mt-3 bi bi-tv"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
                        </svg>
                        <h4>TV</h4>
                        <p>Internet connected TVs</p>
                      </center>
                    </div>
                  </Col>

                  <Col >
                    <div className={`${Mstyle.colhov} card`} >
                      <center>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="150px"
                          height="80px"
                          fill="currentColor"
                          class="mt-3 bi bi-phone"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                        </svg>
                        <h4> Phone </h4>
                        <p>Download the netflix app to enjoy</p>
                      </center>
                    </div>
                  </Col>

                  <Col >
                    <div className={`${Mstyle.colhov} card`} >
                      <center>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="150px"
                          height="100px"
                          fill="currentColor"
                          class=" mt-3 bi bi-laptop"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                        </svg>

                        <h4>Computer</h4>
                        <p>Desktop or laptop</p>
                      </center>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col >
                    <div className={`${Mstyle.colhov} card`} >
                      <center>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="150px"
                          height="100px"
                          fill="currentColor"
                          class="mt-3 bi bi-controller"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z" />
                          <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27" />
                        </svg>
                        <h4>Game Console</h4>
                        <p>Connected to the Internet</p>
                      </center>
                    </div>
                  </Col>

                  <Col >
                    <div className={`${Mstyle.colhov} card`} >
                      <center>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="150px"
                          height="100px"
                          fill="currentColor"
                          class=" mt-3 bi bi-cast"
                          viewBox="0 0 16 16"
                        >
                          <path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0" />
                          <path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086z" />
                        </svg>
                        <h4> Streaming Device </h4>
                        <p>Connects your TV to the Internet</p>
                      </center>
                    </div>
                  </Col>

                  <Col >
                    <div className={`${Mstyle.colhov} card`} >
                      <center>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="150px"
                          height="100px"
                          fill="currentColor"
                          class="mt-3 bi bi-tv-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2" />
                        </svg>
                        <h4>Cable Set Top Box</h4>
                        <p>From your cable provider</p>
                      </center>
                    </div>
                  </Col>
                  <hr></hr>
                  <h3>Something Else</h3>
                  <p>Enjoy Netflix with other internet conncted devices </p>
                </Row>
                <Button onClick={handleClick}
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    height: "60px",
                    backgroundColor: "red",
                    fontSize: "20px",
                  }}
                >
                  Next
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}
