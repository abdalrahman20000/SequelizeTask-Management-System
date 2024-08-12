require("dotenv").config();
const express = require("express");
const body_parser = require("body-parser");
const routers = require("./routers/routers");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(body_parser.json());

// console.log("e log 1");
app.use("/db/tms", routers);


// sign_up();

const PORT = 5000;
app.listen(PORT, () => { console.log(`server running on port ${PORT}`) });