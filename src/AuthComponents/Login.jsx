import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvide/AuthProvider";

const Login = () => {
  const {signInVisitor, googleUser}= useContext(AuthContext)
  const navigate= useNavigate()
  const path = useLocation()
  const from = path.state?.from?.pathname || '/'
  console.log(from);

  const loginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInVisitor(email,password)
    .then(result=>{
      const visitor = result.visitor;
      console.log(visitor);
      form.reset();
      navigate(from)
   
      
      
  })
  .then(error=>console.log(error))
  };
  const googleVisitors=()=>{
    googleUser()
    .then((result)=>{
     const user = result.user;
     console.log(user);
     navigate(from)
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
          If you want to explore more
             <br />  such as view Details,Add a Toy pages and so on
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
                  className="btn bg-green-500 border-none hover:bg-black"
                  type="submit"
                  value="Login"
                /> <br />
                <strong className="text-center">or</strong>
                <br />
                <button className="btn btn-outline border-green-500 hover:bg-black" onClick={googleVisitors}>Continue with google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
