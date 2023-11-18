const express = require("express");
const router = express.Router();
const food_items = require("../models/food_items");


router.get("/fetchfood",async (req, res) => {
    const data = await food_items.find();
    res.status(200).json(data);
  
  });
module.exports = router;
