import { Col, Row } from "react-bootstrap";
import Nnavbar from "./Navbar";
import Style from "../css/changeplan.module.css";
import Changeplanfooter from "./Changeplanfooter";
import { Link } from "react-router-dom";

export default function Changeplan() {
  return (
    <>
      <Nnavbar />
      <div style={{ backgroundColor: "#f4f4f4" }}>
        <div
          style={{ marginLeft: "100px", marginTop: "15px", fontSize: "40px" }}
        >
          <p>Change Streaming Plan</p>
        </div>
        <div style={{ marginLeft: "110px", marginRight: "100px" }}>
          <Row className={`${Style.changeplanrow} `}>
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

          <Row className={`${Style.changeplanrow} `}>
            <Col className={`${Style.changeplancol1} `} xs="2">
              Basic
            </Col>
            <Col className={`${Style.changeplancol2} `}>
              Good video quality in HD (720p). Watch ad-free on any phone,
              tablet, computer or TV. Download on 1 device.
            </Col>
            <Col xs="2" className={`${Style.changeplancol3} `}>
              ₹199/month
            </Col>
          </Row>
          <Row className={`${Style.changeplanrow} `}>
            <Col className={`${Style.changeplancol1} `} xs="2">
              Standard
            </Col>
            <Col className={`${Style.changeplancol2} `}>
              Great video quality in Full HD (1080p). Watch ad-free on any
              phone, tablet, computer or TV. Download on 2 devices.
            </Col>
            <Col xs="2" className={`${Style.changeplancol3} `}>
              ₹499/month
            </Col>
          </Row>
          <Row className={`${Style.changeplanrow} `}>
            <Col className={`${Style.changeplancol1} `} xs="2">
              Premium
            </Col>
            <Col className={`${Style.changeplancol2} `}>
              Our best video quality in Ultra HD (4K) and HDR. Spatial audio
              available. Watch ad-free on any phone, tablet, computer or TV.
              Download on 6 devices.
            </Col>
            <Col xs="2" className={`${Style.changeplancol3} `}>
              ₹649/month
            </Col>
          </Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "80px",
            }}
          >
            <center>
            <Link  style={{textDecoration:"none",color:"black"}} to="/acc">
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
        <Changeplanfooter />
      </div>
    </>
  );
}
