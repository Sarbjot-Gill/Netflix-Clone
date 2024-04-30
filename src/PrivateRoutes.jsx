
import { Navigate, Outlet} from 'react-router-dom'
export default function Privateroutes() {
  var auth = false;
    let id =  localStorage.getItem("id")
    console.log(id)
    fetch('http://127.0.0.1:3000/checkuser', 
    { method : "POST" ,headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email : id})})
    // .then((e) => {console.log(e)})
     .then((response) =>response.json().then((dataa) => {
        console.log(dataa)
      if(dataa === true){
      return(<Outlet/>)
      }
      else{
        return(
        <Navigate to='/'/>
        )

      }
    })
  )
    // console.log(loction.state)
  //   useEffect(() =>{
  //          fetch('http://127.0.0.1:3000/checkuser', 
  //   { method : "POST" ,headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({email : id})})
  //   // .then((e) => {console.log(e)})
  //    .then((response) =>response.json().then((dataa) => {
  //       console.log(dataa)
  //     if(dataa === true){
  //     auth.token = true
  //     }
  //   })
  // )
  //   },[])
  return (
    // auth ? <Outlet/> : <Navigate to='/'/>
    <></>
  )
}
