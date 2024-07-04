import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Help from './pages/Help'
import NotFound from './pages/NotFound'
import { Layout } from './Layouts/Layout'
import LayoutTwo from './Layouts/LayoutTwo'
import New from './pages/New'
import Downloads from './pages/Downloads'

function App() {
  const route= createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>  
        <Route path='/layouttwo' element={<LayoutTwo/>}>
          <Route index element={<New/>}/>
          <Route path='/layouttwo/downloads' element={<Downloads/>}/>
        </Route>      
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route}/>
      
    </>
  )
}

export default App
