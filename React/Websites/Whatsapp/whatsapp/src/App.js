import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import ChatPage from './components/ChatPage'
import Login from './pages/Login';
import MessagePerson from './components/MessagePerson';
import { useUserContext } from './context/user_context';
import { useState } from 'react';

function App() {

const { loginWithRedirect, myUser} = useUserContext()

  return (
      <Router>
        <div className="App">
          {myUser ? (
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/chats/:id' element={<ChatPage />} />
          </Routes>
          ) : 
          (
            <Login loginWithRedirect={loginWithRedirect} />
          )
          }
          
        </div>
      </Router>
  );
}

export default App;