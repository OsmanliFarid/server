import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import productsRoute from "./Routes/productsRoute.js";

const app = express();
const port = 3030;
dotenv.config();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server işləyir: ${port}`);
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("Uğurla əlaqə quruldu");
    })
    .catch((err) => {
      console.error("MongoDB əlaqə xətası:", err);
    });
});

app.use("/products", productsRoute);
