const { default: mongoose } = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router");

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://lakkaru:Mo61633583@cluster0.5tnt4zp.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to Mongo db");
  } catch (error) {
    console.log("Mongo db Error: ", error);
  }
};
connect();
const server = app.listen(3001, "localhost", () => {
  console.log(`Node server is listning to ${server.address().port}`);
});

app.use("/api", router);
