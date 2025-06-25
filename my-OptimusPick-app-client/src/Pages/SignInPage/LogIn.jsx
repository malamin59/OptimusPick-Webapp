// import { Link, useLocation, useNavigate } from 'react-router';
// import { AuthContext } from '../../Provider/AuthProvider';
// import { FcGoogle } from "react-icons/fc";

import { useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocalLogin from "../Socal/SocalLogin";
import { toast } from "react-toastify";



const LogIn = () => {
    const [error, setError] = useState("")

    const { signInUser } = UseAuth()
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/'


   

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setError("");  // reset error on new attempt

        signInUser(email, password)
            .then(result => {
                console.log(result);
                toast.success("Login Successfully!");
                navigate(from);  // redirect after success
            })
            .catch(error => {
                let message = "";
                if (error.code === "auth/wrong-password") {
                    message = "Incorrect password!";
                } else if (error.code === "auth/user-not-found") {
                    message = "No user found with this email!";
                } else {
                    message = "Login failed. Please try again.";
                }
                setError(message);
            });

    }

    return (
        <>
            <div className='flex justify-center lg:mt-6 items-center'>

                <form onSubmit={handleLogin}
                    className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h3 className=' text-3xl font-bold text-center py-5'>
                            Login your account!</h3>
                        {/* email */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="input"
                            placeholder="Email"
                            required
                        />
                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="input"
                            placeholder="Password"
                            required
                        />


                        {
                            error && <p className='text-red-600'> {error}</p>
                        }
                        <SocalLogin from={from}> </SocalLogin>
                        <button
                            type='submit' className="btn btn-neutral mt-2">Login</button>

                        <p className='text-center font-semibold pt-5'>Don't Have An Account ?
                            <Link className='text-secondary' to='/register'> Register </Link>
                        </p>
                    </div>
                </form>

            </div>
        </>
    );
};

export default LogIn;