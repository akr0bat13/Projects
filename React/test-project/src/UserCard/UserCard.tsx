import './UserCard.scss'

interface IUserAddress {
  street: string,
  suit: string,
  city: string,
  zipcode: string
}

export interface IUserCard {
  id: number,
  name: string,
  username: string,
  email: string,
  address: IUserAddress
}

export const UserCard = (props:IUserCard) => {
  const {address, email, name, username, id} = props
  return <div className="user-card">
    <h4>Имя: {name}</h4>
    <h4>ID: {id}</h4>
    <h5>Логин: {username}</h5>
    <p>Почта: {email}</p>
    <div>Адрес: {address.street}, {address.suit}, {address.city}, {address.zipcode}</div>
  </div>;
}