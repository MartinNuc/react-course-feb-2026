import { useEffect, useState } from "react";

type JokeResponse = {
    value: string;
}

export function useJoke() {
    const [joke, setJoke] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect, react-hooks/immutability
        void fetchNext();
    }, []);

    async function fetchNext() {
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

    return {
        isLoading,
        error,
        joke,
        fetchNext
    }
}