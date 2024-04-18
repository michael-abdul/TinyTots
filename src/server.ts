import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection successfully");
    const PORT = process.env.PORT ?? 9009;
    app.listen(PORT, function () {
      console.log(`The server run on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("Error on connection MongoDB", err));
