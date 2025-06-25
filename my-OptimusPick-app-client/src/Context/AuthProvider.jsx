import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
}
    from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)


    // Register 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Login User 
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // updateProfile 
    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }
    // sign out user
    const logOut = () =>{
        return signOut(auth)
    }

    // provider
      const provider = new GoogleAuthProvider();

    // P
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
                         // console.log(currentUser?.accessToken)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authData = {
        createUser,
        updateUser,
        setUser,
        signInUser,
        provider,
        logOut,
        loading,
        user
    }


    return <AuthContext value={authData}> {children} </AuthContext>



};

export default AuthProvider;