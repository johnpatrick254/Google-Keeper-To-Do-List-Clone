import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./createArea";

const App = () => {
  const [items, setItem] = useState([]);
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  const saveInput = (event) => {
    const {name,value} = event.target;
    console.log(name,value);
    setInput((prev) => {
      return {
        ...prev,
        [name]:value
      }
    });
  };

  const addItem = (event) => {
    setItem((prev) => {
      return [
        ...prev,
       input
      ];
    });
event.preventDefault()
setInput({
    title: "",
    content: "",
})
    
  };

  const deleteItem = (id) => {
    setItem((prev) => {
      return prev.filter((item, index) => {
        return id !== index;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea
        titleValue={input.title}
        contentValue={input.content}
        onClick={addItem}
        titleChange ={saveInput}
        contentChange ={saveInput}
      />
      {items.map((item, index) => {
        return (
          <Note
            onDelete={deleteItem}
            key={index}
            id={index}
            title={item.title}
            content={item.content}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
