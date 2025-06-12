import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Details from './pages/Details'
import NewFeedback from './pages/NewFeedback'
import EditFeedback from './pages/EditFeedback'
import Roadmap from './pages/Roadmap'

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/"
      },{
        element: <Details />,
        path:"details/:detailsId"
      },{
        element: <NewFeedback />,
        path:"/newfeedback"
      },{
        element: <EditFeedback />,
        path: "/editfeedback/:feedbackId"
      },{
        element: <Roadmap />,
        path: "/roadmap"
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
