import { useEffect, useState } from "react";
import Map from "./Map";

export default function Homecontent({otherdata ,list ,update}) {
  const [tvshow, setTvshow] = useState([]);
  let email = otherdata.email;
  let name = otherdata.profile.name
  let arr= list;
// if(loading === false) {
//   handleData()
// }

  
  function handleData(){
    setTimeout(() => {
      fetch('http://127.0.0.1:3000/newlist', 
      { method : "post" ,headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:email , name : name})}).then((response) => 
        response.json().then((e) => {
          console.log(e)
        })
      )
    } , 1000)
  
    fetch("http://127.0.0.1:3000/content", { method: "GET" }).then((response) =>
      response.json().then((dataa) => {
        let Movdata = [
          { title: "Drugs", movie: [] },
          { title: "My List", movie: [] },
          { title: "Comedy", movie: [] },
          { title: "Tv Show", movie: [] },
          { title: "Crime", movie: [] },
          { title: "Movie", movie: [] },
          { title: "Dark", movie: [] },
        ];
       
     
        dataa.map((e) => {
          let a = e.genre;
          let b = e.type;
          if (b === "Tv Show") {
            Movdata[3].movie.push(e);
          } else if (b === "Movie") {
            Movdata[5].movie.push(e);
          }
          a.map((j) => {
            if (j === "Dark") {
              Movdata[6].movie.push(e);
            } else if (j === "Comedy") {
              Movdata[2].movie.push(e);
            } else if (j === "Crime") {
              Movdata[4].movie.push(e);
            } else if (j === "Drug") {
              Movdata[0].movie.push(e);
            }
          });
        });
        dataa.map((e) =>{
          arr.map((j) => {
            if(e.name === j.name){
              e.list = true
              Movdata[1].movie.push(e);
            }
          })
        })
        setTvshow([...Movdata])
      })
    );
  }
  function handleAdd(data){
    let arrr = arr 
    let item = tvshow[data[0]].movie[data[1]]
    arrr.push(item)
    fetch('http://127.0.0.1:3000/addlistitem', 
    { method : "post" ,headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email:email , name : name ,list:arrr})})
    handleData()
  }
  function handleRemove(data){
    let arrr = arr;
    let item = tvshow[data[0]].movie[data[1]]
    let result = arr.filter((e) =>e.name !== item.name)
    arrr = result
    fetch('http://127.0.0.1:3000/addlistitem', 
    { method : "post" ,headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email:email , name : name ,list:arrr})})
    handleData() 
  }
  useEffect(() => {
    handleData()

  }, []);
 


  return (
    <>
   {/* {load ?  <h1>Loading</h1> : } */}
      <div style={{ backgroundColor: "#141414" }}>
      <Map data={tvshow} add={handleAdd} remove={handleRemove} />
      </div>
    </>
  );
}
