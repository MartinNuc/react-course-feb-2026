import { useState, type ReactNode } from "react";
import styles from './DropdownComponent.module.css'

type Props = {
    label: string;
    children: React.ReactNode | (({close}: {close: () => void}) => ReactNode)
};

export function DropdownComponent({label, children}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    function close() {
        setIsOpen(false);
    }

    return <>
        <button onClick={toggleMenu}>{label}</button>
        {isOpen && <div className={styles.container}>{typeof children === 'function' ? children({close}) : children}</div>}
    </>
}
