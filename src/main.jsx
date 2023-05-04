import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Main from './Pages/Main/Main';
import ChefDetails from './Pages/ChefDetails/ChefDetails';
import Blog from './Pages/Blog/Blog';
import Register from './Pages/Register/Register';
import AuthPrivider from './Providers/AuthPrivider';
import PrivateRoute from './Pages/PrivateRoute';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/chef/:id',
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://chef-recipe-server-tufaelkhan.vercel.app/chef/${params.id}`)
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthPrivider>
   <RouterProvider router={router}></RouterProvider>
   </AuthPrivider>
  </React.StrictMode>,
)
