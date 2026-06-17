import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/layout/Navbar'
import Layout from './component/layout/Layout'
import Dashboard from './pages/Dashboard'
import Test from './Test'
import { Routes, Route } from 'react-router-dom'
import Transactions from './pages/Transactions'
import Budget from './pages/Budget'
import Setting from './pages/Setting'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Layout>
        <Routes>
           <Route path='/' element={<Dashboard />}/>
           <Route path='/dashboard' element={<Dashboard />}/>
           <Route path='/transactions' element={<Transactions />}/>
           <Route path='/budget' element={<Budget/>}/>
           <Route path='/settings' element={<Setting/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
