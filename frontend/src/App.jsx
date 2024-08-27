import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button} from '@chakra-ui/react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ChatPage from './pages/chatPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/chat' element={<ChatPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
