import React from "react";
import { Button } from "react-bootstrap";
import Mstyle from "../css/membership.module.css";
import { Link } from "react-router-dom";
export default function Profiles() {
  return (
    <div className={Mstyle.b}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h1 style={{marginTop:"50px"}}>Who's watching?</h1>{" "}
      </div>
      <Link to="/home">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "95px",
        }}
      >
        <div>
          <img
            className={Mstyle.p}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          ></img>
          <center>
            <p
              style={{ color: "white", marginTop: "10px", marginLeft: "30px" }}
            >
              Pratham
            </p>
          </center>
        </div>
        <div>
          <img
            className={Mstyle.p}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuU8_QFTVjEW9DOGMweLUCFc-rYDIaQXGdc0KQYVMymvhkTnRbat6FUfYJ3j7BdPmMAc&usqp=CAU"
          ></img>
          <center>
            <p
              style={{ color: "white", marginTop: "10px", marginLeft: "30px" }}
            >
              Shubam
            </p>
          </center>
        </div>
        <div>
          <img
            className={Mstyle.p}
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          ></img>
          <center>
            <p
              style={{ color: "white", marginTop: "10px", marginLeft: "30px" }}
            >
              Hadoop
            </p>
          </center>
        </div>
        <div>
          <img
            className={Mstyle.p}
            src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
          ></img>
          <p style={{ color: "white", marginTop: "10px", marginLeft: "70px" }}>
            Children
          </p>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="156"
            height="156"
            fill="currentColor"
            class="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
            style={{marginTop:"140px"}}
            
          >
            
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
           
          </svg>
          <p style={{ color: "white", marginTop: "10px", marginLeft: "40px" }}>
            Add Profile
          </p>
        </div>
      </div>
      </Link>
      <center>
        <Button
          style={{
            color: "white",
            width: "30%",
            marginTop: "20px",
            height: "60px",
            backgroundColor: "black",
            fontSize: "20px",
          }}
        >
          Manage Profile
        </Button>
      </center>{" "}
    </div>
  );
}
