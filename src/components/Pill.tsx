import React from "react";

interface PillTypes {
  color: string;
  name: string;
  size: string;
}

const Pill: React.FC<PillTypes> = ({ size = "big", color, name }) => {
  return (
    <div>
      <p
        className={size === "big" ? "poke-details-type-pill" : "poke-card-pill"}
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
