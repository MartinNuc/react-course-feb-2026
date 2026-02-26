import { useParams } from "react-router-dom";
import { useJoke } from "./useJoke";

export const Joke = () => {
    const {category} = useParams();
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
