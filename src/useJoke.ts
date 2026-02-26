import { useCallback, useEffect, useState } from "react";

type JokeResponse = {
    value: string;
}

export function useJoke() {
    const [joke, setJoke] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [history, setHistory] = useState<string[]>([]);

    const fetchNext = useCallback(async function fetchNext() {
        try {
            setIsLoading(true);
            const response = await fetch('https://api.chucknorris.io/jokes/random')
            const body: JokeResponse = await response.json();

            setJoke(body.value);
            setHistory(history => [...history, body.value]);
        } catch (e: unknown) {
            if (e instanceof Error) {
                setError(e);
            }
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        void fetchNext();
    }, [fetchNext]);

    return {
        isLoading,
        error,
        joke,
        fetchNext,
        history
    }
}