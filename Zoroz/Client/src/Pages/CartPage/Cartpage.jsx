import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BASE_URL } from '../../Components/helper';

const Cartpage = () => {

    const {state} = useLocation();
    

    
   const [quantity,setquantity] = useState(1);
   const decreasequantity = ()=>{
   if(quantity>0){
    setquantity(quantity-1)
   }
   }

    const total = state?.[1] 
    const price = state?.[0]?.price
   

    const [cart,setcart]=useState([])
    const [deleteitem,setdeleteitem] = useState();

    const userId = localStorage.getItem("user")

    useEffect(()=>{
      axios.get(`${BASE_URL}/cart/api/getcart/${userId}`).then((res)=>{
       setcart(res.data);
       
        
      }).catch((error)=>{
        console.log("error while adding",error);
        
      })
    },[deleteitem])

    
    

    

    const deleteItem = (id)=>{
   
      
      const productId = id
      axios.delete(`${BASE_URL}/cart/api/deleitem/${productId}`).then((res)=>{
            setdeleteitem(res);
      }).catch((error)=>{
        console.log(error);
        
      })
    }

    useEffect(()=>{

    },[deleteitem])

    let totalprice = 1;
    cart.map((cartproduct)=>{
       totalprice = totalprice + cartproduct?.data[0].price * cartproduct.quantity;
       return totalprice
    })
  
    
    
  return (

 <>
 
 {
  cart.length>0 ?   <div className="px-5 md:px-10 lg:w-3/4 mx-auto">
  <h1 className="text-center mt-2 text-lg md:text-xl font-semibold">Your Shopping Cart</h1>

  {/* Header for Product, Price, Quantity */}
  <div className="menu mt-5 flex justify-between text-sm border-b pb-2">
    <h2 className="w-1/2 md:w-1/3">Product</h2>
    <div className="flex gap-4 md:gap-7 w-1/2 md:w-2/3 justify-end">
      <h2>Price</h2>
      <h2>Quantity</h2>
    </div>
  </div>

  {/* Product items */}
  {
    cart?.map((product, index) => (
      <div key={index} className="menu mt-5 flex  md:flex-row justify-between gap-5 items-center md:items-start">
        <div className="flex gap-2 items-center w-full md:w-1/3">
          <img src={product?.data[0]?.image} className="w-14 h-14 object-cover" alt={product?.data[0]?.productname} />
          <h2 className="text-sm md:text-base">{product?.data[0]?.productname}</h2>
        </div>
        <div className="flex gap-4 md:gap-7 items-center w-full md:w-2/3 justify-end">
          <h2 className="text-sm md:text-base">{product?.data[0]?.price}</h2>
          <h2 className="text-sm md:text-base">{product?.quantity}</h2>
          <h2 onClick={() => deleteItem(product?._id)} className="cursor-pointer text-red-500">X</h2>
        </div>
      </div>
    ))
  }

  {/* Total and Checkout button */}
  <div className="mt-10 flex justify-end mb-5">
    <div className="flex flex-col gap-2 w-full md:w-auto text-center md:text-right">
      <p className="text-sm md:text-base font-semibold">Total: {totalprice -1}</p>
     <Link to={"/checkout"} state={totalprice - 1}> <button className="text-sm md:text-base px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600">Checkout</button></Link>
    </div>
  </div> 
</div> : <div className=' flex justify-center items-center ' style={{height:"90vh"}}>
<img src="https://cdn-icons-png.flaticon.com/512/11010/11010851.png" className='h-3/6' alt="" srcset="" />
</div>
 }
 </>

  )
}

export default Cartpage
