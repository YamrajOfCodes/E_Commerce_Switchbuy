import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './Layout/Layout'
import Homepage from './Pages/HomePage/Homepage'
import Product from './Components/ProductsCard/Product'
import { Route, Routes } from 'react-router-dom'
import Productpage from './Pages/Product/Productpage'
import Productitem from './Pages/ProductItem/Productitem'
import Cartpage from './Pages/CartPage/Cartpage'
import CheckoutPage from './Pages/Checkout/CheckoutPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return(
  <>
 <Routes>
  <Route path='/' element={<Layout><Homepage/></Layout>}/>
  <Route path='/products' element={<Layout><Productpage/></Layout>}/>
  <Route path='/products/:id' element={<Layout><Productitem/></Layout>}/>
  <Route path='/cart' element={<Layout><Cartpage/></Layout>}/>
  <Route path='/checkout' element={<Layout><CheckoutPage/></Layout>}/>

 </Routes>
 <ToastContainer />
  </>
  )
}

export default App
