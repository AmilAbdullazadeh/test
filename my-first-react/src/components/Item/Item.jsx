import React from "react";
import s from "../Item/item.module.css";

function Item(props) {
  const { level, diffLevel, handleDiffLevel } = props; // props is implicitly passed to the function
  return (
    <div
      onClick={() => handleDiffLevel(level)}
      className={s.item}
      style={{
        backgroundColor: level === diffLevel ? "#d2f160" : "#6065f1",
        color: "white",
      }}
    >
      {level}
    </div>
  );
}

export default Item;
