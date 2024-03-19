import Nnavbar from "./Navbar";
import Style from "../css/front.module.css";
export default function Inputcard() {
  return (
    <>
  
    <div
      style={{
        backgroundImage:
          'url("https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg")',
        height: "95vh",
        boxShadow: "1000px",
      }}
    >  
      <Nnavbar />
      <center>
        {" "}
        <div className={Style.txtcard}>
          <b>
            <h1 className={`${Style.txt} fs-1 bold`}>
              Unlimited movies, TV shows and more
            </h1>
          </b>
          <h4 className={Style.txt}>Watch anywhere. Cancel anytime.</h4>
          <h5 className={Style.txt}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h5>
          <div>
            <input
              className={`${Style.inp}`}
              placeholder="Email Adress"
              type="text"
            />
            <button
              className="btn"
              style={{
                backgroundColor: "red",
                color: "white",
                height: "50px",
                width: "150px",
                fontSize: "20px",
              }}
            >
              
              Get Started
            </button>
          </div>
        </div>
      </center>
    </div>
    
    </>
  );
}
