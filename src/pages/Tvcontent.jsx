import { useEffect, useState } from "react";
import Map from "./Map";

export default function Tvcontent({t}) {

  const [tvshow, setTvshow] = useState([]);
 
  useEffect(() => {
  

    fetch("http://127.0.0.1:3000/content", { method: "GET" }).then((response) =>
      response.json().then((dataa) => {
        let Movdata = [
          { title: "Dark", movie: [] },
          { title: "Comedy", movie: [] },
          { title: "Tv Show", movie: [] },
          { title: "Crime", movie: [] },
          { title: "Movie", movie: [] },
        ];
        dataa.map((e) => {
          let a = e.genre;
          let b = e.type;
          if(b === t){
          if (b === "Tv Show") {
            Movdata[2].movie.push(e);
          } else if (b === "Movie") {
            Movdata[4].movie.push(e);
          }
          a.map((j) => {
            if (j === "Dark") {
              Movdata[0].movie.push(e);
            } else if (j === "Comedy") {
              Movdata[1].movie.push(e);
            } else if (j === "Crime") {
              Movdata[3].movie.push(e);
            }
          });}
        });
        setTvshow([...Movdata])
      })
    );
  }, [t]);
  return (
    <div>
      {t ? ( <div style={{ backgroundColor: "#141414" }}>
      <Map data={tvshow} />
    </div>):(
       <div style={{ backgroundColor: "#141414" }}>
        <Map data={tvshow} />
     </div>
    )}
    </div>
  )
}
