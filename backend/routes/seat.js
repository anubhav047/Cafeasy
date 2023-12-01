const express = require("express");
const router = express.Router();
const seats = require("../models/seats");

router.get("/fetchseats", async (req, res) => {
  const data = await seats.find().sort({"no":1});
  res.status(200).json(data);
});

router.put("/seatchange/:id", async (req, res) => {
  try {
    const seat = await seats.findById(req.params.id);
    var x;
    if (seat.color == "green") {
      x = await seats.findByIdAndUpdate(
        req.params.id,
        {
          color:"red"
        },
        {
            new:true
        }
      );
    } else {
      x = await seats.findByIdAndUpdate(
        req.params.id,
        {
            color:"green"
        },
        {
            new:true
        }
      );
    }
    res.status(200).json({ x, msg: "Seat changed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

module.exports = router;
