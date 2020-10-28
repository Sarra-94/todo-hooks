import React, { useState } from "react";
import "./Add.css";
const Add = (props) => {
  const [item, SetItem] = useState("");
  return (
    <div className="addItem">
      <input value={item} onChange={(e) => SetItem(e.target.value)} />
      <button
        className="btnAdd"
        onClick={() => {
          props.handleItem(item);
          SetItem("");
        }}
      >
        +
      </button>
    </div>
  );
};
export default Add;
