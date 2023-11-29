const express = require("express");
const mongoose = require('mongoose');
const router = require("./routes/book-routes");

const app = express();
//XEC7TAhJFGnMBscv

//MiddleWares: which will convert all the database and response to the JSON
app.use(express.json());

app.use("/books", router)// localhost


mongoose.connect("mongodb+srv://admin:XEC7TAhJFGnMBscv@cluster0.s7rbhp1.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=>console.log("connect hogya Bhaiyo"))
.then(()=> {
    app.listen(5000);
}).catch((error)=>console.log("Error agya hmmm"));