import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Nimg from "../assets/Logonetflix.png";
import Hstyle from "../css/home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Homenavbar({x}) {
  const navigate = useNavigate()
  
  let pro = x.otherpro
  const [search , setSearch] = useState(false)
  function nextPagetv(){
    navigate("/tv" , {state:{type:"Tv Show",profile : x}})
  } 
  function nextPagemov(){
    navigate("/tv" , {state:{type:"Movie",profile : x}})
  } 
  function handleSearch(){
    setSearch(true)
    
  }
  function handleSearchClose(){
    setSearch(false)
    console.log(search)
    
  }
  function logOut (){
    axios.get("http://127.0.0.1:3000/logout")
    navigate("/")
  }
  
  useEffect(()=>{},[search])

  return (
    <div style={{width:"100%"}}>
      <Navbar variant="dark" style={{ position: "absolute", width: "100%" }}>
        <Container style={{ marginLeft: "50px", width: "190%" }}>
          <Navbar.Brand>
            <Link to="/home">
              <img src={Nimg} style={{ height: "30px", width: "100px" }}></img>
            </Link>
          </Navbar.Brand>
          <Nav style={{ marginRight: "200px" }}>
            <Nav.Link className={Hstyle.w}> <Link style={{textDecoration:"none",color:"white"}} to="/home" state={x}>Home</Link></Nav.Link>
              <Nav.Link  className={Hstyle.w} onClick={nextPagetv}>Tv Show</Nav.Link>
              <Nav.Link className={Hstyle.w} onClick={nextPagemov}>Movies</Nav.Link>
    
            <Nav.Link className={Hstyle.w}>New & Popular</Nav.Link>
            <Nav.Link className={Hstyle.w}>My List</Nav.Link>
          </Nav>
          <Nav>
          {search ? (   <button style={{height:"30px",marginTop:"8px"}} onClick={handleSearchClose}>Close</button>):(<></>)}
          <Nav.Link onClick={handleSearch}>
              {search ? (<>
              <input type="text"></input>
              </>):(     <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>)}
            
            </Nav.Link>
            <Nav.Link className={`${Hstyle.w} mx-2`}>
              Children</Nav.Link>
            <Nav.Link >
               <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                className="bi bi-bell-fill mx-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
            </Nav.Link>
            <Nav.Link>
              <li className="nav-item dropdown">
                <p
                  className={` ${Hstyle.w} dropdown-toggle`}
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
                  
                  <li className="dropdown-item" onClick={logOut}>
                
                    Logout
                    
                  </li>
                </ul>
              </li>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
