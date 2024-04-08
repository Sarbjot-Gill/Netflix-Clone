import Footer from "./Footer";
import Nnavbar from "./Navbar";
import Sstyle from "../css/sign.module.css"

export default function Sign() {
  return (
    <div className={Sstyle.back}
    >
      <Nnavbar />
      <div className={Sstyle.fflex}
      >
        <div
          className={`${Sstyle.ccard} `}
          
        >
          <div className="card-body" style={{width:"350px" ,marginLeft:"50px" ,marginTop:"40px",color:"white"}}><h2>Sign In</h2>
          <div style={{marginTop:"30px"}}>
            <form>
                <input className={`${Sstyle.inp} bg-transparent`} placeholder="Email"  type="text"/>
                <input  className={`${Sstyle.inp} bg-transparent`}placeholder="Password" type="password"/>
                <button className="btn " style={{width:"100%", backgroundColor:"red",color:"white",marginBottom:"20px"}}>Sign In</button>
            </form>
            <center><p>Forget Password?</p></center>
          </div>
          <div style={{marginTop:"50px"}}>
            <input type="checkbox" style={{ transform: 'scale(1.7)' , marginRight:"15px" , marginBottom:"20px"}}></input>
            <label>Remember Me</label>
            <p>New to Netflix <b>Sign Up Now</b></p>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
