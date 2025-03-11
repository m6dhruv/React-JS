import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './assets/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './User.jsx'
import Github, { GithubInfoLoader } from './Github.jsx'

// const router = createBrowserRouter([{
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path : "about",
//         element:<About/>
//       },
//       {
//         path : "contact",
//         element:<Contact/>
//       },
//     ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact />}/>
    <Route path='user/:userid' element={<User />}/>
    <Route
    loader={GithubInfoLoader}
    path='github' 
    element={<Github />}/>
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
