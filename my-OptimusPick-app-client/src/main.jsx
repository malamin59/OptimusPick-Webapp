import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Layouts/Root'
import AuthProvider from './Context/AuthProvider'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}> </RouterProvider>
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)


/*  https://docs.google.com/document/d/1p4z9-kZeicqLKL7WaJntx41tmJv202_PJDhoppj2MJc/edit?tab=t.0 */
/* https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-malamin59 */