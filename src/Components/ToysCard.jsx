import { Link } from "react-router-dom";

const ToysCard = ({ toy }) => {
  const {
    _id,

    price,
    sub_category,
    name,
    seller_name,
    available_quantity,
  } = toy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{seller_name}</div>
          </div>
        </div>
      </td>
      {/* <td>{detail_description}</td> */}
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>
        <p>{price}</p>
      </td>
      <td>
        <p>{available_quantity}</p>
      </td>
      <th>
        <Link to={`/view/${_id}`} className="">
          <button className="btn bg-green-500 btn-xs border-none ">
            View Details
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default ToysCard;
