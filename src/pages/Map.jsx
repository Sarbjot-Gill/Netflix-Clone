import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import Modal from "react-bootstrap/Modal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Hstyle from "../css/home.module.css";
import Arrow from "../assets/OIP-removebg-preview.png";

export default function Map({ data ,add ,remove}) {
  const [show, setShow] = useState(false);
  const [showw, setShoww] = useState(false);
  const [mlink, setMlink] = useState();
  function handleShow(e) {
    setShow(true);
    let a = e.target.id;
    setMlink(data[a[0]].movie[a[1]]);
  }
  const handleClose = () => {
    setShow(false);
  };

  const handleLarge = (e) => {
    e.target.style.height = "290px";
    e.target.style.width = "290px";
    e.target.style.boxShadow = "0 1rem 3rem black";
    e.target.style.marginBottom = "20px";
    e.target.children[0].style.height = "140px";
    e.target.style.zIndex = "5";

    setShoww(e.target.id);
  };
  const handleSmall = (e) => {
    e.target.style.height = "110px";
    e.target.style.width = "200px";
    e.target.children[0].style.height = "110px";
    e.target.style.zIndex = "1";
    e.target.style.boxShadow = "none";
    e.target.style.marginBottom = "0px";

    setShoww(false);
  };
  return (
    <div style={{ marginLeft: "100px" }}>
      {data.map(({ title, movie }, i) => {
        return (
          <>
            <Row>
              <h5 style={{ color: "white" }}>{title}</h5>

              <Carousel
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                centerSlidePercentage={15}
                centerMode
              >
                {movie.map(({ thumbnail, genre, age, length, yt, list }, k) => {
                  return (
                    <>
                      <Col
                        onMouseEnter={handleLarge}
                        onMouseLeave={handleSmall}
                        className={`${i}${k} mx-1`}
                        style={{
                          position: "relative",
                          backgroundColor: "#141414",
                          zIndex: "1",
                          width: "200px",
                        }}
                        id={`${i}${k}`}
                      >
                        {" "}
                        <img
                          style={{
                            height: "110px",
                            width: "100%",
                            marginRight: "10px",
                            Zindex: "2",
                          }}
                          src={thumbnail}
                        ></img>
                        {showw === `${i}${k}` && (
                          <div style={{ position: "absolute" }}>
                            <div>
                              <Row className="mt-3">
                                <Col xs={7}>
                                  <Link to={"/play?link=" + yt}>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="35"
                                      height="35"
                                      fill="white"
                                      className="bi bi-play-circle-fill"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                                    </svg>
                                  </Link>
                                  {list ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="35"
                                      height="35"
                                      fill="white"
                                      className="bi bi-check-circle-fill mx-2"
                                      viewBox="0 0 16 16"
                                      onClick={(() => {
                                        remove(`${i}${k}`)
                                      })}
                                    >
                                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </svg>
                                  ) : (
                                    <>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="35"
                                        height="35"
                                        fill="white"
                                        className="bi bi-plus-circle-fill mx-2"
                                        viewBox="0 0 16 16"
                                        onClick={(() => {
                                          add(`${i}${k}`)
                                        })}
                                      >
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                      </svg>
                                    </>
                                  )}
                                </Col>
                                <Col
                                  xs={3}
                                  onClick={handleShow}
                                  id={`${i}${k}`}
                                  style={{ width: "90px" }}
                                >
                                  <div style={{ marginLeft: "70px" }}>
                                    <img
                                      id={`${i}${k}`}
                                      style={{ width: "30px" }}
                                      src={Arrow}
                                    ></img>
                                  </div>
                                </Col>
                              </Row>
                              <div
                                style={{
                                  display: "flex",
                                  color: "grey",
                                  marginTop: "15px",
                                }}
                              >
                                <p
                                  style={{ marginLeft: "10px" }}
                                  className="text-success"
                                >
                                  98% Match
                                </p>
                                <p
                                  className="mx-3 px-2"
                                  style={{ border: "solid 1px grey" }}
                                >
                                  {age}
                                </p>
                                <p>{length}</p>
                              </div>
                              <h6 style={{ color: "white" }}>
                                {genre[0]} . {genre[1]} . {genre[2]}
                              </h6>
                            </div>
                          </div>
                        )}
                      </Col>
                    </>
                  );
                })}
              </Carousel>
            </Row>
          </>
        );
      })}
      {show ? (
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          enforceFocus={false}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <div style={{ width: "800px" }}>
            <div
              style={{
                backgroundImage: `url(${mlink.cover})`,
                width: "100%",
                height: "460px",
              }}
            >
              <div>
                <img
                  style={{
                    marginTop: "200px",
                    width: "350px",
                    marginLeft: "50px",
                  }}
                  src={mlink.logo}
                />
                <div style={{ marginLeft: "50px", marginTop: "10px" }}>
                  <Link to={"/play?link=" + mlink.yt}>
                    <button className={Hstyle.btnn}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        className="bi bi-play-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                      </svg>
                      Play
                    </button>
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="white"
                    className="bi bi-check-circle-fill mx-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="white"
                    className="bi bi-hand-thumbs-up"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                  </svg>
                </div>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9))",
                  width: "100%",
                  height: "80px",
                  filter: "blur(10px)",
                }}
              ></div>
              <div style={{ backgroundColor: "#141414" }}>
                <Row>
                  <Col xs={8} style={{ marginLeft: "20px", marginTop: "10px" }}>
                    <div style={{ display: "flex" }}>
                      <p style={{ color: "#00ff00" }}>96% Match</p>
                      <p className="mx-2" style={{ color: "grey" }}>
                        {mlink.length}{" "}
                      </p>
                      <p
                        className="mx-3 px-2"
                        style={{ border: "solid 1px grey", color: "grey" }}
                      >
                        HD
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p
                        className="mx-3 px-2"
                        style={{ border: "solid 1px grey", color: "grey" }}
                      >
                        {mlink.age}
                      </p>
                      <p style={{ color: "white" }}>Mature Content Warning</p>
                    </div>
                    <p style={{ color: "white" }}>{mlink.desc}</p>
                  </Col>
                  <Col>
                    <div style={{ marginTop: "20px" }}>
                      <p style={{ color: "grey", padding: "0px" }}>
                        Genre:{" "}
                        <text style={{ color: "white" }}>
                          {mlink.genre[0]},{mlink.genre[1]},{mlink.genre[2]}
                        </text>{" "}
                      </p>
                    </div>
                  </Col>
                </Row>
                <div>
                  {mlink.type === "Tv Show" && (
                    <div style={{ marginLeft: "20px", color: "grey" }}>
                      <Row>
                        <Col>
                          <h3 style={{ color: "white" }}>Episodes</h3>
                        </Col>
                      </Row>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={"/play?link=" + mlink.yt}
                      >
                        <Row
                          className={Hstyle.hhov}
                          style={{ color: "white", marginBottom: "10px" }}
                        >
                          <Col>
                            <img
                              style={{ width: "200px", height: "100px" }}
                              src={mlink.thumbnail}
                            ></img>
                          </Col>
                          <Col
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <h3>Episode 1</h3>
                          </Col>
                          <Col xs={2}>
                            <p>52 Min</p>
                          </Col>
                        </Row>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={"/play?link=" + mlink.yt}
                      >
                        <Row
                          className={Hstyle.hhov}
                          style={{ color: "white", marginBottom: "10px" }}
                        >
                          <Col>
                            <img
                              style={{ width: "200px", height: "100px" }}
                              src={mlink.thumbnail}
                            ></img>
                          </Col>
                          <Col
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <h3>Episode 2</h3>
                          </Col>
                          <Col xs={2}>
                            <p>52 Min</p>
                          </Col>
                        </Row>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={"/play?link=" + mlink.yt}
                      >
                        <Row
                          className={Hstyle.hhov}
                          style={{ color: "white", marginBottom: "10px" }}
                        >
                          <Col>
                            <img
                              style={{ width: "200px", height: "100px" }}
                              src={mlink.thumbnail}
                            ></img>
                          </Col>
                          <Col
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <h3>Episode 3</h3>
                          </Col>
                          <Col xs={2}>
                            <p>52 Min</p>
                          </Col>
                        </Row>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={"/play?link=" + mlink.yt}
                      >
                        <Row
                          className={Hstyle.hhov}
                          style={{ color: "white", marginBottom: "10px" }}
                        >
                          <Col>
                            <img
                              style={{ width: "200px", height: "100px" }}
                              src={mlink.thumbnail}
                            ></img>
                          </Col>
                          <Col
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <h3>Episode 4</h3>
                          </Col>
                          <Col xs={2}>
                            <p>52 Min</p>
                          </Col>
                        </Row>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
}
