const express = require("express");
const router = express.Router();
const Order = require("../models/order")

router.post("/orderData", async (req, res) => {
  let data = req.body.order_data;
    try {
      await Order.create({
        number: req.body.number,
        order_date:req.body.order_date,
        order_data: data,
      }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error.message);
      res.send("Server Error", error.message);
    }

});

router.get("/fetchorders",async (req, res) => {
    const data = await Order.find();
    res.status(200).json(data);
  });


  router.delete("/deleteorder/:orderId",async (req, res) => {
    try {
        const order= await Order.findByIdAndDelete(req.params.orderId);
        res.status(200).json({ order, msg: "Order Deleted successfully" });
    } catch (error) {
      res.status(500).json({ error });
    }
  });

module.exports = router;
