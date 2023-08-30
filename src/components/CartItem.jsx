import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice.js"
import toast from "react-hot-toast";



const CartItem = ({item, itemIndex}) => {


  const dispatch = useDispatch();

  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div>

      <div className="flex max-w-[650px] gap-5 border-b-2 border-black">

        <div className="h-[250px] w-[250px] p-5">
          <img src={item.image} alt="h" className="h-full w-full"/>
        </div>
        <div className="flex flex-col gap-5 p-5 max-w-[400px]">
          <h1 className="text-gray-700 font-semibold text-lg text-left mt-1">{item.title}</h1>
          <p className=" text-gray-500 font-normal text-sm ">{item.description.split(" ").slice(0,15).join(" ")}</p>
          <div className="flex w-full relative">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div>
            <FcDeleteDatabase onClick={removeFromCart}
            className="absolute right-5 text-3xl bg-red-200"/>
            </div>
          </div>
        </div>

      </div>


    </div>


  );
};

export default CartItem;
