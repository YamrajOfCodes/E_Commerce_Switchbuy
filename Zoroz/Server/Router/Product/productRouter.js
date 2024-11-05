const Router = require("express").Router();
const productController = require("../../Controller/Product/productController");


Router.post("/generateproducts",productController.generateProducts);
Router.get("/getproducts",productController.getAllproducts);
Router.get("/getsingleproduct/:productId",productController.getSingleProduct);





module.exports = Router;