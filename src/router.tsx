import { createBrowserRouter, Navigate  } from 'react-router-dom';

import Home from './pages/Home/Home';

import HomeHeader from 'Components/HomeHeader/HomeHeader';
import ErrorPage from './pages/404/404';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          
          path: '',
          element: <Navigate to="search"/>,
        },
        {
          path: 'search',
          element: <HomeHeader />,
        },
        {
          path: 'search/:searchQuery',
          element: <HomeHeader />,
        },

      ],
    },
  ]);