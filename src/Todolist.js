import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import List from "./Listcomponent";

const Todolist = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };
  const listofitem = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  };
  const handleKeyPress = (event) => {
  if (event.key === "Enter" && item.trim() !== "") {
    listofitem();
  }
};

  return (
    <>
      <div className="main">
        <div className="center-div">
          <br />
          <h1> TODOLIST </h1>
          <br />
          <input
            type="text"
            value={item}
            placeholder="Type your todos"
            onChange={itemEvent}
             onKeyDown={handleKeyPress}
          />
          <Button className="newbtn" onClick={listofitem}>
            <AddIcon />
          </Button>

          <br />
          <ol>
            {newitem.map((val, index) => {
              return <List key={index} text={val} />;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default Todolist;
