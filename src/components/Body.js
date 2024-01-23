import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
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
    return (
        <Provider store={store}><div>
            <RouterProvider router={approuter} />
        </div></Provider>
    )
}

export default Body
