import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import Sidebar from './components/Sidebar/Sidebar'
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
    document.body.classList.add('no-scroll')
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.classList.remove('no-scroll')
  }
  return (
    <div className="App">
      <Router>
        <Header openModal={openModal} />
        <Sidebar openModal={openModal} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<SingleProject />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/sertificates" element={<Sertificates />} />
          <Route exact path="/publications" element={<Publications />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {isModalOpen && <Modal closeModal={closeModal} />}
      </Router>
    </div>
  )
}

export default App
