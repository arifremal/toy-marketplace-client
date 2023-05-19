import { Link } from "react-router-dom";

const ToysCard = ({toy}) => {
    const {_id,title,img,price}= toy
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price:$ {price}</p>
        <div className="card-actions justify-end">
         <Link to={`/view/${_id}`} className=""> <button className="btn bg-green-500 ">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
