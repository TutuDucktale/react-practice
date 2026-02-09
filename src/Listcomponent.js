import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const List = (props) => {
  const [line, setLine] = useState(false);
  const deleteit = () => {
    setLine(true);
  };
  return (
    <div className="todo-style">
      <ol style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </ol>
      <span onClick={deleteit}>
        <DeleteIcon className="delete-icon" />
      </span>
    </div>
  );
};

export default List;
