import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvide/AuthProvider";
import MytoyTable from "./MytoyTable";

const MyToy = () => {
  const { visitor } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoy/${visitor?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [visitor]);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold p-2 uppercase ">
        My <span className="text-green-500">toy </span>
      </h1>



      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
           
              <th>Toy Name</th>
              <th>Details</th>
              <th>Available Quantity</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
     {
      toys.map(toy=><MytoyTable key={toy._id} toy={toy}  ></MytoyTable>)
     }
            
          </tbody>
          {/* foot */}
    
        </table>
      </div>
    </div>
  );
};

export default MyToy;
