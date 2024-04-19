import { useEffect } from "react";
import Mdata from "../data/movie.json";
export default function Dummy() {
  let Movdata = [
    { title: "Dark", movie: [] },
    { title: "Comedy", movie: [] },
    { title: "Tv Show", movie: [] },
    { title: "Crime", movie: [] },
  ];
  let data = Mdata;
  useEffect(() => {
    data.map((e) => {
      let a = e.genre;
      let b = e.type
      if(b === "Tv Show"){
        Movdata[2].movie.push(e);
      }
      //   console.log(e.genre);
      a.map((j) => {
        // console.log(j)
        if (j === "Dark") {
          Movdata[0].movie.push(e);
        } else if (j === "Comedy") {
          Movdata[1].movie.push(e);
        } else if (j === "Crime") {
          Movdata[3].movie.push(e);
        }
      });
    });
    console.log(Movdata);
  }, []);

  return <div>Dummy</div>;
}
