import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { addUsers, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                const email = user.email;
                const displayName = user.displayName;
                dispatch(addUsers(uid, email, displayName));
                navigate("/browse")

                // ...
            } else {
                // User is signed out
                // ...
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, [])
    const handleSignout = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");

        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-center md:justify-between '>
            <button onClick={handleSignout}>
                Signout
            </button>
        </div>
    )
}
export default Header;
