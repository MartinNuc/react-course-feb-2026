type Props = {
    name: string;
    availableCount: number;
    onSelect: () => void;
};

export function VendingItem({ name, availableCount, onSelect }: Props) {
    function handleClick() {
        onSelect();
    }

    return (
        <>
            <button onClick={handleClick}>{availableCount}x</button>
            {name}
        </>
    );
}
