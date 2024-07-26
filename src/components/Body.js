import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './Signup';
import { onAuthStateChanged, revokeAccessToken } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUsers, removeUser } from '../utils/userSlice';
import Browse from './Browse';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Signup></Signup>
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])


    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}
export default Body;
