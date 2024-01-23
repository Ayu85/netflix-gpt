import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './redux/store'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UseDispatch } from 'react-redux'
import { addUser, removeUser } from './redux/userslice'

const approuter = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/browse',
        element: <Browse />
    }
])

const Body = () => {
    const dispatch_action = useDispatch();
    const userData = useSelector(store => store.user.userData)
    let auth = getAuth();
    useEffect(() => {
        auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { email, uid } = user;
                dispatch_action(addUser({ email: email, uid: uid }))
                // ...
            } else {
                // User is signed out
                // ...
                dispatch_action(removeUser())
            }
        });
    }, [auth])
    return (
        <div>
            <RouterProvider router={approuter} />
        </div>
    )
}

export default Body
