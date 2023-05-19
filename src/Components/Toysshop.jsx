import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";

const Toysshop = () => {
    const [toys,setToys]= useState([])
    useEffect(()=>{

        fetch('http://localhost:5000/toys')
        .then(res=>res.json())
        .then(data=> setToys(data))

    },[])

  return <div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
  {
        toys.map(toy=><ToysCard key={toy._id} toy={toy} ></ToysCard>)
    }
  </div>

  </div>;
};

export default Toysshop;
