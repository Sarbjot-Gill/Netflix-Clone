import { useLocation } from "react-router-dom";
import Homecard from "./Homecard";
import Homecontent from "./Homecontent";
import Homenavbar from "./Homenavbar";
import Childcontent from "./Childcontent";
import { useEffect, useState } from "react";

export default function Home() {
  const[llist ,setList] = useState()
  const[load , setLoad] = useState(true)
  const loction = useLocation()
  let age = loction.state.profile.age
  const list = loction.state.profile.list
  let email = loction.state.email;
  let name = loction.state.profile.name
  function updateContent(){
    setLoad(true)
    fetch('http://127.0.0.1:3000/newlist', 
    { method : "post" ,headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email:email , name : name})}).then((response) => 
      response.json().then((e) => {
        setList(e)
        setLoad(false)
        console.log(list)
      })
    )
  }
 
  useEffect(() => {
    updateContent()
    
  },[])
  return (
    <>
    {load ? <h1>loading</h1> :     <div>
      {age === "A" &&
      <>
       <Homenavbar  x = {loction.state}/>
    <Homecard />
    <Homecontent list = {llist} otherdata = {loction.state} update = {updateContent}/>
      </>
      }
      {age === "C" && <>
      <Homenavbar   x = {loction.state}/>
      <Homecard />
      <Childcontent  list = {list}/>
      </>}
    </div>}
    {/* <div>
      {age === "A" &&
      <>
       <Homenavbar  x = {loction.state}/>
    <Homecard />
    <Homecontent list = {llist} otherdata = {loction.state}/>
      </>
      }
      {age === "C" && <>
      <Homenavbar   x = {loction.state}/>
      <Homecard />
      <Childcontent  list = {list}/>
      </>}
    </div> */}
    </>
  )
}
