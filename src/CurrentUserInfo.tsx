import { useUserContext } from "./UserContext";

export function CurrentUserInfo() {
    const {user, logout } = useUserContext();

    return <div>
        Current user: {user?.username}
        <button type="button" onClick={logout}>Logout</button>
    </div>
}