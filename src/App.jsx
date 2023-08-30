import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx"






const App = () => {
  return (
    <div >
      <div className="bg-slate-900 ">
        <Navbar/>
      </div>
      

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>

    </div>
  )
};

export default App;
