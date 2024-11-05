import React, { useEffect, useState } from 'react'
import Product from '../../Components/ProductsCard/Product'
import axios from 'axios';
import { BASE_URL } from '../../Components/helper';

const Productpage = () => {

    const [productsdata,setproductsdata] = useState([]);

    useEffect(()=>{
       axios.get(`${BASE_URL}/product/api/getproducts`).then((res)=>{
        setproductsdata(res)
       }).catch((e)=>{
        console.log(e);
        
       })
    },[]);

    
  return (
    <div className='flex flex-wrap justify-center items-center gap-10 my-10'>
    {
      productsdata.data?.map((product)=>{
          return <Product image={product.image} description={product.description} id={product.id} price={product.price} productname={product.productname} category={product.category} />
      })
    }
  </div>
  )
}

export default Productpage
