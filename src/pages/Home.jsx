import { useEffect, useState } from "react";
import Spinner from "../components/Spinner"
import Product from "../components/Product";






const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading , setLoading] = useState(false);
  const [posts,setPosts] = useState([]);


  async function fetchProdutData(){
    setLoading(true);


    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    }
    catch(err){
      console.log("Error Aggya bhai Api call mein")
      setPosts([]);
    }
    setLoading(false);
  }


  useEffect(()=>{
    fetchProdutData();
  },[]);

  return (
    <div>
      {
        loading?(<div className="w-screen h-screen
        flex justify-center items-center"><Spinner/></div>):(
          posts.length > 0?(
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10">
            {posts.map((post)=>(
              <Product key={post.id} post={post}/>
            ))}
          </div>

          ):(<div className="flex justify-center items-center h-full w-full"><p>No Posts Found</p></div>)
        )
      }

    </div>
  );
};

export default Home;
