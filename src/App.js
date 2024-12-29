import './App.css';
import React, { Fragment } from 'react'
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


 
 const App = () => {
   return (
    <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory category="mens"/>}/>
            <Route path='/womens' element={<ShopCategory category="womens"/>}/>
            <Route path='/kids' element={<ShopCategory category="kids"/>}/>
            <Route path="Product" element={<Product/>}>
              <Route path=":productId" element={<Product/>}/>
            </Route>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        </BrowserRouter>
    </div>
   )
 }
 
 export default App
 