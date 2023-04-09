import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Layout/Main'
import Home from './components/Home/Home'
import OrderReview from './components/OrderReview/OrderReview'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Grandpa from './components/Grandpa/Grandpa'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home ></Home>,
        loader: () => fetch('tshirt.json')
      },
      {
        path: '/order-review',
        element: <OrderReview></OrderReview>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/grandpa',
        element: <Grandpa></Grandpa>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
