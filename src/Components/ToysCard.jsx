const ToysCard = ({toy}) => {
    const {title,img,price}= toy
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
          <button className="btn bg-green-500 ">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
