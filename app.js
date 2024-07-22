const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const noteRoute = require("./routes/noteRoutes")
const cors = require("cors");
const cookiParser = require("cookie-parser")
const noteRoutes = require("./routes/noteRoutes");
require("dotenv").config()
const path = require("path");

const PORT = process.env.PORT || 8009;

// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);
app.use(noteRoute);
app.use(noteRoutes);


app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname,"client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "bulld", "index.html"));
    });

app.listen(PORT,()=>{
    console.log(`server start at port no : ${PORT}`);
})