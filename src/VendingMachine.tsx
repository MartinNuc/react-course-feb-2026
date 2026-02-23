import { useState } from 'react';
import { VendingItem } from './VendingItem';

type Item = {
    id: number;
    name: string;
    availableCount: number;
}

export function VendingMachine() {
    const [items, setItems] = useState([
        { id: 1, name: "Tatranka", availableCount: 5 },
        { id: 2, name: "Fidorka", availableCount: 5 },
        { id: 3, name: "Mars", availableCount: 0 }
    ]);
    const [counter1, setCounter1] = useState(0);

    if (Math.random() < 0.5) {
        const [counter2, setCounter2] = useState(0);
    }

    const [counter3, setCounter3] = useState(0);

    function handleSelect(selectedId: Item['id']) {
        setItems(items.map(item => item.id === selectedId && item.availableCount > 0 ? { ...item, availableCount: item.availableCount - 1 } : item));
    }

    return (
        <ul>
            {items.map((item) => (
                <li><VendingItem key={item.id}
                    name={item.name}
                    availableCount={item.availableCount}
                    onSelect={() => handleSelect(item.id)} />
                </li>
            ))}
        </ul>
    )
}