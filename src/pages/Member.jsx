import { useState } from 'react'
import Nnavbar from './Navbar'
import Footer from './Footer'
import Membership1 from './Membership1'
import Membership2 from './Membership2'
import Membership3 from './Membership3'
export default function Member() {
  const [member,setMember]=useState(1)
  function changeMember(data){
    setMember(data)
  }
    return (
    
    <>

   
    {member===1 && (<Membership1 p={changeMember} />)} 
    {member===2 && (<Membership2 p={changeMember} />)} 
    {member===3 && (<Membership3 p={changeMember} />)} 
    
         

    </>
  )
}
