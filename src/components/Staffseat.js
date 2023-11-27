import React, { useEffect, useState } from "react";
import StaffNavbar from "./StaffNavbar";
import "../styles/Staffseat.css";

const Staffseat = () => {
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
  

  const handleclick = async (id) => {
    const res = await fetch(`http://localhost:2000/seatchange/${id}`, {
      method: "put"
    });
    const parsed = await res.json();
    getseats()
  };
  return (
    <>
      <StaffNavbar />
      <div className="cont">
      <div class="cafe-container">
        {seat.map((s, index) => (
          <div
            class="seat"
            style={{ backgroundColor: s.color }}
            onClick={() => {
              handleclick(s._id);
            }}
          >
            {s.no}
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Staffseat;
