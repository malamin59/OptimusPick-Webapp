import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { auth } from '../../Firebase/firebase.config';
import UseAuth from '../../Hooks/UseAuth';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const SocalLogin = ({from}) => {
    const navigate = useNavigate()
    const { provider } = UseAuth()
    const handleGoogleSign = () => {
        signInWithPopup(auth, provider)
        .then((res) => {
            console.log(res)
                navigate(from || '/')
            toast.success('Registration Successfully')
        })
        .catch(error => {
            console.log(error)
        })
    }

    
    return (
        <div>
        <button onClick={handleGoogleSign}type='button' className="btn  font-black w-full mt-4">
            <FcGoogle size={24} /> Login in with Google</button>
      
    </div>
);
}


export default SocalLogin;