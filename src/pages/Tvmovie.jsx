import { useEffect, useState } from "react";
import Homenavbar from "./Homenavbar";
import Tvcard from "./Tvcard";
import Tvcontent from "./Tvcontent";
import { useLocation } from "react-router-dom";

export default function Tvmovie() {
    let loction = useLocation()
    let pro = loction.state.profile
    const [type ,setType] = useState()
    console.log(loction)
    useEffect(()=>{
        setType(loction.state.type)     
    },[loction])
 
    
  return (
    <>
    <Homenavbar x = {pro}/>
    <Tvcard t = {type} />
    <Tvcontent  t = {type}/>
    </>
  )
}
