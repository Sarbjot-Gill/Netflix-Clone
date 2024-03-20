import { Col, Row } from "react-bootstrap";

export default function Hcard2() {
  return (
    <div className="card" style={{ backgroundColor: "black", color: "white" }}>
      <div className="card-body">
        <Row style={{ height: "70vh" }}>
          <Col 
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <div>
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"></img>
              <Row
                style={{
                  border: "solid",
                  position: "absolute",
                  width: "400px",
                  marginLeft: "100px",
                  bottom: "80px",
                  backgroundColor: "black",
                  borderRadius: "10px",
                  height: "14%",
                }}
              >
                <Col sm={2}>
                  <img
                    style={{ width: "40px" }}
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  ></img>
                </Col>
                <Col>
                  <h6 className="mt-3 " style={{ padding: "0", margin: "0" }}>
                    Stranger Things
                  </h6>
                  <h6 className="text-primary">Downloading...</h6>
                </Col>
                <Col></Col>
              </Row>
            </div>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "600px" }}>
              <p
                style={{
                  fontSize: "50px",
                  fontWeight: "bolder",
                }}
              >
                Download your shows to watch offline
              </p>
              <p style={{ fontSize: "22px" }}>
                Save your favourites easily and always have something to watch.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
