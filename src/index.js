import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Articles, Blogs, Contact, Review, NotFound, Home, Service, About } from './Components/Pages';


const routes = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/', element: <Home /> },
      { path: 'articles', element: <Articles /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/review', element: <Review /> },
      { path: '/service', element: <Service /> },
      { path: '/contact', element: <Contact /> },
      { path: '/about', element: <About /> }
    ]
  },
  { path: '*', element: <NotFound /> }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />
);