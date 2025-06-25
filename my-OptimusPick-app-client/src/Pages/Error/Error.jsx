import { Link } from 'react-router';
import error from '.././../assets/error.avif'

const Error = () => {
    return (
        <div>
            <div className='grid mt-5 justify-center items-center'>
                <p className='text-3xl text-red-600 italic'> Page Not Fount </p>
                <button className='btn btn-error mt-4 text-center'>
                    <Link to='/'>
                        Go Back home
                    </Link>
                </button>
            </div>
            <div className='flex'>
                <img className='lg:w-4/12 mx-auto' src={error} alt="" />

            </div>


        </div>
    );
};

export default Error;