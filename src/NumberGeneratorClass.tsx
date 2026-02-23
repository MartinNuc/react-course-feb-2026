import React from "react";

type Props = {
  pregeneratedCount: number
}

type State = {
  generatedNumbers: number[];
}

export class NumberGeneratorClass extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const generatedNumbers = [...Array(props.pregeneratedCount)].map(() => Math.random());
    this.state = {
      generatedNumbers
    };
  }

  generateNew() {
    this.setState({ generatedNumbers: [...this.state.generatedNumbers, Math.random()] });
  }

  render() {
    const { generatedNumbers } = this.state;
    return <div>
      {generatedNumbers.map((num, index) => <div key={index}>{num}</div>)}
      <button type="button" onClick={() => this.generateNew()}>Generate new</button>
    </div>
  }
}