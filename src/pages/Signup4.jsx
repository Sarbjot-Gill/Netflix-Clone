import Footer from "./Footer";
import Nnavbar from "./Navbar";

export default function Signup4({x}) {
  function nextP(){
    x(5)
  }
  return (
    <>
      <Nnavbar />
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom:"150px"
        }}
      >
        <div className="mt-5">
            <center>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="red"
            className="bi bi-shield-lock"
            viewBox="0 0 16 16"
          >
            <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
            <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415" />
          </svg>
          <p className="mt-5" style={{ fontSize: "13px", }}>
            STEP <b>3</b> OF <b>3</b>
            
          </p>
          <h2>Choose how to pay</h2>
          <p style={{fontSize:"18px",width:"500px"}}>Your payment is encrypted and you can change your payment method at anytime.</p>
          <h6>Secure for peace of mind.<br/>
Cancel easily online.</h6>
          </center>
          <div>
            <div className="card mb-2" onClick={nextP} style={{height:"60px",border:"solid grey 1px"}}>
                <div className="card-body">
                    <p>Credit or Debit Card</p>
                </div>
            </div>
            <div className="card" style={{height:"60px",border:"solid grey 1px"}}>
                <div className="card-body">
                    <p>UPI AutoPay</p>
                </div>
            </div>
            

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
