const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const DATABASE = process.env.DATABASE;
// console.log(DATABASE);
const app = express();
const PORT = 5000;
const route = require("./routes/route");
app.use(express.json())
app.use(cors())

mongoose
  .connect(
    "mongodb+srv://shivamp2001:shivamp2001@mycluster.au9iv5p.mongodb.net/shivam2001-db"
  )
  .then(() => console.log("Connected To Database"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
