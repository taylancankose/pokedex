import React from "react";

interface PillTypes {
  color: string;
  name: string;
}

const Pill: React.FC<PillTypes> = ({ color, name }) => {
  return (
    <div>
      <p
        className="poke-details-type-pill"
        style={{
          background: color,
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default Pill;
