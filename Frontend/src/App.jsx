import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Properties from './pages/Properties'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Header from './components/Header'
import Footer from './components/Footer'
import Update from './pages/Update'
import { Routes, Route, useLocation } from 'react-router-dom'


function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">

      {!isAdminRoute && <Header />}

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </div>

      {!isAdminRoute && <Footer />}
    </div>
  )
}

export default App