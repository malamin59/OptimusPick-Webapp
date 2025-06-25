import { useContext } from 'react';
import { Link, useNavigate, } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Context/AuthContext';
import SocalLogin from '../Socal/SocalLogin';
const Register = () => {
    const { createUser, setUser, updateUser, } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;

        if (!isLongEnough) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }

        if (!hasUppercase) {
            toast.error("Password must contain at least one uppercase letter.");
            return;
        }

        if (!hasLowercase) {
            toast.error("Password must contain at least one lowercase letter.");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                    })
                    .catch(error => {
                        console.log(error)
                        setUser(user)
                    })
                toast.success("Registration successful!");
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })

    };

    return (
        <div>
            <div className='flex justify-center lg:mt-6 items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h3 className='text-3xl  font-bold text-center'>Register your account!</h3>
                        <form onSubmit={handleRegister}>
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />

                            <label className="label">Photo URL</label>
                            <input type="text" name='photo' required className="input" placeholder="Photo URL" />

                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />

                            <label className="label">Password</label>
                            <input type="text" className="input" placeholder="Password" name='password' />

                            <SocalLogin></SocalLogin>
                            <button type='submit' className="btn btn-neutral mt-4 w-full">Register</button>
                            <p className='text-center font-semibold pt-5'>Already Have An  Account?
                                <Link className='text-secondary' to='/login'> Login </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;