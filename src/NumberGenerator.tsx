import { useState } from "react";

type Props = {
  pregeneratedCount: number
}

export function NumberGenerator(props: Props) {

    const [generatedNumbers, setGeneratedNumbers] = useState(() => [...Array(props.pregeneratedCount)].map(() => Math.random()));

    function generateNew() {
        generatedNumbers.push(Math.random());
        setGeneratedNumbers(generatedNumbers);
        setGeneratedNumbers([...generatedNumbers, Math.random()]);
    }

    return <div>
      {generatedNumbers.map((num, index) => <div key={index}>{num}</div>)}
      <button type="button" onClick={() => generateNew()}>Generate new</button>
    </div>
}