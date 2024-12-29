import React, { useState } from 'react';
import { Link } from 'react-router-dom';




const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  return (
    <div className="contanier-fuild">
        <div className="row">
            <div className="col-md-4 nav-logo">
              <h1>FashionShop</h1>
            </div>
            <div className="col-md-4 nav-menu">
              <ul>
                <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link to="/mens">Men</Link>{menu==='mens'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link to="/womens">Women</Link>{menu==='womens'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to="/kids">Kids</Link>{menu==='kids'?<hr/>:<></>}</li>
                </ul>         
              </div>
            <div className="col-md-4 nav-login">
              <Link to='/login'><button>Login</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
