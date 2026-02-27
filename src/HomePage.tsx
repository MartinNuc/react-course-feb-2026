import { MyErrorBoundary } from "./MyErrorBoundary";
import { ThrowComponent } from "./ThrowingComponent";
import { UserInfoPane } from "./UserInfoPane";
import { VendingAdministration } from "./VendingAdministration";
import { VendingMachine } from "./VendingMachine";

export function HomePage() {
    return <>
        <MyErrorBoundary>
            <ThrowComponent />
        </MyErrorBoundary>

        <UserInfoPane />

        <VendingMachine />

    </>
}