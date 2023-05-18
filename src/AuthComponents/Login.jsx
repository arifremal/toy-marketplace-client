import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvide/AuthProvider";

const Login = () => {
  const {signInVisitor, googleUser}= useContext(AuthContext)
  const loginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInVisitor(email,password)
    .then(result=>{
      const visitor = result.visitor;
      console.log(visitor);
  })
  .then(error=>console.log(error))
  };
  const googleVisitors=()=>{
    googleUser()
    .then((result)=>{
      const googleVisitor= result.visitor
      console.log(googleVisitor);
    })
  }



  


  return (
    <div className="hero min-h-screen bg-green-600">
      <div className="hero-content flex-col lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center text-white">
            Login now!
          </h1>
          <p className="py-6 text-center">
            Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut
            assumenda excepturi exercitationem quasi.{" "}
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-100">
          <div className="card-body">
            <form onSubmit={loginSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p>
                    New to Toy Mart{" "}
                    <Link className="text-green-500" to={"/signup"}>
                      SignUp
                    </Link>{" "}
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-green-500 border-none"
                  type="submit"
                  value="Login"
                /> <br />
                or
                <br />
                <button onClick={googleVisitors}>Continue with google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
