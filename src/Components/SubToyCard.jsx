import { Link } from "react-router-dom";

const SubToyCard = ({ toy }) => {
  const {
    _id,
    picture_url,
    price,
    rating,
  
    name,
  } = toy;
  return (
    <div className="p-10 w-4/6 mx-auto">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-1/2"
            src={picture_url}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price:{price}</p>
          <p>Rating:{rating}</p>
          <div className="card-actions justify-end">
          <Link to={`/view/${_id}`} className="">
            {" "}
            <button className="btn bg-green-500 ">View Details</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubToyCard;
