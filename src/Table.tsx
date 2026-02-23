type Props = {
    array: number[];
}

export function Table(props: Props) {
  return (
    <table>
        <tr>
            {props.array.map((item, index) => <td key={`${item}-${index}`}>{item}</td>)}
        </tr>
    </table>
  );
}

