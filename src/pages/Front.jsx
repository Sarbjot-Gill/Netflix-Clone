import Footer from "./Footer";
import Hcard1 from "./Hcard1";
import Hcard2 from "./Hcard2";
import Hcard3 from "./Hcard3";
import Hcard4 from "./Hcard4";
import Inputcard from "./Inputcard";

export default function Front() {
  return (
   <>
   <Inputcard />
   <hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
   <Hcard1 />
   <hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
   <Hcard2 />
   <hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
   <Hcard3 />
   <hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
   <Hcard4 />
   <hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>

   <Footer />
   </>
  )
}
