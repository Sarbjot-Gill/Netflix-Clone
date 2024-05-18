import { useState } from 'react'
import { Navigate, Outlet} from 'react-router-dom'
import axios from "axios";

const PrivateRoutes = () =>{
  const[auth , setauth] = useState(false)
  const [loading , setLoading] = useState(true)
  axios.post("http://127.0.0.1:3000/checkuser").then((res)=>{
    setauth(res.data)
    setLoading(false)
  })
console.log(auth) 
  return(
   loading ? <h1>Loading</h1> : <>
   {auth ? <Outlet /> :  <Navigate to="/"></Navigate>}
   </> 
  )
}

export default PrivateRoutes;