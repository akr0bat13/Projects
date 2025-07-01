import React, { FC } from 'react'
import { IUser } from '../types/types'

interface UserItemProps {
  user: IUser
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15 }}>
      {user.id} {user.name} проживает в городе {user.address.city} по адресу{' '}
      {user.address.street}
    </div>
  )
}

export default UserItem
