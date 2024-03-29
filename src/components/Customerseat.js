import React, { useEffect, useState } from "react";
import "../styles/Customerseat.css";
import Customernavbar from "./Customernavbar";

const Customerseat = () => {  
  const [seat, setseat] = useState([])
  useEffect(() => {
    getseats();
  }, [])
  const getseats = async()=>{
    const res = await fetch("http://localhost:2000/fetchseats", {
      method: "get",
    });
    const parsed = await res.json();
    setseat(parsed);
  }
  return (
    <>
    <Customernavbar/>
    <div className="cont">
      <div class="cafe-container">
        {seat.map((s, index) => (
          <div
            class="sseat"
            style={{ backgroundColor: s.color }}
          >
            {s.no}
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Customerseat;
