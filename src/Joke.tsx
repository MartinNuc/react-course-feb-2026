import { useJoke } from "./useJoke";

type Props = {
    category: string;
}

export const Joke = ({category}: Props) => {
    const {joke, history, isLoading, error, fetchNext} = useJoke(category);

    return <div>
        {isLoading && <span>🕰️</span>}
        {error && <p>{error.message}</p>}
        <p>{joke}</p>
        <button onClick={fetchNext}>fetch next</button>
        <ul>
            {history.map(joke => <li>{joke}</li>)}
        </ul>
    </div>
}




