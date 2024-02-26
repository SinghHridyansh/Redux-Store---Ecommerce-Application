import React from "react";
import { MyContext } from "./MyContext";
import { useContext } from "react";

const ContextApiComponent = () => {
  const { text, setText } = useContext(MyContext);

  return (
    <div>
      <h4>ContextApiComponent</h4>

      <input
        type="text"
        value={text}
        placeholder="type in something"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p className="valuep">{text}</p>
    </div>
  );
};

export default ContextApiComponent;
