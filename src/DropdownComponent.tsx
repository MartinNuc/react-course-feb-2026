import { useState } from "react";
import styles from './DropdownComponent.module.css'

type Props = {
    label: string;
} & React.PropsWithChildren;

export function DropdownComponent({label, children}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    
    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return <>
        <button onClick={toggleMenu}>{label}</button>
        {isOpen && <div className={styles.container}>{children}</div>}
    </>
}
