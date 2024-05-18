import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Style from "../css/front.module.css";
import Nimg from "../assets/Logonetflix.png"
import { Link } from "react-router-dom";
export default function Accnavbar({change , x}) {
  let pro = x.otherpro
  return (
    <Navbar className="bg-transparent ">
      <Container>
        <Navbar.Brand href="#home"><Link to="/"><img src={Nimg} style={{height:"50px" , width:"150px"}}></img></Link></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end" style={{zIndex:"4"}}>
          {change ? <>
            <div className="nav-item dropdown">
                <p
                  className={` dropdown-toggle`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {x.profile.name}
                </p>
                <ul className="dropdown-menu dropdown-menu-dark">
                  {pro.map((e)=>{
                    return(
                      <>
                    <li onClick={(()=>{
                      let arr = {
                        email: x.email,
                        otherpro: "",
                        profile: e
                    };
                    let all = x.otherpro;
                    let opro = x.profile
                    all.push(opro)
                   all.splice(e,1)
                   arr.otherpro = all
                   navigate("/home" , {state:arr})
                    console.log(arr )
                    })}>
                  
                    {e.name}
                    
                  </li>
                  </>
                  )
                  })}
          
                  <li>
                  <Link className="dropdown-item" to="/acc" state={x}>
                      Account
                    </Link>
                  </li>
                  
                  {/* <li className="dropdown-item" onClick={logOut}>
                
                    Logout
                    
                  </li> */}
                </ul>
              </div>
          </> : <>
          <select className={Style.dropinp}>
     
     <option >
    
       English
     </option>
     <option >
    
    Hindi
  </option>
   </select>
   <Link to='/signin' className="btn mx-3" style={{ backgroundColor:"red", color:"white"}}> Sign in</Link>
   </>}
  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
