import { Modal } from "./Modal";
import { MyErrorBoundary } from "./MyErrorBoundary";
import { ThrowComponent } from "./ThrowingComponent";
import { UserInfoPane } from "./UserInfoPane";
import { VendingMachine } from "./VendingMachine";

export function HomePage() {
    return <>
        <button>One</button>
        <Modal>
            <h1>Hello</h1>
            <p>I am modal</p>
            <button>Second</button>
        </Modal>

        <MyErrorBoundary>
            <ThrowComponent />
        </MyErrorBoundary>

        <UserInfoPane />

        <VendingMachine />

    </>
}