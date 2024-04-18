const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());

const cors = require('cors');
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute.js");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");


//fetching react data to database 
const Product=require('./models/productModel.js');
app.post("api/v1/admin/product/new",async(req,res)=>{
  let product= new Product(req.body);
  let result= await product.save();
  res.send(result);
})

//fetching data from database
app.get('admin/products',(req,res)=>{
  Product.find()
  .then(products => res.json(products))
  .catch(err => res.json(err))
})

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);



// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;