import { useEffect, useState } from "react";
import GallerySingle from "./GallerySingle";

const GaleeryCard = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://toy-mart-server-arifremal.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6 bg-slate-200 my-5  ">
        {toys.map((toy) => (
          <GallerySingle key={toy._id} toy={toy}></GallerySingle>
        ))}
      </div>
    </div>
  );
};

export default GaleeryCard;
