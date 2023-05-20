import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvide/AuthProvider";
import MytoyTable from "./MytoyTable";
import usePath from "../hooks/usePath";

const MyToy = () => {
  usePath('My Toy')
  const { visitor } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [update,SetUpdate] = useState(false)

  const toyDelete = (id) => {
    const process = confirm("Are you sure want to delete");
    if (process) {
      fetch(`http://localhost:5000/toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            alert("deleted");
            const remain = toys.filter((toy) => toy._id !== id);
            setToys(remain);
          }
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/mytoy/${visitor?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [visitor,update]);

  const toyUpdate = (data) => {
    fetch(`http://localhost:5000/toyupdate/${data?._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          SetUpdate(!update);
        }
        console.log(result);
      });
  };

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
            {toys.map((toy) => (
              <MytoyTable
                key={toy._id}
                toy={toy}
                toyDelete={toyDelete}
                toyUpdate={toyUpdate}
              ></MytoyTable>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyToy;
