import { useState } from 'react';
import './App.css'
import { AutomaticCounter } from './AutomaticCounter';
import { Counter } from './Counter';
import { VendingMachine } from './VendingMachine';
import { DropdownComponent } from './DropdownComponent';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return <>

    <DropdownComponent label="Open dropdown">
      Hello, this is dropdown!
    </DropdownComponent>

    <div>
      <button onClick={(() => setIsVisible(!isVisible))}>toggle</button>
      {isVisible && <AutomaticCounter />}
    </div>

    <Counter />
    <Counter />
    <hr />
    <VendingMachine />

    {/* <ClicksTracker /> */}
  </>
}

export default App
