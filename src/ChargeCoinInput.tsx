import { useEffect, useRef, useState } from "react";

type Props = {
    onAddCoins: (amount: number) => void;
}

export function ChargeCoinInput({onAddCoins} : Props) {
    const ref = useRef<HTMLInputElement>(null);
    const [customCoinCharge, setCustomCoinCharge] = useState(50);

    useEffect(() => {
        ref.current?.focus();
    }, []);

    function handleCustomCoinChargeKeyDown(e: React.KeyboardEvent) {
        if (e.key !== 'Enter') {
            return;
        }

        onAddCoins(customCoinCharge);
        setCustomCoinCharge(50);
    }

    return <input ref={ref} type="number" value={customCoinCharge} onChange={(e) => setCustomCoinCharge(+e.target.value)} onKeyDown={handleCustomCoinChargeKeyDown} />
}