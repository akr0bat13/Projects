import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
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
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div className="App">
      <Router>
        <Header openModal={openModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<SingleProject />} />
          <Route path="/about" element={<About />} />
          <Route path="/sertificates" element={<Sertificates />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {isModalOpen && <Modal closeModal={closeModal} />}
      </Router>
    </div>
  )
}

export default App
