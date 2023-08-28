import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Footer, Header, Modal } from './components'
import {
  About,
  Error,
  Home,
  Projects,
  Publications,
  Sertificates,
} from './pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/sertificates" element={<Sertificates />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
