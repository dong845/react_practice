import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Signin from './routes/Signin'
import Signup from './routes/Signup'
import Account from './routes/Account'
import { AuthContextProvider } from './context/AuthContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center text-3xl font-bold'>
        Firebase Auth & Context
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
