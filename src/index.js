
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './views/home/home';
import About from './views/about/about';
import Contact from './views/contact/contact';
import {RouterProvider , createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />
  },
  {
    path : '/about',
    element : <About />
  },
  {
    path : '/contact',
     element : <Contact />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <>
  <RouterProvider router={router}/>
  </>
)
