import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Membership() {
  return (
    <div>
      <h1 style={{ fontWeight: "bold" }}>Membership</h1>
      <p style={{ fontSize: "20px" }}>Plan Details</p>
      <Card>
        <Card.Body>
          <div style={{ marginLeft: "10px" }}>
            <p style={{ fontWeight: "600", fontSize: "20px" }}>Basic plan</p>
            <p style={{ fontSize: "20px" }}>
              720p video resolution, ad-free watching and more.
            </p>
            <hr></hr>
            <Link style={{textDecoration:"none",color:"black"}} to="/cplan">
            <Row>
              <Col>
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    padding: "0px",
                    marginBottom: "0px",
                  }}
                >
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
          </div>
        </Card.Body>
      </Card>
      <div>
        <p style={{ fontSize: "19px", marginTop: "30px" }}>Payment info</p>

        <Card>
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
                Next payment
              </p>
              <p
                style={{
                  marginLeft: "15px",
                  fontSize: "20px",
                  padding: "0px",
                  marginBottom: "0px",
                }}
              >
                13 May 2024
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
              <Link style={{textDecoration:"none",color:"black"}} to="/billingdetails">
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
                    View payment history
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
            </div>
          </Card.Body>
        </Card>
      </div>
      <Button
        style={{
          marginTop: "30px",
          backgroundColor: "transparent",
          color: "red",
          borderColor: "black",
          width:"100%",
          fontWeight:"600",
          height:"50px",
          fontSize:"18px"
        }}
      >
        Cancel Membership
      </Button>
    </div>
  );
}
