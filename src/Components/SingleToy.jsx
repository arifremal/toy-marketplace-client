import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const toys = useLoaderData();
  const { price,picture_url,name,seller_name,seller_email,available_quantity,detail_description,rating } = toys;
  return (
    <div className="p-7">
      <h1 className="text-center text-3xl font-bold p-2 uppercase ">
        Details of <span className="text-green-500">{name} </span>
      </h1>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture_url}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Toy Name:{name}</h2>
       <ul>
        <li > <strong className="text-green-700">Seller Name</strong> :{seller_name}</li>
        <li > <strong className="text-green-700">Seller email</strong> :{seller_email}</li>
        <li > <strong className="text-green-700">Price</strong> :${price}</li>
        <li > <strong className="text-green-700">Rating</strong> :{rating}</li>
        <li > <strong className="text-green-700">Available Quantity</strong> :{available_quantity}</li>
        <li > <strong className="text-green-700">Details</strong> :{detail_description}</li>
      
       </ul>
          <div className="card-actions justify-end">

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SingleToy;
