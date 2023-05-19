import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvide/AuthProvider";

const MyToy = () => {
  const { visitor } = useContext(AuthContext);
  const [ toys, setToys ] = useState([]);

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
      
    <p>t {toys.length} </p>

    </div>
  );
};

export default MyToy;
