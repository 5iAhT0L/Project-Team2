import express from "express";
import fetch from "node-fetch";

const router = express.Router();

// fetch all countries
router.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags"
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching countries", error: err });
  }
});

export default router;
