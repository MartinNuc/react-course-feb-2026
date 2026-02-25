import React from "react";

export type User = { username: string }

export type UserContext = {
  user: User | null,
  token: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const UserContext = React.createContext<UserContext>({} as unknown as UserContext);
