import { Col, Row } from "react-bootstrap";

export default function Hcard4() {
  return (
    <div className="card" style={{backgroundColor:"black" , color:"white"}} >
        <div className="card-body">
            <Row style={{height:"70vh"}}>
           
                <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <img src="https://occ-0-6503-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d">
                        </img>  
                       
                </Col>
                <Col style={{marginTop:"10%"}}>  <center>
                 <div style={{fontSize:"50px", fontWeight:"bolder"}}>Create profiles for kids</div></center>
                <h4 style={{marginLeft:"90px" , marginTop:"10px"}}>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h4>
                </Col>
            </Row>
             </div>
    </div>
  )
}