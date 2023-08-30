import React from "react";
import { FaShoppingCart } from 'react-icons/fa';
import image from "./images.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CartSlice from "../redux/Slices/CartSlice";


const Navbar = () => {

  const {cart} = useSelector((state)=>state);


  return (
    <div>
      <nav className="flex justify-between items-center  h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div>
          <img src={image} alt="Load" className="h-20 ml-5"/>
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl"/>
              {
                cart.length>0  &&  (<span className="absolute -top-1 -right-2
                bg-green-600 text-xs w-5 h-5 flex justify-center item-center animate-bounce
                rounded-full text-white">{cart.length}</span>)
              }
            </div>
          </NavLink>
          
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
