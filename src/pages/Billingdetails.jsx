import { Card, Table } from "react-bootstrap";
import Nnavbar from "./Navbar";
import Changeplanfooter from "./Changeplanfooter";

export default function Billingdetails() {
  return (
    <>
      <div style={{ backgroundColor: "#f4f4f4" }}>
        <Nnavbar />
        <div style={{ marginLeft: "150px" }}>
          <div style={{ fontSize: "35px" }}>
            <p>Billing Details</p>
          </div>
          <div style={{ marginTop: "30px", marginRight: "100px" }}>
            <p>YOUR MEMBERSHIP</p>
            <Card>
              <Card.Body>
                <p style={{ margin: "0", fontWeight: "500" }}>Plan</p>
                <p style={{ margin: "0" }}>Basic</p>
                <p>₹199/month</p>
                <p style={{ margin: "0", fontWeight: "500" }}>
                  Next billing date
                </p>
                <p>14 May 2024</p>
              </Card.Body>
            </Card>
          </div>
          <div
            style={{
              marginTop: "50px",
              marginRight: "100px",
              marginBottom:"100px"
              
            }}
          >
            <Table style={{backgroundColor:"#f4f4f4"}} >
              <tbody>
                <tr>
                  <td>Date</td>
                  <td>Description</td>
                  <td>Service period</td>
                  <td>Payment method</td>
                  <td>Subtotal</td>
                  <td>Total</td>
                </tr>
                <tr>
                  <td>14/04/24</td>
                  <td>Streaming Service</td>
                  <td>14/04/24—13/05/24</td>
                  <td>s•••@oksbi</td>
                  <td>₹168.64 (+₹30.36 IGST)</td>
                  <td>₹199</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <Changeplanfooter/>
      </div>
    </>
  );
}
