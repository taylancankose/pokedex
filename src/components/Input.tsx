import React from "react";

interface InputType {
  showDetails: boolean;
  onChange: (value: any) => void;
}

const Input: React.FC<InputType> = ({ showDetails, onChange }) => {
  return (
    <div
      className={showDetails ? "passive input-container" : "input-container"}
    >
      <input
        type="text"
        placeholder="Search your Pokemon"
        className="poke-search"
        onChange={onChange}
      />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
};

export default Input;
