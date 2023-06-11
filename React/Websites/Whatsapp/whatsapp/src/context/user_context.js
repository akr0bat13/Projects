import React, { useContext, useEffect, useState } from 'react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {

  const [myUser, setMyUser] = useState(null)

  return (
    <UserContext.Provider
      value={{ myUser, setMyUser }}
    >
      {children}
    </UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
