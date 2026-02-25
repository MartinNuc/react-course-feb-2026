import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const {x, y} = useMouseMove();
  const {x, y} = useNavigation();
  const {x, y} = useCounter();
	
  function increment() {
    setCount(count + 1);
  }

  return <div>
    Counter {count}.
    <button onClick={() => increment()}>
      Increment
    </button>
  </div>
}


class Component {

  ngOnInit() {
  mouseMove.initialize();
  mouseMove.initialize();
  mouseMove.initialize();
  mouseMove.initialize();

  }

  ngOnDestroy() {
    mouseMove.destroy();
    mouseMove.destroy();
    mouseMove.destroy();
    mouseMove.destroy();
    mouseMove.destroy();

  }

}