import { LoginForm } from "./LoginForm"
import { Machines } from "./Machines"
import { useUserContext } from "./UserContext";

export function VendingAdministration() {
    const { user } = useUserContext();

    return (
        <>
            {!user && <LoginForm />}
            <Machines />
        </>
    )
}