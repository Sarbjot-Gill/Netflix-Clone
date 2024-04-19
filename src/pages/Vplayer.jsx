import ReactPlayer from "react-player";

export default function Vplayer() {
  const queryParameters = new URLSearchParams(window.location.search)
    const mail = queryParameters.get("link")
  return (
    <div>
        <ReactPlayer width='100%' playing={true} height='100vh' url={mail} />
    </div>
  )
}
