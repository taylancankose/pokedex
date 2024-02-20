import React from "react";

interface InputType {
  showDetails: boolean;
}

const Input: React.FC<InputType> = ({ showDetails }) => {
  return (
    <div
      className={showDetails ? "passive input-container" : "input-container"}
    >
      <input
        type="text"
        placeholder="Search your Pokemon"
        className="poke-search"
      />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
};

export default Input;
