import type { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export function Modal({children}: PropsWithChildren) {

    return createPortal(<div style={{position: 'absolute', top: '50%', left: '50%', background: 'white', border: '1px solid black', padding: '15px'}}>{children}</div>, document.body);
}