import React from "react";
import "./Input.scss";

export const Input = ({ getInput }) => {
  return (
    <form
      className="input"
      onSubmit={(e) => {
        e.preventDefault();
        getInput(e.target["user-input"].value);
      }}
    >
      <input
        type="number"
        name="user-input"
        id="user-input"
        className="input__entry"
        placeholder="Enter your height in meters"
      />
    </form>
  );
};
