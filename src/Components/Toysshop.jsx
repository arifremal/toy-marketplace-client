import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";

const Toysshop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [toys, setToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");
  useEffect(() => {
    fetch("https://toy-mart-server-arifremal.vercel.app/toys")
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

  const handleSort = () => {
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
  };

  const handleSortAscending = () => {
    setSortOrder("ascending");
  };

  const handleSortDescending = () => {
    setSortOrder("descending");
  };

  const sortedToys = filteredToys.sort((a, b) => {
    const priceA = a.price;
    const priceB = b.price;
    return sortOrder === "ascending" ? priceA - priceB : priceB - priceA;
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
        />{" "}
        <br /> <br />
        <button
          className="btn bg-green-500 btn-xs border-none ms-2"
          onClick={handleSortAscending}
        >
          Lower Price
        </button>
        <button
          className="btn bg-green-500 btn-xs border-none ms-2"
          onClick={handleSortDescending}
        >
          Hogher Price
        </button>
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
          {sortedToys.map((toy) => (
            <ToysCard key={toy._id} toy={toy}></ToysCard>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default Toysshop;
