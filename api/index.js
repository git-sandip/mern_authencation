const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected SucessFully! 🥳");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀Server started on port: ${PORT}`);
});
