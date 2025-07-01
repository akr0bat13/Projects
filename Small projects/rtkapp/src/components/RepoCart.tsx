import React from 'react'
import '../assets/css/RepoCart.css'
import { useActions } from '../hooks/actions'
import { IRepo } from '../models/models'

const RepoCart = ({ repo }: { repo: IRepo }) => {
  const { addFavourites, removeFavourites } = useActions()

  const addtoFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavourites(repo.url)
  }
  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavourites(repo.url)
  }

  return (
    <div className="cart-item">
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <h2>{repo.full_name}</h2>
        <p>Forks: {repo.forks}</p>
      </a>
      <button onClick={addtoFavourite}>Add to Favourites</button>
      <button onClick={removeFromFavourite}>Remove from Favourites</button>
    </div>
  )
}

export default RepoCart
