import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface GithubState {
  favourites: string[]
}

const LS_FAV_ST = 'rfk'

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_ST) ?? '[]'),
}

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourites(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload)
      localStorage.setItem(LS_FAV_ST, JSON.stringify(state.favourites))
    },
    removeFavourites(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter((f) => f !== action.payload)
      localStorage.setItem(LS_FAV_ST, JSON.stringify(state.favourites))
    },
  },
})

export const githubActions = githubSlice.actions

export const githubReducer = githubSlice.reducer
