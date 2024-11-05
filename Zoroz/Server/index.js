const express = require("express");
const app = express();
require("dotenv").config({path:"./store.env"})
app.use(express.json());
const cors = require("cors");
app.use(cors("*"));
const Dbconnect = require("./Db/Dbconnect");


const productRouter  = require("./Router/Product/productRouter");
app.use("/product/api",productRouter); 


const cartRouter = require("./Router/Cart/cartRouter");
app.use("/cart/api",cartRouter)





Dbconnect();

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("listening");
    
})














