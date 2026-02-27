import useSWR from "swr";

type JokeResponse = {
    value: string;
}

const fetcher = async (url: string) => {
    const response = await fetch(url);
    const json: JokeResponse = await response.json();
    return json;
}

export function useJoke(category?: string) {
    const url = new URLSearchParams();
    if (category) {
        url.set('category', category);
    }

    const { data, isValidating, error } = useSWR<JokeResponse>(`https://api.chucknorris.io/jokes/random?${url.toString()}`, fetcher, {suspense: true});

    const joke = data?.value;

    function fetchNext() {
        throw new Error('Not implemented');
    }

    return {
        isLoading: isValidating,
        error,
        joke,
        fetchNext,
        history: []
    }
}