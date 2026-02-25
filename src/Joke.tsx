import { useJoke } from "./useJoke";

export const Joke = () => {
    const {joke, history, isLoading, error, fetchNext} = useJoke();

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

