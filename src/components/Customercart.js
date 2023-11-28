import React from "react";
import Customernavbar from "./Customernavbar";
import { useDispatchCart, useCart } from "./ContextReducer";
import { useEffect, useState } from "react";
import { toast} from 'react-toastify';


const Customercart = () => {
  const [orders, setorders] = useState([]);
  let dispatch = useDispatchCart();
  let data = useCart();
  const [totalPrice, settotalPrice] = useState(0);

  const notifysuccess = (msg) => toast.success(msg);

  useEffect(() => {
    let p = 0;
    for (const item of data) {
      p = p + item.qty * item.price;
    }
    settotalPrice(p);
    getorders();
  }, [data]);

  const handleCheckOut = async () => {
    let mobNumber = localStorage.getItem("number");
    let response = await fetch("http://localhost:2000/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        number: mobNumber,
        order_date: new Date().toDateString(),
      }),
    });
    console.log("JSON RESPONSE:::::", response.status);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
      notifysuccess(`Order Placed succeessfully...`);
    }
  };

  const getorders = async () => {
    const res = await fetch("http://localhost:2000/fetchorders", {
      method: "get",
    });
    const parsed = await res.json();
    setorders(parsed);
  };

  if (data.length === 0) {
    return (
      <div>
        <Customernavbar />
        <div className="custom-heading-font mx-auto text-center text-3xl text-slate-600">
              {orders.length} orders are currently in queue
            </div>
        <div className="m-5 w-100 text-center fs-3">The Cart is Empty!</div>
      </div>
    );
  }

  return (
    <>
      <Customernavbar />
      <div class="container mx-auto mt-10" style={{ width: "60vw" }}>
        <div class="flex shadow-md my-10">
          <div class="w-3/4 bg-white px-10 py-10">
          <div className="custom-heading-font mx-auto text-center text-3xl text-slate-600">
              {orders.length} orders are currently in queue
            </div>
            <div class="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-2xl">Cart</h1>
            </div>
            <div class="flex mt-10 mb-5">
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Food Items
              </h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>

            {data.map((food, index) => (
              <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div class="flex w-2/5">
                  <div class="w-20">
                    <img class="h-24" src={food.img} alt="" />
                  </div>
                  <div class="flex flex-col justify-between ml-4 flex-grow">
                    <span class="font-bold text-sm">{food.name}</span>
                    <a
                      href="#"
                      class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    >
                      Remove
                    </a>
                  </div>
                </div>
                <div class="flex justify-center w-1/5">
                  <span class="text-center w-1/5 font-semibold text-sm">
                    {food.qty}
                  </span>
                </div>
                <span class="text-center w-1/5 font-semibold text-sm">
                  Rs.{food.price}
                </span>
                <span class="text-center w-1/5 font-semibold text-sm">
                  Rs.{food.price * food.qty}
                </span>
              </div>
            ))}
          </div>

          <div id="summary" class="w-1/4 px-8 py-10">
            <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div class="mt-8">
              <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>Rs.{totalPrice}</span>
              </div>
              <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={handleCheckOut}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customercart;
