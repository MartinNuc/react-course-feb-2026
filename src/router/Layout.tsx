import { Outlet } from "react-router-dom";
import { UserInfoPane } from "../UserInfoPane";
import { NavBar } from "./NavBar";

export function Layout() {
    return <>
        <NavBar />
        <UserInfoPane />

        <hr />

        <div>
            <Outlet />
        </div>
    </>
}