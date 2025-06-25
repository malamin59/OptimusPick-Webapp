import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.jpg';
import UseAuth from '../Hooks/UseAuth';
import { toast } from 'react-toastify';
import './NavVar.css';

const Navbar = () => {
    const { user, logOut } = UseAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => toast.success("Logged out successfully!"))
            .catch(error => console.log(error));
    };

    const links = (
        <>
            <li><NavLink to="/" className="hover:text-secondary font-medium">Home</NavLink></li>
            <li><NavLink to="/queries" className="hover:text-secondary font-medium">All Queries</NavLink></li>
            <li><NavLink to="/addQueries" className="hover:text-secondary font-medium">Add Queries</NavLink></li>
            <li><NavLink to="/recommendationsForMe" className="hover:text-secondary font-medium">Recommendations for me </NavLink></li>
            <li><NavLink to="/myQueries" className="hover:text-secondary font-medium">My Queries</NavLink></li>
            <li><NavLink to="/myRecommendations" className="hover:text-secondary font-medium">My Recommendations</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-white shadow-md px-4 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost p-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-2">
                    <img className="w-12 h-12 rounded-full object-cover" src={logo} alt="Logo" />
                    <span className="font-bold text-xl text-gray-800 hidden md:inline">QueryConnect</span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-3">
                {user && user.photoURL && (
                    <div className="tooltip tooltip-bottom" data-tip={user?.email || 'User'}>
                        <img className="w-10 h-10 rounded-full border-2 border-secondary shadow" src={user.photoURL} alt="User" />
                    </div>
                )}
                {user ? (
                    <button onClick={handleLogOut} className="btn btn-error text-white hover:scale-105 transition duration-200">Logout</button>
                ) : (
                    <>
                        <Link to="/register">
                            <button className="btn btn-outline btn-secondary hover:scale-105 transition duration-200">Register</button>
                        </Link>
                        <Link to="/login">
                            <button className="btn btn-secondary hover:scale-105 transition duration-200">Login</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
