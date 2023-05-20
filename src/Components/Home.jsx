import GaleeryCard from "./GaleeryCard";
import ShoByCategory from "./ShoByCategory";

const Home = () => {
  return (
    <div>
      <div className="p-10">
        <div className="hero min-h-screen bg-white p-4">
          <div className="hero-content  flex-col lg:flex-row">
            <img
              className="rounded-lg p-3"
              src={"https://i.ibb.co/3vWV2CK/rsz-71uv2p59vcl.jpg"}
            />
            <div>
              <h1 className="text-5xl font-bold">
                THE NO. 1 SOURCE FOR ALL THINGS MARVEL LEGENDS
              </h1>
              <p className="py-6">
                WHERE LEGENDS ARE MADE BACKGROUND ARTIST CREDIT – MICHAEL BELL
                AKA @3_SHOTS3
              </p>
              <button className="btn  bg-green-500 border-none hover:bg-black">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* gallery */}
      {/* <div>
    
<div className="carousel carousel-center rounded-box">
  <div className="carousel-item">
    <img src={"https://i.ibb.co/JkWSf9P/1.png"}  alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={"https://i.ibb.co/JkWSf9P/1.png"}  alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={"https://i.ibb.co/JkWSf9P/1.png"}  alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={"https://i.ibb.co/JkWSf9P/1.png"}  alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={"https://i.ibb.co/JkWSf9P/1.png"}  alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={"https://i.ibb.co/JkWSf9P/1.png"}  alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={"https://i.ibb.co/JkWSf9P/1.png"} alt="Pizza" />
  </div>
</div>
</div> */}
      <h1 className="text-center text-3xl font-bold p-2 uppercase ">
        Toy <span className="text-green-500">Gallery</span>
      </h1>
      <GaleeryCard></GaleeryCard>

      {/* shob by category */}
      <div>
        <h1 className="text-center text-3xl font-bold p-2 uppercase ">
          Shop by <span className="text-green-500">category</span>
        </h1>
        <ShoByCategory></ShoByCategory>
      </div>
    </div>
  );
};

export default Home;
