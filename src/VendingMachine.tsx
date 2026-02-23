import {VendingItem} from './VendingItem';

export function VendingMachine(){

    const goods = [
        "Tatranka",
        "Fidorka",
        "Mars"
    ];

    return (
        goods.map((good) => <VendingItem name={good} />)
    )
}