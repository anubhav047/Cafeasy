import React from "react";
import Customernavbar from "./Customernavbar";
import foodHeaderBgImage from "../images/food-bg-header.jpeg";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
import { toast} from 'react-toastify';

const Customerhome = () => {
  const [foods, setfoods] = useState([]);
  const notifysuccess = (msg) => toast.success(msg);
  let dispatch = useDispatchCart();
  let data = useCart();
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
    setfoods([]);
    getfood();
    // eslint-disable-next-line
  }, []);

  const getfood = async () => {
    const res = await fetch("http://localhost:2000/fetchfood", {
      method: "get",
    });
    const parsed = await res.json();
    setfoods(parsed);
  };

  const handleadd = async (x) => {
    let food = [];
    for (const item of data) {
      if (item.id === x._id) {
        food = item;

        break;
      }
    }
    if (food.length!==0) {
        await dispatch({
          type: "UPDATE",
          id: x._id,
          qty: 1
        });
      notifysuccess(`Added 1 ${x.name} succeessfully...`);
      return;
    }
    await dispatch({
      type: "ADD",
      id: x._id,
      img: x.img,
      name: x.name,
      price: x.price,
    });
    notifysuccess(`Added 1 ${x.name} succeessfully...`);
    console.log(data);
  };

  return (
    <>
      <Customernavbar />
      <div className="App" style={headerStyles}>
        <div>
          <div className="custom-heading-font font-extrabold text-8xl text-slate-900">
            Welcome to Cafeasy!
          </div>
          <div className="custom-body-font text-slate-700 text-center pt-4">
            Hungry? We Got You!
          </div>
        </div>
        <div style={imageOverlayStyles}></div>
      </div>

      <div
        className="container mx-auto mt-10"
        style={{ width: "60vw", overflow: "hidden" }}
      >
        <div className="flex shadow-md my-10">
          <div className="bg-white px-10 py-10" style={{ width: "100%" }}>
            <div className="custom-heading-font mx-auto text-center text-3xl text-slate-600">
              About Us
            </div>
            <div className="custom-body-font mt-8 mb-10 pb-6 text-center text-xl text-slate-500">
              Cafeasy is an online cafeteria portal created for college members,
              including students, faculty, and cafeteria staff. Traditional
              cafeteria systems often grapple with challenges like order
              management inefficiencies, uncertain waiting times, and the lack
              of real-time information for customers. Cafeasy is an online
              cafeteria portal created for college members, including students,
              faculty, and cafeteria staff. Traditional cafeteria systems often
              grapple with challenges like order management inefficiencies,
              uncertain waiting times, and the lack of real-time information for
              customers.
            </div>

            <div className="custom-heading-font mx-auto text-center text-3xl text-slate-600 mb-12">
              Cafe Menu
            </div>

            <div className="flex mt-10 mb-5">
              <h3 className="custom-body-font font-semibold text-gray-600 text-s uppercase w-2/5">
                Food Items
              </h3>
              <h3 className="custom-body-font font-semibold text-gray-600 text-s uppercase w-1/5 text-center">
                Quantity Available
              </h3>
              <h3 className="custom-body-font font-semibold text-gray-600 text-s uppercase w-1/5 text-center">
                Price
              </h3>
            </div>

            {foods.map((element) => {
              return (
                <div
                  key={element.name}
                  className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                >
                  <div className="flex w-2/5">
                    <div class="w-20">
                      <img class="h-24" src={element.img} alt="" />
                    </div>
                    <div class="flex flex-col justify-center ml-4 flex-grow">
                      <span class="font-bold text-sm">{element.name}</span>
                    </div>
                  </div>
                  <div class="flex justify-center w-1/5">
                    <span class="font-bold text-sm">{element.quantity}</span>
                  </div>
                  <span class="text-center w-1/5 font-semibold text-sm">
                    Rs.{element.price}
                  </span>
                  <div style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleadd(element);
                    }} >
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
                  <span class="font-bold text-sm">Add 1</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <!-- BOTTOM CONTAINER --> */}
      <div className="bottom-container bg-lime-200 py-20 pb-20">
        <p className="text-gray-600 text-center custom-body-font">© Cafeasy.</p>
      </div>
    </>
  );
};

export default Customerhome;
