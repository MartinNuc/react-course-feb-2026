import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type JokeResponse = {
    value: string;
}

export function useJoke(category?: string) {
    const [joke, setJoke] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [history, setHistory] = useState<string[]>([]);

    const fetchNext = useCallback(async function fetchNext() {
        try {
            setIsLoading(true);
            const url = new URLSearchParams();
            if (category) {
                url.set('category', category);
            }
            const response = await fetch(`https://api.chucknorris.io/jokes/random?${url.toString()}`)
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
    }, [category]);

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