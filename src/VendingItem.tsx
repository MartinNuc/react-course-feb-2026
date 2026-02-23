type Props = {
    name: string;
}

export function VendingItem({ name }: Props) {

    return (
        <>
            <button>0x</button>
            {name}
        </>
    );
}