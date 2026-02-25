import { useEffect, useState } from "react";

type JokeResponse = {
    value: string;
}

export const Joke = () => {
    const [joke, setJoke] = useState<string | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect, react-hooks/immutability
        void fetchNext();
    }, []);    
    
    const fetchNext = async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/random')
        const body: JokeResponse = await response.json();

        setJoke(body.value);
    }

    return <div>
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