import {Item} from './Item';

export function VendingMachine(){

    const goods = [
        "Tatranka",
        "Fidorka",
        "Mars"
    ];

    return (
        goods.map((good) => <Item name={good} />)
    )
}