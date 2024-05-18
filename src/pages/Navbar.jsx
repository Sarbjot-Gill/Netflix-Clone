import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Style from "../css/front.module.css";
import Nimg from "../assets/Logonetflix.png";
import { Link } from "react-router-dom";
export default function Nnavbar({mail ,change}) {
  return (
    <Navbar className="bg-transparent ">
      <Container>
        <Navbar.Brand href="#home"><Link to="/"><img src={Nimg} style={{height:"50px" , width:"150px"}}></img></Link></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end" style={{zIndex:"4"}}>
          {change ? <> <h3>{mail}</h3></> : <>
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
