import React from "react";
import foodHeaderBgImage from "../images/food-bg-header.jpeg";
import { useState } from "react";
import { useEffect } from "react";
import StaffNavbar from "./StaffNavbar";

const Staffhome = () => {
  const [orders, setorders] = useState([]);
  const headerStyles = {
    backgroundImage: `url(${foodHeaderBgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff", // Text color
    fontSize: "3rem", // Text font size
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Optional text shadow
    position: "relative",
  };

  const imageOverlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, 0.3)", // Lighten the image by adjusting the opacity (0.0 to 1.0)
    filter: "brightness(1.5)", // Adjust the brightness (1.0 is normal, less than 1.0 darkens, more than 1.0 lightens)
  };
  useEffect(() => {
    setorders([]);
    getorders();
    // eslint-disable-next-line
  }, []);

  const getorders = async () => {
    const res = await fetch("http://localhost:2000/fetchorders", {
      method: "get",
    });
    const parsed = await res.json();
    setorders(parsed);
  };

  const handledone = async (orderId) => {
    const res = await fetch(`http://localhost:2000/deleteorder/${orderId}`, {
      method: "delete",
      body: JSON.stringify({ orderId ,number:localStorage.getItem('number')}),
    });
    const parsed = await res.json();
    console.log(parsed);
    if (parsed) getorders();
    const resp = await fetch(`http://localhost:2000/sms/${parsed.order.number}`, {
      method: "post"
    });
  };

  // const handledone = async (orderId) => {
  //   const res = await fetch(`http://localhost:2000/deleteorder/${orderId}`, {
  //     method: "delete",
  //     body: JSON.stringify({ orderId ,number:localStorage.getItem('number')}),
  //   });
  //   const parsed = await res.json();
  //   console.log(parsed);
  //   if (parsed) getorders();
  //   const resp = await fetch("https://www.fast2sms.com/dev/bulkV2", {
  //     method: "post",
  //     headers:{
  //       "authorization":"JSowMs65XAj7utbnLpYRcTgPfDI1h2KmHOGr08yzekdFlWaQZU9J7f2uojrGBPkSlO0CyWxgbNVhnDm3",
  //       "Content-Type":"application/json"
  //     },
  //     body:{
  //       "route" : "q",
  //       "message" : "ORDER PREPARED",
  //       "flash" : 0,
  //       "numbers" : "9084858329",
  //     }
  //   });
  //   const parsed1 = await resp.json();
  //   console.log(parsed1);
  // };

  return (
    <>
    <StaffNavbar/>
    <div class="container mx-auto mt-10" style={{ width: "60vw" }}>
        <div class="flex shadow-md my-10">
          <div class="bg-white px-10 py-10" style={{width:"100%",margin:"20px"}}>
            <div class="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-2xl">ORDERS IN QUEUE</h1>
            </div>
            <div class="flex mt-10 mb-5">
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Food Items
              </h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
            </div>

            {orders.map((order, index) => (
              <div class="border-solid border-2 border-zinc-200" style={{margin:"30px 0px"}}>
                <div style={{display:"flex",flexDirection:"row"}}>
                  <div>
                <span class="font-bold text-sm">M.No - {order.number}</span>
                <br></br>
                <span class="font-bold text-sm"> {order.order_date}</span>
                </div>
                <div style={{marginLeft:"auto",cursor: "pointer",padding:"10px"}}
                    onClick={() => {
                      handledone(order._id);
                    }}>
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span class="font-bold text-sm">Prepared</span>
                  </div>
                  </div>
                {order.order_data.map((element, index) => (
              <div class="flex items-center hover:bg-gray-100 px-6 py-5 ">
                <div class="flex w-2/5">
                  <div class="w-20">
                    <img class="h-24" src={element.img} alt="" />
                  </div>
                  <div class="flex flex-col justify-between ml-4 flex-grow">
                    <span class="font-bold text-sm">{element.name}</span>
                  </div>
                </div>
                <div class="flex justify-center w-1/5">
                  <span class="text-center w-1/5 font-semibold text-sm">
                    {element.qty}
                  </span>
                </div>
                <br></br>
              </div>))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Staffhome;
