import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutMovie from './AboutMovie'


const approuter = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/browse',
        element: <Browse />
    },
    {
        path: '/about/:id',
        element:<AboutMovie/>
    }
])

const Body = () => {


    return (
        <div>
            <RouterProvider router={approuter} />
        </div>
    )
}

export default Body
