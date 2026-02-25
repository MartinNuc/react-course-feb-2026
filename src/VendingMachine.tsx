import { useState } from 'react';
import { VendingItem } from './VendingItem';
import { DropdownComponent } from './DropdownComponent';
import { ChargeCoinInput } from './ChargeCoinInput';

type Item = {
    id: number;
    name: string;
    price: number;
}

type ItemOption = {
    item: Item;
    availableCount: number;
}

export function VendingMachine() {
    const [itemOptions, setItems] = useState<ItemOption[]>([
        { availableCount: 5, item: { id: 1, name: "Tatranka", price: 5 } },
        { availableCount: 5, item: { id: 2, name: "Fidorka", price: 5 } },
        { availableCount: 0, item: { id: 3, name: "Mars", price: 5 } }
    ]);

    const [cart, setCart] = useState<Item[]>([]);
    const [coins, setCoins] = useState(0);

    

    function handleSelect(selectedId: Item['id']) {
        const addedItem = itemOptions.find(item => item.item.id === selectedId)?.item;
        if (!addedItem) { return; }
        setItems(itemOptions.map(itemOption => itemOption.item.id === selectedId && itemOption.availableCount > 0 ? { ...itemOption, availableCount: itemOption.availableCount - 1 } : itemOption));
        setCart([...cart, addedItem]);
    }

    function addCoins(addedCoins: number) {
        setCoins(coins + addedCoins);
    }

    const totalPrice = cart.map(item => item.price).reduce((acc, curr) => acc + curr, 0);

    return (
        <div>
            <DropdownComponent label="Insert coins">
                <button onClick={() => addCoins(10)}>+ 10 coins</button>
                <button onClick={() => addCoins(20)}>+ 20 coins</button>
                <button onClick={() => addCoins(30)}>+ 30 coins</button>
                <ChargeCoinInput onAddCoins={addCoins} />
            </DropdownComponent>

            <div>Coins: {coins},-</div>
            <div>Total price: {totalPrice},-</div>

            <ul>
                {itemOptions.map((itemOption) => (
                    <li><VendingItem key={itemOption.item.id}
                        name={itemOption.item.name}
                        availableCount={itemOption.availableCount}
                        onSelect={() => handleSelect(itemOption.item.id)} />
                    </li>
                ))}
            </ul>
        </div>
    )
}