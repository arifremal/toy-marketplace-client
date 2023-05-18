const Login = () => {
    const loginSubmit = event=>{
        event.preventDefault()
    }
  return <div className="hero min-h-screen bg-green-600">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center text-white">Login now!</h1>
      <p className="py-6 text-center">Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut assumenda excepturi exercitationem quasi. </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-100">
      <div className="card-body">
 <form onSubmit={loginSubmit} >
 <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         
          <input className="btn bg-green-500 border-none" type="submit" value="Login" />
        </div>
 </form>
      </div>
    </div>
  </div>
</div>
};

export default Login;
