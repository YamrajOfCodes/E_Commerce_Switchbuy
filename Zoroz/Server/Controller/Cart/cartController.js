const cartDb = require("../../Model/Cart/cartModel");
const { findOne } = require("../../Model/Product/productModel");
const {faker} = require("@faker-js/faker")

const addtocart = async(req,res)=>{
    try {
        const { data, quantity, productid } = req.body;
        const { userId } = req.params;
    
        console.log("Quantity:", quantity);
        console.log("User ID:", userId);
    
      
        if (!data) {
            return res.status(400).json({ error: "Data is not provided" });
        }
    
    
        const existingCartItem = await cartDb.findOne({ id: userId, productid });
    
      
    
        if (existingCartItem) {
            // If item already exists, increase the quantity
            existingCartItem.quantity += quantity;
            await existingCartItem.save();
            console.log("Updated Quantity:", existingCartItem.quantity);
            return res.status(200).json(existingCartItem);
        } else {
            
            const newCartItem = new cartDb({
                id: userId,
                data,
                productid,
                quantity
            });
    
            await newCartItem.save();
            console.log("New Cart Item Added:", newCartItem);
            return res.status(200).json(newCartItem);
        }
    
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "An error occurred while updating the cart" });
    }
    
}


const getcart = async(req,res)=>{
  try {
    const {userId} = req.params;
    console.log(userId);
    
    const cartdata = await cartDb.find({id:userId});
    res.status(200).json(cartdata)
  } catch (error) {
    console.log(error);
    
  }
}


const deleteItem = async(req,res)=>{
    try {
        const {productId} = req.params;
        console.log(productId);
        
        
        const response = await cartDb.findByIdAndDelete({_id:productId})
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        
    }
}

const payment = (req, res) => {
    try {
         
        const {data} = req.params

        const isSuccess = Math.random() > 0.3;      // 80% chances of payment success
      

        const success = {
            
                status: 'success',
                message: 'Payment processed successfully.',
                transactionId: faker.string.uuid(), // Generate a mock transaction ID
                amount: data,
                paymentMethod: "credit_Card",
                timestamp: new Date().toISOString(),
             
        }

        if(isSuccess){
            res.status(200).json(success);
            
        }else{
            res.status(400).json({
                status: 'failure',
                message: 'Payment failed. Please try again.',
                errorCode: 'PAYMENT_ERROR',
                timestamp: new Date().toISOString(),
             });
        }
        
        

    } catch (error) {
        
    }
  };

  const cleartcart = async(req,res)=>{
    const {id} = req.params;

    try {
        const clearCart = await cartDb.findOneAndDelete({id:id});
    } catch (error) {
        
    }
  }


module.exports = {
    addtocart,getcart,deleteItem,payment,cleartcart
}