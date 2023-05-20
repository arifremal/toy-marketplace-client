import { Link } from "react-router-dom";

const GallerySingle = ({ toy }) => {
  const {
    _id,
    picture_url,

    sub_category,
    name,
  } = toy;
  return (
   
    <div>
 <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-white rounded-box">
  <div className="carousel-item">
    <img src={picture_url} className="rounded-box" />
</div>
</div>
    </div>
  );
};

export default GallerySingle;
