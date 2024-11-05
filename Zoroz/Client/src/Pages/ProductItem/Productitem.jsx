import React, { useEffect, useState } from 'react'
import star from "./star_icon.png"
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { BASE_URL } from '../../Components/helper'
const Productitem = () => {


  const {id} = useParams();
 
  
   const [quantity,setquantity] = useState(1);
   const [product,setproduct] = useState([]);
   
   const decreasequantity = ()=>{
   if(quantity>0){
    setquantity(quantity-1)
   }
   }

   const local = ()=>{

    const userId = localStorage.getItem("user")

    axios.post(`${BASE_URL}/cart/api/addtocart/${userId}`,{
      data:product,
      quantity,
      productid:product.id
    }).then((res)=>{
      console.log("successfully added");
      
    }).catch((error)=>{
      console.log("error while adding");
      
    })
    

   }


   useEffect(()=>{
    axios.get(`${BASE_URL}/product/api/getsingleproduct/${id}`).then((res)=>{
       setproduct(res.response.data)
        
    }).catch((e)=>{
       setproduct(e.response.data)

        
    })
},[])

    
    return (
        <>
            <div className="sections flex justify-center items-center w-full mt-10 mb-10" style={{height:"80vh"}}>
                     <div className="containers w-4/6 ">
                    <div className="row lg:flex">
                        <div className="w-full">
                          <img src={product?.image} className='w-3/4' style={{borderRadius:"17px"}} alt="" srcset="" />
                        </div>
                        <div className="right-part">
                             <div className="content flex flex-col gap-2">
                                <h4 className='lg:text-xl'>{product?.productname}</h4>
                                <p className='para'></p>
                               <div className="stars flex ">
                                <img src={star} alt="rating's star" srcset="" />
                                <img src={star} alt="rating's star" srcset="" />
                                <img src={star} alt="rating's star" srcset="" />
                                <img src={star} alt="rating's star" srcset="" />
                               </div>
                               <p className='desc'>{product?.description}</p>
                               <h4 className="price ">
                                <strong>RS: {product?.price}</strong>
                               </h4>
                               <div className="quantity flex gap-2 mt-2">
                                <button className='px-2  bg-red-300 text-white font-bold text-lg rounded-sm' onClick={(e)=>{setquantity(quantity+1)}}>+</button>
                                <p>{quantity}</p>
                                <button className='px-2  bg-red-300 text-white font-bold text-lg rounded-sm' onClick={decreasequantity}>-</button>
                               </div>
                               <div className="order-ctas mt-2">
                              <button className='px-3 py-1 bg-red-400 text-white rounded-md hover:bg-red-500' onClick={local}>Add to cart</button>
                               </div>
                              
                             </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Productitem
