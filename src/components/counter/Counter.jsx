import { useState } from "react";
import "./Counter.css";
import CounterButton from "./CounterButton";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementCounterParentFunction(by) {
    setCount(count + by);
  }

  function decrimentCounterParentFunction(by) {
    setCount(count - by);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <span className="totalCount">{count}</span>

      <CounterButton
        by={1}
        incrementMethod={incrementCounterParentFunction}
        decrementMethod={decrimentCounterParentFunction}
      />
      <CounterButton
        by={2}
        incrementMethod={incrementCounterParentFunction}
        decrementMethod={decrimentCounterParentFunction}
      />
      <CounterButton
        by={5}
        incrementMethod={incrementCounterParentFunction}
        decrementMethod={decrimentCounterParentFunction}
      />
      <button className="resetButton" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
