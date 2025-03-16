import React, { Children, useState } from "react";
import UserContext from "./UserContext";


function UserContextProvider({children}) {
    const [user, setUser] = useState(null)
  return (
        <UserContextProvider value={{user, setUser}}>
            {children}
        </UserContextProvider>
  )
}

export default UserContextProvider
