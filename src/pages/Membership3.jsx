import React from "react";
import Nnavbar from "./Navbar";
import Footer from "./Footer";
import { Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Mstyle from "../css/membership.module.css";
import { Link } from "react-router-dom";
export default function Membership3({p}) {

  return (
    <div>
      <Nnavbar />
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
            <Row style={{ width: "100%" }}>
              <Col style={{ display: "flex" }}>
                <div>
                  <p
                    style={{
                      display: "flex",
                    }}
                  >
                    STEP 3 OF 5
                  </p>

                  <h1
                    style={{
                      display: "flex",
                    }}
                  >
                    Will there be any
                  </h1>
                  <h1
                    style={{
                      display: "flex",
                    }}
                  >
                    children watching ?
                  </h1>

                  <p
                    style={{
                      display: "flex",
                    }}
                  >
                    <ul>
                      <li className={{ Color: "green" }}>
                        <h6>Child-friendly titles</h6>
                        <p>TV shows and movies carefully selected for them</p>
                      </li>
                      <li className={{ Color: "green" }}>
                        <h6>Browse by character</h6>
                        <p>Choose what to watch by their favorite character</p>
                      </li>
                      <li className={{ Color: "green" }}>
                        <h6>You're in control</h6>
                        <p>Parental controls to give you peace of mind</p>
                      </li>
                    </ul>
                  </p>
                  <img style={{height:"200px",width:"300px"}} src="https://occ-0-6503-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"></img>
                </div>
              </Col>

              <Col>
                <h6>Your profile</h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                <input
                  className={Mstyle.in}
                  type="text"
                  placeholder="name"
                ></input>
                <br></br>
                <h5>Add Profile?</h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-add"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                </svg>
                <input
                  className={Mstyle.in}
                  type="text"
                  placeholder="name"
                ></input>{" "}
                <br></br>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-add"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                </svg>{" "}
                <input
                  className={Mstyle.in}
                  type="text"
                  placeholder="name"
                ></input>
                <br></br>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-add"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                </svg>{" "}
                <input
                  className={Mstyle.in}
                  type="text"
                  placeholder="name"
                ></input>
                <br></br>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-add"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                </svg>{" "}
                <input
                  className={Mstyle.in}
                  type="text"
                  placeholder="name"
                ></input>
                <br></br>
                <p>Only people who live with you may use your account.</p>
                <Link to="/pro">
                <Button 
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
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
