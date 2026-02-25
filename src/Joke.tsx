import { useEffect, useState } from "react";

type JokeResponse = {
    value: string;
}

export const Joke = () => {
    const [joke, setJoke] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect, react-hooks/immutability
        void fetchNext();
    }, []);

    const fetchNext = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('https://api.chucknorris.io/jokes/random')
            const body: JokeResponse = await response.json();

            setJoke(body.value);
        } catch (e: unknown) {
            if (e instanceof Error) {
                setError(e);
            }
        } finally {
            setIsLoading(false);
        }
    }

    return <div>
        {isLoading && <span>🕰️</span>}
        {error && <p>{error.message}</p>}
        <p>{joke}</p>
        <button onClick={fetchNext}>fetch next</button>
    </div>
}


//   useEffect(() => {
//     (async () => {
//       await obtainJoke();
//     })();
//   }, []);


//   useEffect(() => {
//     const doWork = async () => {
//         await getJoke();
//     };
//     doWork();
// }, [getJoke]);