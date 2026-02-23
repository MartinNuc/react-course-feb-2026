type Props = {
    name: string;
    availableCount: number;
    onSelect: () => void;
};

export function VendingItem({ name, availableCount, onSelect }: Props) {
    function handleClick() {
        if (availableCount <= 0) { return; }

        onSelect();
    }

    return (
        <div>
            <button onClick={handleClick}>{availableCount}x</button>
            {name}
            { availableCount <= 0 && <div style={{color: 'red'}}>Out of stock</div> }
        </div>
    );
}
