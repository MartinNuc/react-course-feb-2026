import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(UserContext);

    function handleLogin() {
        login(username, password);
    }

    return <div>
        <div>
            Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
            Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="button" onClick={handleLogin}>Login</button>
    </div>
}