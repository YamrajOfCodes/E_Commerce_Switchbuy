import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loader from '../../Components/Loader/Loader';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../Components/helper';

const CheckoutPage = () => {

    const {state} = useLocation();

    const navigate= useNavigate();

    let amount = 400;
    const paymentMethod = "credit_card";
    const id = localStorage.getItem("user")

    const [status,setstatus] = useState(Boolean);
    const [loader,setloader] = useState(false)

    const [inputdata,setinputdata]  = useState({
      name:"",
      email:"",
      phone:"",
      address:"",
      pincode:""
    })


    const changeinput = (e)=>{
      const {name,value} = e.target;
      setinputdata({...inputdata,[name]:value});
      
       

    }
    const data = {
    amount,
    paymentMethod
    }
    const payment = async(e)=>{
      e.preventDefault();
     
      const {name,email,phone,pincode,address} = inputdata;

      if(name == ""){
        toast.error("name is required")
       }else if(email == ""){
        toast.error("email is required")
       }
       else if(phone == ""){
        toast.error("contact number is required")
       }else if(pincode == ""){
        toast.error("pincode is required")
       }else if(address == ""){
        toast.error("please enter your address")
       }else{
        
   setloader(true)
   axios.get(`${BASE_URL}/cart/api/payment/${amount}`).then((res)=>{
    setstatus(res.data.status);
    setTimeout(() => {
      setloader(false)
      alert("Payment is Successfull") 
      axios.delete(`${BASE_URL}/cart/api/cart/${id}`)
      navigate("/products")
      toast.success("Thank you for shopping")
    }, 2000);
    
  }).catch((error)=>{
    setstatus(error.response.data.status);
    setTimeout(() => {
      setloader(false)
      alert("Payment is failed!! Please try again") 
    }, 2000);
  })
  

       }
    }

  return (
    <div>
     {loader ?    <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
      <form className="w-11/12 max-w-sm md:w-3/6 lg:w-2/6 rounded-md p-6 flex flex-col items-center space-y-4 shadow-lg ">
        <Loader/>
      </form>
     </div> : ""}
      <div className="max-w-md mx-auto p-5 md:p-10 bg-white shadow-lg rounded-lg">
  <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">Checkout</h2>

  {/* Form Fields */}
  <form className="space-y-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        value={inputdata.name}
        onChange={changeinput}
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
        placeholder="Enter your name"
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        value={inputdata.email}
        onChange={changeinput}
        required="@"
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
        placeholder="Enter your email"
      />
    </div>

    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
      <input 
        type="text" 
        id="phone" 
        name="phone" 
        value={inputdata.phone}
        onChange={changeinput}
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
        placeholder="Enter your phone number"
      />
    </div>

    <div>
      <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
      <textarea 
        id="address" 
        name="address" 
        value={inputdata.address}
        onChange={changeinput}
        rows="3" 
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-none" 
        placeholder="Enter your address"
      ></textarea>
    </div>

    <div>
      <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
      <input 
        type="text" 
        id="pincode" 
        name="pincode" 
        value={inputdata.pincode}
        onChange={changeinput}
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
        placeholder="Enter your pincode"
      />
    </div>
  </form>

  {/* Price Display */}
  <p className="mt-6 text-center text-lg font-semibold">Total Price: <span className="text-blue-500">{state}</span></p>

  {/* Pay Button */}
  <div className="mt-6 text-center">
    <button 
      onClick={payment}
      className="w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
      Pay
    </button>
  </div>
</div>

    </div>
  )
}

export default CheckoutPage
