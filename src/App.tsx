import { useState } from 'react';
import './App.css'
import { AutomaticCounter } from './AutomaticCounter';
import { Counter } from './Counter';
import { VendingMachine } from './VendingMachine';
import { ClicksTracker } from './ClicksTracker';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return <>

    <div>
      <button onClick={(() => setIsVisible(!isVisible))}>toggle</button>
      {isVisible && <AutomaticCounter />}
    </div>

    <Counter />
    <Counter />
    <Counter />
    <hr />
    <VendingMachine />

    <ClicksTracker />
  </>
}

export default App
