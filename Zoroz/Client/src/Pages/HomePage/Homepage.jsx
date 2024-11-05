import React, { useEffect, useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import Product from '../../Components/ProductsCard/Product'
import axios from 'axios';

const Homepage = () => {

    const [letest,setletest] = useState([]);

    const [popup,setpopup] = useState(true)

    useEffect(()=>{
      axios.get("http://localhost:4000/product/api/getproducts").then((res)=>{
            setletest(res)
            
        })    
    },[])
   

    const arr = letest.data?.slice(0,4);

    const Popup = async(req,res)=>{
      try {
        setpopup(false);

        const key = localStorage.getItem("user");
        if(key == null){
          const user = Math.random();
          localStorage.setItem("user",user);
        }
        
      } catch (error) {
        console.log(error);
        
      }
    }
   
    
  return (
    <div >

     {
      popup?  <div className="fixed inset-0 bg-black bg-opacity-40 z-10 flex justify-center items-center">
      <form className="w-11/12 max-w-sm md:w-3/6 lg:w-2/6 bg-white rounded-md p-6 flex flex-col items-center space-y-4 shadow-lg">
        <h2 className="text-center text-lg font-semibold text-gray-800">
          Now, You can purchase without worrying about login!
        </h2>
        <div className="flex justify-center w-full">
          <button
            className="px-6 py-2 w-4/12 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
            onClick={Popup}
          >
            Ok
          </button>
        </div>
      </form>
    </div>
    : ""
     }
      <Banner/>
        <h2 className='ml-10 mt-5 lg:text-xl font-semibold'>Latest Products</h2>
      <div className='product-container flex mt-10 justify-center lg:gap-10  flex-wrap h-auto mb-10 px-1'>
       {
        arr?.map((product)=>{
            return <Product image={product.image} description={product.description} id={product.id} price={product.price} productname={product.productname} category={product.category}/>
        })
       }
      </div>
    </div>
  )
}

export default Homepage
