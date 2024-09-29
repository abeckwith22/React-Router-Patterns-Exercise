import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

/* components */
import Dogs from './Dogs.jsx'
import data from '../data.js'

/* error components */
import ErrorElement from './ErrorElement.jsx'
import DogDetail from './DogDetail.jsx'

const { dogs } = data;

const router = createBrowserRouter([
  // because redirects don't work in v6, uses navigate to move user back to home.
  {
    // renders a navbar with a list of dog names to choose from
    path: "/dogs",
    loader: () => {
      return dogs.map(obj => {
        return {
          name: obj.name,
          src: obj.src,
        };
      });
    },
    element: <Dogs/>,
    errorElement: <ErrorElement/>
  },
  {
    path: "/dogs/:name",
    loader: ({ params: {name}}) => {
      for(let dog of dogs){
        if(dog.src === name){
          return dog;
        }
      }
      return null;
    },
    element: <DogDetail />
  },
  {
    path: "*",
    element:  <Navigate to="/dogs" replace />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
