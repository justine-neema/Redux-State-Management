import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import {
  decrement,
  increment,
  reset,
  setValue,
} from "../store/actions/counterActions";
import styles from "./Counter.module.css";

const Counter = () => {
  const count = useSelector<RootState, number>((state) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const [customValue, setCustomValue] = useState("0");

  const handleSetValue = () => {
    const nextValue = Number(customValue);

    if (!Number.isNaN(nextValue)) {
      dispatch(setValue(nextValue));
    }
  };

  return (
    <div className={styles.counterContainer}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <div>
        <input
          type="number"
          value={customValue}
          onChange={(event) => setCustomValue(event.target.value)}
        />
        <button onClick={handleSetValue}>Set Value</button>
      </div>
    </div>
  );
};

export default Counter;