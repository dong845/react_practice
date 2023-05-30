import { Routes, Route } from "react-router-dom"
import React from 'react'
import Header from "./routes/Header"
import Pricing from "./routes/Pricing"
import Contact from "./routes/Contact"
import Training from "./routes/Training"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Header />}/>
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/training" element={<Training />}/>
    </Routes>
  )
}

export default App
