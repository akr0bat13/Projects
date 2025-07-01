import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import TodosPage from './components/TodosPage'
import UserItemPage from './components/UserItemPage'
import UserPage from './components/UserPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div style={{ display: 'flex', gap: 30, padding: 20 }}>
          <NavLink to={'/users'}>Пользователи</NavLink>
          <NavLink to={'/todos'}>Список дел</NavLink>
        </div>
        <Routes>
          <Route path={'/users'} element={<UserPage />} />
          <Route path={'/users/:id'} element={<UserItemPage />} />
          <Route path={'/todos'} element={<TodosPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
