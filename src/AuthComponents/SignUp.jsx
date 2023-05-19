import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvide/AuthProvider";

const SignUp = () => {
    const {createVisitor}=useContext(AuthContext)
    const SignUpSubmit = event=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name,email,password,photo);
        
        createVisitor(email,password)
        .then(result=>{
            const visitor = result.visitor;
            console.log(visitor);
        })
        .then(error=>console.log(error))


    }
    return (
        <div className="hero min-h-screen bg-green-600">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center text-white">Registration now!</h1>
            <p className="py-6 text-center">Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut assumenda excepturi exercitationem quasi. </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-100">
            <div className="card-body">
       <form onSubmit={SignUpSubmit} >
       <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" />
              </div>
       <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" name="password" className="input input-bordered" />
              
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" placeholder="photoUrl" name="photo" className="input input-bordered" />
                <label className="label">
                  <p>Already have an Account<Link className="text-green-500" to={"/login"}>Login</Link> </p>
                </label>
              </div>
              <div className="form-control mt-6">
               
                <input className="btn bg-green-500 hover:bg-black border-none" type="submit" value="Sign Up" />
              </div>
       </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;