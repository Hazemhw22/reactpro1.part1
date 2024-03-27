import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Root from './Root';
import Signin from './Pages/Auth/Signin';
import Signup from './Pages/Auth/Signup';
import NotFound from './NotFound/NotFound'; // Corrected import
import { Toaster } from 'sonner';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/signin',
        element: <Signin />,
      },
      // Add other child routes as needed
    ],
    // Specify the error element for 404 Not Found
    errorElement: <NotFound />,
  },
]);

function App() {
  return (
    <div className="App">
      <Toaster richColors/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
