import React from "react";
import { useState } from "react";

const UseStateComponent = () => {
  const [count, setCount] = useState(0);
  function handleinc() {
    console.log(count);

    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  }
  function handledec() {
    console.log(count);

    count === 0 ? setCount(0) : setCount(count - 1);
    console.log(count);
  }
  return (
    <div className="usestate">
      <h4>useState Counter</h4>
      <p className="valuep">{count}</p>
      <button onClick={handleinc}>+</button>
      <button onClick={handledec}>-</button>
    </div>
  );
};

export default UseStateComponent;
