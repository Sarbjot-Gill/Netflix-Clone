import Nnavbar from "./Navbar";
import Style from "../css/front.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Inputcard() {
  const [mail , setMail] = useState("")
  return (
    <>
      
        <div
          style={{
            background:
              'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg")',
            height: "95vh",
            boxShadow: "1000px",
          }}
        >
          <Nnavbar />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <center>
              {" "}
              <div className={Style.txtcard}>
                <b>
                  <h1 className={`${Style.txt} `} style={{fontWeight:"bolder",fontSize:"50px"}}>
                    Unlimited movies, TV shows and more
                  </h1>
                </b>
                <h4 className={Style.txt}>Watch anywhere. Cancel anytime.</h4>
                <h5 className={Style.txt}>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h5>
                <div >
                  <input
                    className={`${Style.inp} `}
                    placeholder="Email Adress"
                    type="email"
                    onChange={(e) => {
                     setMail(e.target.value)
                    }}
                  />
                  <Link
                    className="btn"
                    to={"signup?mail=" + mail}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      height: "50px",
                      width: "150px",
                      fontSize: "20px",
                      
                    }}
                
                  >
                   <b> Get Started</b>
                  </Link>
                </div>
              </div>
            </center>
          </div>
        </div>
    
    </>
  );
}
