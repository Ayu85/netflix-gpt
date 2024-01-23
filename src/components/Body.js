import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './redux/store'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UseDispatch } from 'react-redux'

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
    console.log(userData);
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                dispatch_action(user.uid, user.displayName, user.email)
                console.log();
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])
    return (
        <Provider store={store}>
            <RouterProvider router={approuter} />
        </Provider>
    )
}

export default Body
