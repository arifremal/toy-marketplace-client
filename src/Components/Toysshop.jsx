import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";

const Toysshop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredToys = toys.filter((toy) => {
    const toyName = toy.name ? toy.name.toLowerCase() : "";
    const query = searchQuery.toLowerCase();
    return toyName.includes(query);
  });

  return (
    <div>
      

      <div className="text-center border-red-500	 m-4">
        <input
         className="text-center border-2	 border-green-200 rounded-sm "
          type="text"
          placeholder="Search by toy name"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

<table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
      
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.map((toy) => (
              <ToysCard
                key={toy._id}
                toy={toy}
             
              ></ToysCard>
            ))}
          </tbody>
          {/* foot */}
        </table>
    </div>
  );
};

export default Toysshop;
