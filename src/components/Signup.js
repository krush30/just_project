import React, { useEffect, useRef, useState } from 'react';
import checkvalidate from '../utils/Validate';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUsers, removeUser } from '../utils/userSlice';
import Header from './Header';

export default function Signup() {
    const [isitSignup, setisitSignup] = useState(true);
    const [errorMessage, setErrormessage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);



    const handleSignup = () => {
        setisitSignup(!isitSignup);
    };

    const handleClicks = () => {
        const message = checkvalidate(email.current.value, password.current.value);
        setErrormessage(message);
        if (message) return;


        if (!isitSignup) {

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                    // navigate("/browse");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrormessage(errorCode + errorMessage)
                    // ..
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // navigate("/browse");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }


    };

    return (
        <div>
            <Header />
            <form onSubmit={(e) => e.preventDefault()} className='py-24 rounded-lg w-full md:w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1>This is Signup form</h1>
                <input ref={email} type='email' placeholder='Enter your username or mail' className='my-2 p-4 w-full bg-gray-700 bg-opacity-80' />
                <input ref={password} type='password' placeholder='Enter your password' className='my-2 p-4 w-full bg-gray-700 bg-opacity-80' />
                <button className='my-2 p-4 text-white w-full bg-red-700' onClick={handleClicks}>
                    {isitSignup ? "Sign up" : "Sign in"}
                </button>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <p onClick={handleSignup} className='cursor-pointer'>
                    {isitSignup ? "Oh, you already have an account?" : "New to website?"}
                </p>
            </form>
        </div>
    );
}
