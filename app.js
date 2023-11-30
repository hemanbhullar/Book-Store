const express = require("express");
const mongoose = require('mongoose');
const router = require("./routes/book-routes");

const app = express();
//XEC7TAhJFGnMBscv

//MiddleWares: which will convert all the database and response to the JSON
app.use(express.json());

app.use("/books", router)// localhost


mongoose.connect(DATABASE_URL);
.then(()=>console.log("connect hogya Bhaiyo"))
.then(()=> {
    app.listen(5000);
}).catch((error)=>console.log("Error agya hmmm"));
