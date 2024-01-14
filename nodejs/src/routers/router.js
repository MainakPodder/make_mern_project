const express = require("express");
const router = express.Router();
const Mern = require("../models/schma");

router.get("/", async (req, res) => {
  try {
    const data = await Mern.find();
    res.status(200).json({
      data
    })
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    await Mern.create(req.body);
    res.status(201).json({
      message: "inserted...!",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
