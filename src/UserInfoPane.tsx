import { CurrentUserInfo } from "./CurrentUserInfo";
import { LoginForm } from "./LoginForm";
import { useUserContext } from "./UserContext";

export function UserInfoPane() {
  const { user } = useUserContext();

  return <div>
    {user ? <CurrentUserInfo /> : <LoginForm />}
  </div>
}