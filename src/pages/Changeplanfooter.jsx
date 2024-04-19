import { Col, Row } from "react-bootstrap";

export default function Changeplanfooter() {
  return (
    <div className="card" style={{backgroundColor:"#f4f4f4",color: "black" }}>
      <div className="card-body">
        <p style={{marginLeft:"5%"}}>Questions? Contact us.</p>

        <Row style={{width:"80%" , marginLeft:"5%"}}> 
          <Col>
            <p>Audio and Subtitles</p>
            <p>Media Centre</p>
            <p>Privacy Statement</p>
            
          </Col>
          <Col>
            <p>Help Centre</p>
            <p>Jobs</p>
          
          </Col>
          <Col>
            <p>Gift Cards</p>
            <p>Cookie Preferences</p>
          
          </Col>
          <Col>
            <p>Investor Relations</p>
            <p>Terms of Use</p>
          
          </Col>
        </Row>
      </div>
    </div>
  )
}
