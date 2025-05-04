import React from 'react'
import { BrowserRouter,useRoutes } from 'react-router-dom'
import { routes } from './Routes'
import { Toaster } from 'react-hot-toast'

function App() {

const element = useRoutes(routes)
  return (
    <>
      {element}
      <Toaster position='bottom-center' reverserOrder={false}/>
    </>
  )
}

export default App
