import React from "react";
import "./ListItem.css";
const List = ({ deleteItem, list, handleChange }) => {
  return (
    <div>
      {list.map((el) => (
        <div className="item" key={el.id}>
          <p className={!el.done ? "done" : "todo"}>{el.item}</p>
          <div>
            <button
              onClick={() => {
                deleteItem(el.id);
              }}
            >
              delete
            </button>
            <button onClick={() => handleChange(el.id)}>
              {!el.done ? "done" : "todo"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
