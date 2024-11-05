const Router = require("express").Router();
const cartController = require("../../Controller/Cart/cartController");

Router.post("/addtocart/:userId",cartController.addtocart);
Router.get("/getcart/:userId",cartController.getcart);
Router.delete("/deleitem/:productId",cartController.deleteItem)
Router.get("/payment/:data",cartController.payment)
Router.delete("/cart/:id",cartController.cleartcart)




module.exports = Router;