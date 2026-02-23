type Props = {
    name: string;
}

export function Item({ name }: Props) {

    return (
        <>
            <button>0x</button>
            {name}
        </>
    );
}