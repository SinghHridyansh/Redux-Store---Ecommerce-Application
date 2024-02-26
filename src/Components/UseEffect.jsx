import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "./ContextApiC/MyContext";

const UseEffectComponent = () => {
  const [renderC, setRenderC] = useState(0);
  const { text, setText } = useContext(MyContext);

  useEffect(() => {
    setTimeout(() => {
      setRenderC(renderC + 1);
      //   setText(renderC + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h4>UseEffect timer/counter</h4>
      <p className="valuep">I've already rendered {renderC} times.</p>
      <p className="valuep">Data from Context - {text}</p>
    </div>
  );
};

export default UseEffectComponent;
