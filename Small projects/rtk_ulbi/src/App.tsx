import React from 'react'
import './App.css'
import { useAppSelector } from './store/hooks/redux'

function App() {

  const {} = useAppSelector(state => state.userReducer.)

  return <div className="App">Hello</div>
}

export default App
