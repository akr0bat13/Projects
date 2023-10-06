import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import {
  About,
  Error,
  Home,
  Projects,
  Publications,
  Sertificates,
  SingleProject,
} from './pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<SingleProject />} />
          <Route path="/about" element={<About />} />
          <Route path="/sertificates" element={<Sertificates />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
