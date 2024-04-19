import { Card, Col, Row } from "react-bootstrap";
import Style from "../css/account.module.css";
import { Link } from "react-router-dom";

export default function Overview({f}) {
  function handleClick (){
    f(2)
  }

  return (
    <>
      <div>
        <h1 style={{ fontWeight: "bold" }}>Account</h1>
        <p style={{ fontSize: "19px" }}>Membership details</p>

        <Card>
          <div className={`${Style.p} `}>
            <p className="mt-1">Member Since April 2024</p>
          </div>
          <Card.Body>
            <div>
              <p
                style={{
                  fontWeight: "600",
                  marginLeft: "15px",
                  fontSize: "20px",
                  padding: "0px",
                  marginBottom: "0px",
                }}
              >
                Basic plan
              </p>
              <p
                style={{
                  marginLeft: "15px",
                  fontSize: "20px",
                  padding: "0px",
                  marginBottom: "0px",
                }}
              >
                Next payment: 13 May 2024
              </p>
              <p
                style={{
                  marginLeft: "15px",
                  fontSize: "20px",
                  padding: "0px",
                  marginBottom: "0px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-credit-card   "
                  style={{ marginRight: "10px" }}
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>{" "}
                ss@sbi
              </p>
              <hr></hr>
              <Row>
                <Col style={{cursor:"pointer"}} onClick={handleClick}>
                  <p
                    style={{
                      fontWeight: "600",
                      marginLeft: "15px",
                      fontSize: "20px",
                      padding: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    Manage membership
                  </p>
                  
                </Col>
                
                <Col>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-caret-right-fill"
                    style={{ marginLeft: "350px" }}
                    viewBox="0 0 16 16"
                  >
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="mt-4">
        <p style={{ fontSize: "19px" }}>Quick links</p>
        <Card>
          <Card.Body>
            <Link style={{textDecoration:"none",color:"black"}} to="/cplan">
            <Row>
              <Col>
                <p
                  style={{
                    fontWeight: "600",
                    marginLeft: "15px",
                    fontSize: "20px",
                    padding: "0px",
                    marginBottom: "0px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-send-plus"
                    style={{ marginRight: "20px" }}
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z" />
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5" />
                  </svg>
                  Change plan
                </p>
              </Col>
              <Col>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  style={{ marginLeft: "350px" }}
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </Col>
            </Row>
            </Link>
            <hr></hr>
            <Link style={{textDecoration:"none",color:"black"}} to="/managepayment">
            <Row>
              <Col>
                <p
                  style={{
                    fontWeight: "600",
                    marginLeft: "15px",
                    fontSize: "20px",
                    padding: "0px",
                    marginBottom: "0px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-credit-card-2-back"
                    style={{ marginRight: "20px" }}
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1" />
                  </svg>
                  Manage payment method
                </p>
              </Col>
              <Col>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  style={{ marginLeft: "350px" }}
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </Col>
            </Row>
            </Link>
            <hr></hr>
            <Link style={{textDecoration:"none",color:"black"}} to="/changepassword">
            <Row>
              <Col>
                <p
                  style={{
                    fontWeight: "600",
                    marginLeft: "15px",
                    fontSize: "20px",
                    padding: "0px",
                    marginBottom: "0px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-person-lock"
                    style={{ marginRight: "20px" }}
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                  </svg>
                  Update password
                </p>
              </Col>
              <Col>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  style={{ marginLeft: "350px" }}
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </Col>
              
            </Row>
            </Link>
          </Card.Body>
        </Card>
        
      </div>
    </>
  );
}
