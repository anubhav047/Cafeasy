const express = require("express");
const router = express.Router();
const USER = require("../models/user");

router.post("/login", async (req, res) => {
    let success=false;
    try{
      const {email,password}=req.body;
      if(!email||!password)
      {
        return res.status(422).json({success,error:"Please enter all the entries"})
      }
      const user=await USER.findOne({email:email})
      if(!user)
      {
        return res.status(422).json({success,error:"User does not exist"})
      }
 
      if(user.password!=password)
      {
        return res.status(422).json({success,error:"Invalid Password"})
      }
      success=true;
      return res.status(200).json({success,msg:"Logged in successfully"})
    }
    catch(error)
    {
      console.error(error)
      return res.status(500).json({error:"Internal Server Error"})
    }
  });
module.exports = router;
