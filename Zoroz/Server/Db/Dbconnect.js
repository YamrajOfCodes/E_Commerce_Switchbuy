const mongoose = require("mongoose");


     
     const  dbConnect = async()=>{
        const mongoURL  = process.env.DATABASE;
       const connect =  await mongoose.connect(mongoURL);

       if(connect){
        console.log("connected");
       }else{
        console.log("error while connect");
        
       }
    }
    

    module.exports = dbConnect;
