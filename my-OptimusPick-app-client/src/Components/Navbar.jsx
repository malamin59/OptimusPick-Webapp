import { Link, NavLink } from "react-router";
import logo from "../assets/logo.jpg";
import UseAuth from "../Hooks/UseAuth";
import { toast } from "react-toastify";
import "./NavVar.css";
const Navbar = () => {
  const { user, logOut } = UseAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully!"))
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/queries">All Queries</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addQueries">Add Queries</NavLink>
          </li>
          <li>
            <NavLink to="/experience"> experience</NavLink>
          </li>
          <li>
            <NavLink to="/recommendationsForMe">Recommendations for me</NavLink>
          </li>
          <li>
            <NavLink to="/myQueries">My Queries</NavLink>
          </li>
          <li>
            <NavLink to="/myRecommendations">My Recommendations</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="drawer z-50 sticky top-0 bg-white shadow-md">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex items-center justify-between px-1 py-2">
        {/* Left: Logo & Drawer Toggle */}
        <div className="flex ">
          <label htmlFor="nav-drawer" className="btn btn-ghost lg:hidden">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <Link to="/" className="flex items-center gap-">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={logo}
              alt="Logo"
            />
            <span className="font-bold text-xl hidden md:inline">
              QueryConnect
            </span>
          </Link>
        </div>

        {/* Center: Large screen menu */}
        <ul className="menu menu-horizontal gap-2 hidden lg:flex">{links}</ul>

        {/* Right: User Info */}
        <div className="flex items-center gap-3">
          {user?.photoURL && (
            <div className="tooltip tooltip-bottom" data-tip={user.email}>
              <img
                className="w-10 h-10 rounded-full border shadow"
                src={user.photoURL}
                alt="User"
              />
            </div>
          )}
          {user ? (
            <button onClick={handleLogOut} className="btn btn-primary">
              Logout
            </button>
          ) : (
            <>
              <Link to="/register">
                <button className="btn btn-outline">Register</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Drawer Side Menu for Mobile */}
      <div className="drawer-side">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
