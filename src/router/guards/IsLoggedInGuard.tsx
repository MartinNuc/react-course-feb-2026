import { Navigate } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import type { PropsWithChildren } from "react";

export function IsLoggedInGuard({children}: PropsWithChildren) {
    const {user} = useUserContext();

    if (!user) {
        return <Navigate to="login" replace />
    }

    return children
}