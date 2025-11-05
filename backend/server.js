import express from "express";
import cors from "cors";
import countriesRouter from "./routes/countries.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// routes
app.use("/api/countries", countriesRouter);

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
