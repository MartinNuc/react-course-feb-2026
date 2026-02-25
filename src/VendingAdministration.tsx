import React, { useState } from "react";
import { LoginForm } from "./LoginForm"
import { Machines } from "./Machines"
import axios from "axios";
import { UserContext } from "./UserContext";

type LoginResponse = {
    token: string;
}

export function VendingAdministration() {
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

    return (
        <UserContext.Provider value={userContext}>
            {!user && <LoginForm />}
            <Machines />
        </UserContext.Provider>
    )
}