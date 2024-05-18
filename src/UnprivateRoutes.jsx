import { useState } from 'react'
import { Navigate, Outlet} from 'react-router-dom'
import axios from "axios";

const UnprivateRoutes = () =>{
  const[auth , setauth] = useState(false)
  const [loading , setLoading] = useState(true)
  const [email , setEmail] = useState("")
  axios.post("http://127.0.0.1:3000/checkuser2").then((res)=>{
    // setauth(res.data)
    // setLoading(false)
    
     if(res.data === false){
        setauth(true)
    setLoading(false)
      }else{
        setEmail(res.data)
        console.log(email)
        setLoading(false)
      }
    
  })
// console.log(auth) 
  return(
   loading ? <h1>Loading</h1> : <>
   {auth ? <Outlet /> :  <Navigate to="/pro" state={email}></Navigate>}
   </> 

  )
}

export default UnprivateRoutes;