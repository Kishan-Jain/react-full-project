import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import { ChangePassword, CreateNewEvent, GetAllEvents, HomePage, Login, Profile, Register, UpdateEventDetails, ViewUser } from './pages'

const Router = createBrowserRouter(createRoutesFromElements(
  <Route path='' element={<Layout />}>
    <Route path='' element={<HomePage />} />
    <Route path='user' >
      <Route path='register' element={<Register/>}/>
      <Route path='login' element={<Login />}/>
      <Route path='profile' >
        <Route path=':userName'>
          <Route path='' element={<Profile/>}/>
          <Route path='viewUser' element={ViewUser} />
          <Route path='changeUserPassWord' element={<ChangePassword />}/>
          <Route path='getAllEvents' element={<GetAllEvents/>}/>
        </Route>
      </Route>
    </Route>
    <Route path='event'>
      <Route path='createNewEvent' element={<CreateNewEvent />}/>
      <Route path='updateEventDetails' element={<UpdateEventDetails />} />
    </Route>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
