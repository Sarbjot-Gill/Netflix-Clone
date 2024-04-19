import { useEffect, useState } from "react";
import Homenavbar from "./Homenavbar";
import Tvcard from "./Tvcard";
import Tvcontent from "./Tvcontent";
import { useLocation } from "react-router-dom";

export default function Tvmovie() {
    let loction = useLocation()
    const [type ,setType] = useState()

    useEffect(()=>{
        setType(loction.state)     
    },[loction])
 
    
  return (
    <>
    <Homenavbar />
    <Tvcard t = {type} />
    <Tvcontent  t = {type}/>
    </>
  )
}
