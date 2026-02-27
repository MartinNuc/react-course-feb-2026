import { Navigate } from "react-router-dom";
import { LoginForm } from "../LoginForm";
import { useUserContext } from "../UserContext";

export function LoginPage() {
    const {user} = useUserContext();
    if (user) {
        return <Navigate to="/admin" />
    }

    return <LoginForm />
}