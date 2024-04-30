import { useState } from 'react'
import Nnavbar from './Navbar'
import Footer from './Footer'
import Membership1 from './Membership1'
import Membership2 from './Membership2'
import Membership3 from './Membership3'
import { useLocation } from 'react-router-dom'
export default function Member() {
  const [member,setMember]=useState(1)
  const [pro,setpro]=useState(1)
  const loction = useLocation();
  console.log(loction.state)
  let mail = loction.state
  function changeMember(data){
    setMember(data)
  }
  function handlepro(data){
    setpro(data)
  }
    return (
    
    <>

   <Nnavbar mail = {mail} change = {true}/>
    {member===1 && (<Membership1 p={changeMember} />)} 
    {member===2 && (<Membership2 p={changeMember} prodata={handlepro} />)} 
    {member===3 && (<Membership3 p={changeMember} prodata={pro}/>)} 
    
         

    </>
  )
}
