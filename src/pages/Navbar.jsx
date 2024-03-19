import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Style from "../css/front.module.css";
import Nimg from "../assets/Logonetflix.png"
export default function Nnavbar() {
  return (
    <Navbar className="bg-transparent ">
      <Container>
        <Navbar.Brand href="#home"><img src={Nimg} style={{height:"50px" , width:"150px"}}></img></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">

          <select className={Style.dropinp}>
     
            <option >
           
              English
            </option>
            <option >
           
           Hindi
         </option>
          </select>
          <button className="btn mx-3" style={{ backgroundColor:"red", color:"white"}}> Sign in</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
