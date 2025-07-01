import { createSlice } from '@reduxjs/toolkit'

const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState: {
    count: 1,
    todos: ['снять видео', 'смонтировать видео', 'выложить видео'],
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1
    },
    decrement(state) {
      state.count = state.count - 1
    },
    addToDo(state, action) {
      state.todos.push(action.payload)
    },
    removeLastToDo(state) {
      state.todos.pop()
    },
  },
})

export default toolkitSlice.reducer

export const { increment, decrement, addToDo, removeLastToDo } =
  toolkitSlice.actions
