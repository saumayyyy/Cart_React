import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";



const Cart = () => {

  const {cart} = useSelector((state)=>state);
  //state mtlb jo bhi object initial state mein bnaya h 
  const [totalAmount, setTotalAmount] = useState(0);

  //jsb bhi cart waale array mein kuchh change hoega 
  //tabhi toh total amount change hoega
  //toh total amount ka change is a side effect of change in cart
  //isiliye useEffect use kr rhe

  useEffect(()=>{
    setTotalAmount( cart.reduce((acc,curr)=> acc+curr.price,0));
  },[cart]);

  return (
    <div className="flex justify-center items-start">
      {
        cart.length>0?
        (<div className="max-w-6xl flex justify-center items-center gap-x-8">

          {/* cart items */}
          <div>
            {
              cart.map((item,index)=>(
                <CartItem key={item.id} item={item} itemIndex = {index}/>
              ))
            }
          </div>


          {/* total section */}
          <div className="max-w-[500] flex flex-col h-[500px] justify-between">
            <div>
                  <div className="text-green-700 font-extrabold uppercase text-lg">Your Cart</div>

                <div className="text-green-700 font-semibold uppercase text-3xl">Summary</div>

                <p className="mt-3">
                  <span className="font-semibold">Total Items : {cart.length}</span>
                </p>

            </div>
            
            <div>
              <span className="font-semibold ">Total Amount: ${totalAmount}</span>
              <button className="w-10/12 bg-green-700 px-5 py-2 rounded-lg mt-4 text-white font-semibold text-sm
              hover:bg-green-500 transition duration-300">CheckOut Now</button>
            </div>

          </div>
        </div>):
        (<div className="w-screen h-screen flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl">Your Cart is Empty.</h1>
          <Link to="/">
            <button className=" bg-green-700 px-5 py-2 rounded-lg mt-4 text-white font-semibold text-sm
              hover:bg-green-500 transition duration-300 w-[150px]">Shop Now</button></Link></div>)
      }
      
    </div>
    );
};

export default Cart;
