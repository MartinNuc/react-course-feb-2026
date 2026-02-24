import { useState } from 'react';
import { VendingItem } from './VendingItem';
import { ChildrenComponent, DropdownComponent } from './DropdownComponent';
import { Counter } from './Counter';

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

    const [coins, setCoins] = useState(0);

    function handleSelect(selectedId: Item['id']) {
        setItems(items.map(item => item.id === selectedId && item.availableCount > 0 ? { ...item, availableCount: item.availableCount - 1 } : item));
    }

    function handleAddCoins(addedCoins: number) {
        setCoins(coins + addedCoins);
    }

    return (
        <div>
            <DropdownComponent label="Insert coins">
                <button onClick={() => handleAddCoins(10)}>+ 10 coins</button>
                <button onClick={() => handleAddCoins(20)}>+ 20 coins</button>
                <button onClick={() => handleAddCoins(30)}>+ 30 coins</button>
            </DropdownComponent>

            <div>Coins: {coins},-</div>

            <ul>
                {items.map((item) => (
                    <li><VendingItem key={item.id}
                        name={item.name}
                        availableCount={item.availableCount}
                        onSelect={() => handleSelect(item.id)} />
                    </li>
                ))}
            </ul>
        </div>
    )
}