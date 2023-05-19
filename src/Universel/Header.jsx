import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvide/AuthProvider";

const Header = () => {
  const { loggedOut, visitor } = useContext(AuthContext);
  const LoggedOutUser = () => {
    loggedOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  const NavBar = (
    <>
      <li>
        <Link to={"/"}>Home</Link>{" "}
      </li>
      <li>
        <Link to={"/alltoy"}>All Toys</Link>{" "}
      </li>
      <li>
        <Link to={"/mytoy"}>My Toy</Link>{" "}
      </li>
      <li>
        <Link to={"/addatoy"}>Add A Toy</Link>{" "}
      </li>
      <li>
        <Link to={"/"}>Blogs</Link>{" "}
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-stone-200	">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 hover:bg-green-500"
            >
              {NavBar}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            Toy <span className="text-green-500">Mart</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{NavBar}</ul>
        </div>
        <div className="navbar-end">
          {visitor && (
            <div className="me-1">
              <Link>
                {/* <FaUserCircle style={{fontSize:'2rem'}} ></FaUserCircle> */}
                <img
                  style={{ height: "45px" }}
                  className="rounded-full"
                  src={visitor.photoURL}
                  alt=""
                />
              </Link>
            </div>
          )}

          {visitor ? (
          <>


            <button
              onClick={LoggedOutUser}
              className="btn btn-outline border-1 text-green-600  hover:text-white hover:bg-green-500"
            >
              LogOut
            </button>
          </>
          ) : (
            <Link
              to={"/login"}
              className="btn btn-outline border-1 text-green-600  hover:text-white hover:bg-green-500"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
