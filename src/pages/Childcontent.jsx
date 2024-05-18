import { useEffect, useState } from "react";
import Map from "./Map";

export default function Childcontent() {
  const [tvshow, setTvshow] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/content", { method: "GET" }).then((response) =>
      response.json().then((dataa) => {
        let Movdata = [
          { title: "Cartoon", movie: [] },
          { title: "Comedy", movie: [] },
          { title: "Tv Show", movie: [] },
          { title: "Family", movie: [] },
          { title: "Movie", movie: [] },
          { title: "Animation", movie: [] },
        ];
        dataa.map((e) => {
          let a = e.genre;
          let b = e.type;
          let age = e.age
          if(age === "U/A 7+"){
          if (b === "Tv Show") {
            Movdata[2].movie.push(e);
          } else if (b === "Movie") {
            Movdata[4].movie.push(e);
          }
          a.map((j) => {
            if (j === "Animation") {
              Movdata[5].movie.push(e);
            } else if (j === "Comedy") {
              Movdata[1].movie.push(e);
            } else if (j === "Family") {
              Movdata[3].movie.push(e);
            } else if (j === "Cartoon") {
              Movdata[0].movie.push(e);
            }
          });
        }
        });
        setTvshow([...Movdata])
      })
    );
  }, []);
 


  return (
    <>
      <div style={{ backgroundColor: "#141414" }}>
      <Map data={tvshow} />
      </div>
    </>
  );
}
