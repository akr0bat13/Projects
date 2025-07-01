import { useDispatch, useSelector } from 'react-redux'
import {
  addToDo,
  decrement,
  increment,
  removeLastToDo,
} from './reduxToolkit/toolkitSlice'

function App() {
  const count = useSelector((state) => state.toolkit.count)
  const todos = useSelector((state) => state.toolkit.todos)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Счетчик {count}</h1>
      <button onClick={() => dispatch(increment())}>Инкримент</button>
      <button onClick={() => dispatch(decrement())}>Дикремент</button>
      <button onClick={() => dispatch(removeLastToDo())}>
        Удалить последний TODO
      </button>
      <button onClick={() => dispatch(addToDo(prompt()))}>Добавить TODO</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
