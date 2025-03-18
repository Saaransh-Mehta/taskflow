import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './context/user.context.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <UserProvider>
      
      <AppRoutes/>
    </UserProvider>

</>
  )
}

export default App
