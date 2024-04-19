// import ReactPlayer from "react-player"
import { Col, Row } from "react-bootstrap";
import Hstyle from "../css/home.module.css";
import Mainlogo from "../assets/Money-Heist-Logo-PNG.png";
import { Link } from "react-router-dom";
export default function Homecard() {
  return (
    <div className={Hstyle.main}>
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=uGXB1PFg7E0'height="100%" width="100%" playing={true} controls={false}></ReactPlayer>*/}
      <Row className={Hstyle.mainrow}>
        <Col>
          <div className={Hstyle.con}>
            <img src={Mainlogo} className={Hstyle.logo}></img>
            <br></br>
            <h5 className="my-3" style={{ width: "500px", color: "white" }}>
              An unusual group of robbers attempt to carry out the most perfect
              robbery in Spanish history - stealing 2.4 billion euros from the
              Royal Mint of Spain.
            </h5>
            <Row style={{width:"379px"}}> 
              <Col > 
                {" "}
                <Link to="/play?link=https://www.youtube.com/watch?v=_InqQJRqGW4&t=6s">
                <button className={Hstyle.btn1}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-play-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                  </svg>{" "}
                  Play
                </button>
                </Link>
              </Col>
              <Col>
                {" "}
                <button className={Hstyle.btn2}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>{" "}
                  More info
                </button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col className={Hstyle.colleft}>
        <div className={Hstyle.line}></div>
        <div className={Hstyle.label}>
            
            <h5>U/A 16+</h5>
        </div>
        </Col>
      </Row>
    </div>
  );
}
