import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import "dotenv/config";
import sizeRoutes from "./routes/size";
import productRoutes from "./routes/products";
import colorRoutes from "./routes/color";
import categoryRoutes from "./routes/categories";
const app = express();

// middleware
var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// route
app.use("/api", sizeRoutes);
app.use("/api", productRoutes);
app.use("/api", colorRoutes);
app.use("/api", categoryRoutes);
// connnect database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to database"))
  .catch((error) => console.log(error));
//connect
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running port", PORT);
});
