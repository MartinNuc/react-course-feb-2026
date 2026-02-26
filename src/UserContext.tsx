import axios from "axios";
import React, { useContext, useState, type PropsWithChildren } from "react";

type LoginResponse = {
    token: string;
}

export type User = { username: string }

export type UserContext = {
  user: User | null,
  token: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const UserContext = React.createContext<UserContext>({} as unknown as UserContext);

export function UserContextProvider({children}: PropsWithChildren) {
      const [user, setUser] = useState<UserContext['user']>(null);
      const [token, setToken] = useState<UserContext['token']>(null);
  
      async function login(username: string, password: string) {
          const payload = { username, password };
          const response = await axios.post<LoginResponse>('https://simple-vending-api-demo.onrender.com/login', payload);
          setToken(response.data.token);
          setUser({ username });
      }
  
      function logout() {
          throw new Error('Not implemented');
      }
  
      const userContext = {
          user,
          token,
          login,
          logout
      }
  
      return <UserContext.Provider value={userContext}>
        {children}
      </UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext)