import GaleeryCard from "./GaleeryCard";
import ShoByCategory from "./ShoByCategory";

const Home = () => {
  return (
    <div>
      <div className="p-10">
        <div className="hero min-h-screen bg-white p-4">
          <div className="hero-content  flex-col lg:flex-row">
            <img
              className="rounded-lg p-3 w-1/2 "
              src={
                "https://i.ibb.co/F7S3FJY/hero.png"
              }
            />
            <div>
              <h1 className="text-5xl font-bold">
              Discover <span className="text-green-500 underline">endless</span> joy with our toys collections!
              </h1>
              <p className="py-6">
              Delight in American Girl, Barbie, and Baby Dolls
              </p>
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-12">
                    <img
                      src={
                        "https://cdn.vox-cdn.com/thumbor/SiU8hkQH47M9a6W6jo65HxCVKoY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22189115/jbareham_201221_0988_american_girl.jpg"
                      }
                    />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img
                      src={
                        "https://www.gannett-cdn.com/presto/2019/11/05/USAT/aead9a73-6324-4135-b76c-e15d0921b14f-Full_Size_American_Girl_1.jpg"
                      }
                    />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img
                      src={
                        "https://images-na.ssl-images-amazon.com/images/I/71x8m8uqRyL._AC_UL600_SR600,600_.jpg"
                      }
                    />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-green-500 text-neutral-content">
                    <span>+10</span>
                  </div>
                </div>
              </div>
              <button className="btn my-2 bg-green-500 border-none hover:bg-black">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

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
      </div >

      <h1 className="text-center text-3xl font-bold p-2 uppercase ">
        Seller <span className="text-green-500">Review</span>
      </h1>
    <div >
    <div className="text-center py-4  "data-aos="fade-up" >
        <div className="avatar indicator text-center mr-20">
          <span className="indicator-item badge bg-black">Nice Product</span>
          <div className="w-20 h-20 rounded-full">
            <img src={'https://static.vecteezy.com/system/resources/thumbnails/007/486/093/small/portrait-of-happy-redhaired-woman-employee-in-optical-glasses-has-satisfied-expression-works-with-modern-gadgets-waits-for-meeting-with-colleague-prepares-accounting-report-sits-in-own-cabinet-free-photo.jpg'} />
          </div>
        </div>
        <div className="avatar indicator text-center mr-20">
          <span className="indicator-item badge bg-black">Good Quality</span>
          <div className="w-20 h-20 rounded-full">
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTviW8N10VfHUqOrhXMDQcMTLt1GuZ9XXm8OgsSHH0GDoccu8Pra7UXEmawxI6XrF7p_JA&usqp=CAU'} />
          </div>
        </div>
        <div className="avatar indicator text-center me-5">
          <span className="indicator-item badge bg-black">My kids love's so much</span>
          <div className="w-20 h-20 rounded-full">
            <img src={'https://blog.hubspot.com/hs-fs/hubfs/employee-retention-rate.jpg?width=595&height=400&name=employee-retention-rate.jpg'} />
          </div>
        </div>
    
      </div>
    </div>

      <h1 className="text-center text-3xl font-bold p-2 uppercase ">
        Get in <span className="text-green-500">touch</span>
      </h1>
      <div className="hero min-h-screen bg-base-200" >
        <div className="hero-content flex-col lg:flex-row p-6">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact US!</h1>
            <p className="py-6">
              {" "}
              If you have any question.just fill up this form.Don't forget to
              stay connect with us{" "}
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" data-aos="fade-left">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name=""
                  id=""
                  cols="10"
                  rows="5"
                  className="border-2"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 border-none">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
