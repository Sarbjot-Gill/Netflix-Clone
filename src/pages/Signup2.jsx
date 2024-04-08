import Nnavbar from "./Navbar";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
export default function Signup2({f}) {
    
    function handleClick(){
        f(3);
    }
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
          <div className="card-body " >
            <center>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="red"
                className="bi bi-check-circle-fill mb-4"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
            </center>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              STEP 2 OF 3
            </p>
            <center>
              <h2>Choose your plan.</h2>
            </center>

            <p style={{ marginTop: "20px" , fontSize:"18px",width:"250px" }}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="red"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
              No commitments, cancel anytime
            </p>

            
            <p style={{ marginTop: "20px", fontSize:"18px",width:"300px"  }}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="red"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
              Everything on Netflix for one low price</p>
            <p style={{ marginTop: "20px", fontSize:"18px",width:"350px"  }}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="red"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
              No ads and no extra fees. Ever.
            </p>
            <Button
              style={{
                width: "100%",
                marginTop: "20px",
                height: "60px",
                backgroundColor: "red",
                fontSize: "20px",
              }}
              onClick={handleClick}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
