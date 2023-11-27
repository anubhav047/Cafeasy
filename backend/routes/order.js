const express = require("express");
const router = express.Router();
const Order = require("../models/order");

router.post("/orderData", async (req, res) => {
  let data = req.body.order_data;
  try {
    await Order.create({
      number: req.body.number,
      order_date: req.body.order_date,
      order_data: data,
    }).then(() => {
      res.json({ success: true });
    });
  } catch (error) {
    console.log(error.message);
    res.send("Server Error", error.message);
  }
});

router.get("/fetchorders", async (req, res) => {
  const data = await Order.find();
  res.status(200).json(data);
});

router.post("/sms/:number", async (req, res) => {
  var sid = "AC6394dbba1461b12a084b0637a5aea30d";
    var auth_token = "4268de5afae2db6a1292d2bc10b93ff9";
    var twilio = require("twilio")(sid, auth_token);
    var x = req.params.number
    twilio.messages
      .create({
        from: "+14409415968",
        to: "+91"+ x ,
        body: "YOUR ORDER HAS BEEN PREPARED!!",
      })
      .then(function (resp) {
        console.log("message has sent!");
        res.status(200).json({msg:"SENT SUCCESSFULLY"});
      })
      .catch(function (err) {
        console.log(err);
        res.status(500).json({err});
      });
});

router.delete("/deleteorder/:orderId", async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.orderId);
    res.status(200).json({ order, msg: "Order Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
