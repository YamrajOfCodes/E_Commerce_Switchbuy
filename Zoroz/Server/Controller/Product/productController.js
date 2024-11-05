const {faker}  = require("@faker-js/faker") 
const productDb = require("../../Model/Product/productModel");

const generateProducts = async(req,res)=>{
try {

    const result = new productDb({
        id: faker.string.uuid(),
        productname: faker.commerce.productName(),
        price: Math.round(faker.commerce.price()),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        image: faker.image.url()
    });
    await result.save();

    res.status(200).json(result);
    
} catch (error) {
    console.log(error);
    
}


}

const getAllproducts = async(req,res)=>{
    try {
        const  getallproducts = await productDb.find({});
        res.status(200).json(getallproducts)
    } catch (error) {
        console.log(error);
        
    }
}


const getSingleProduct = async(req,res)=>{
try {
    const {productId} = req.params;
    try {
        const product = await productDb.findOne({id:productId});
        if(product){
           return res.status(400).json(product)
        }

        res.status(400).json({error:"product not found"})
    } catch (error) {
        console.log(error);
        
    }
} catch (error) {
    
}
}


module.exports = { generateProducts ,getAllproducts, getSingleProduct }