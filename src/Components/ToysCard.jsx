import { Link } from "react-router-dom";

const ToysCard = ({ toy }) => {
  const {
    _id,
    picture_url,

    price,
    sub_category,
    name,
    available_quantity,
  } = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={picture_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Sub Category:{sub_category}</p>
        <p>Price:$ {price}</p>
        <p>Available Quantity:{available_quantity}</p>
        <div className="card-actions justify-end">
          <Link to={`/view/${_id}`} className="">
            {" "}
            <button className="btn bg-green-500 ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
