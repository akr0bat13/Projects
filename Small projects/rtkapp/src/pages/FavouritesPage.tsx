import React from 'react'
import { useAppSelector } from '../hooks/redux'

const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.github)

  if (favourites.length === 0) return <p>No favourites</p>

  return (
    <ul>
      {favourites.map((favourite) => (
        <li key={favourite}>
          <a href={favourite}>{favourite}</a>
        </li>
      ))}
    </ul>
  )
}

export default FavouritesPage
