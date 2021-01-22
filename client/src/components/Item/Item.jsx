import React from "react";
import "./Item.scss";

export const Item = ({ item, selectItem }) => {
  return (
    <div className="item" onClick={() => selectItem(item.id)}>
      <div className="item__box">
        <img className="item__box-content" src={item.url} alt={item.name} />
      </div>
      <span className="item__name">{item.name}</span>
    </div>
  );
};
