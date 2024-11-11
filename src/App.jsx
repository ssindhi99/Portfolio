import { useState } from 'react'
import './App.css'
import NavigationBar from './MainPage/NavigationBar'
import HeroSection from './MainPage/HeroSection'
import AboutPage from './MainPage/AboutPage'
import PortfolioPage from './MainPage/PortfolioPage'
import ContactPage from './MainPage/ContactPage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import ContactMessagesPage from './MainPage/ContactMessagesPage'
import ResumeIndex from './MainPage/ResumeIndex'



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
          element: <NavigationBar/>,
          children: [ 
            {
              path: "/",
              element: <HeroSection/>,
            },
            
            
            {
            path: "about",
            element: <AboutPage/>,
          },
          {
            path: "curriculum",
            element: <ResumeIndex/>,
          },
      
          {
            path: "Portfolio",
            element: <PortfolioPage/>,
          },
          {
            path: "Contact",
            element: <ContactPage/>,
          },
          {
            path: "ContactMessage",
            element: <ContactMessagesPage/>,
          },
          
        
        ]

          },

  ]);
  
  
  

  return (
    <>

     <RouterProvider router={router} />
  
        </>
  )
}

export default App

