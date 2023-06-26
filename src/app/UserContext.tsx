'use client';

import * as React from 'react'
import { useContext, useState } from 'react';

export const users = {
    email: '',
    id: '',
    name: '',
    token: '',
}

export const UserContext = React.createContext({
  user: undefined,
  setUser: async (user: any) => null,
})

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children}: any ) => {
  const [user, setUser] : any = useState(users)
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}