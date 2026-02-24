import styles from './VendingItem.module.css';
import cn from 'classnames';

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
            <button disabled={availableCount <= 0} className={cn({ [styles.outOfStockButton]: availableCount <= 0 })} onClick={handleClick}>{availableCount}x</button>
            {name}
            { availableCount <= 0 && <div className={styles.outOfStockLabel}>Out of stock</div> }
        </div>
    );
}
