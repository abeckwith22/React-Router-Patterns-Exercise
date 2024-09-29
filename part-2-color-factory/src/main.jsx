import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

/* react-router */
import { createBrowserRouter, RouterProvider, Navigate, redirect } from 'react-router-dom'

/* route components */
import Root from './routes/Root.jsx'
import Color from './routes/Color.jsx'
import ColorForm from './routes/ColorForm.jsx'

/* error components */
import ErrorElement from './ErrorElement.jsx'
import ColorNotFound from './ColorNotFound.jsx'

const colors = [
  {
    color_name: 'red',
    color_value: '#ff0000',
  },
  {
    color_name: 'yellow',
    color_value: '#ffff00',
  },
  {
    color_name: 'blue',
    color_value: '#0000ff',
  },
]

const router = createBrowserRouter([
  { // loader should return list of colors with a navbar to let the user go to
    path: "/colors",
    loader: () => {
      return colors.map(color => color.color_name);
    },
    element: <Root/>,
    errorElement: <ErrorElement/>
  },
  { // shows the params color in all it's glory
    path: "/colors/:color",
    loader: ({ params }) => {
      for(let color of colors){
        if(color.color_name === params.color){
          return color;
        }
      }
      return null;
    },
    element: <Color />,
    errorElement: <ColorNotFound />
  },
  { // shows a form that accepts a color-name and color-value
    path: "/colors/new",
    element: <ColorForm />,
    action: async ({ request })=> {
      switch (request.method) {
        case "POST": {
          const formData = await request.formData();
          const color_name = formData.get('color_name');
          const color_value = formData.get('color_value');

          const obj = {
            "color_name":color_name,
            "color_value":color_value,
          }

          colors.push(obj);

          console.log(colors);

          return redirect("/");
        }
      }
    },
  },
  { // catch-all navigate to "/"
    path: "*",
    element: <Navigate to="/colors"/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
