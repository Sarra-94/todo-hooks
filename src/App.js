import React, { useState } from "react";

import { items } from "./const";
import Add from "./Component/Add/Add";
import ListItem from "./Component/ListItem/ListItem";

function App() {
  const [list, setList] = useState(items);
  // AddItem
  const handleItem = (item) => {
    if (item !== "")
      setList([...list, { id: Math.random(), item: item, done: false }]);
  };

  // deleteItem
  const deleteItem = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  // ItemDone
  const handleChange = (id) => {
    setList(list.map((el) => (el.id === id ? { ...el, done: !el.done } : el)));
  };

  return (
    <div className="App">
      <Add handleItem={handleItem} />
      <ListItem
        list={list}
        deleteItem={deleteItem}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
