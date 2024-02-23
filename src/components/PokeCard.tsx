import React from "react";
import { PokeDetailsType } from "../types";
import Pill from "./Pill";
import { typeColors } from "../assets/typeColors";

interface PokeCardTypes {
  item: PokeDetailsType;
  onClick: () => void;
}

const PokeCard: React.FC<PokeCardTypes> = ({ item, onClick }) => {
  return (
    <div className="poke-result-card" key={item.id} onClick={onClick}>
      <img
        className="poke-img"
        src={`${import.meta.env.VITE_GET_POKE_IMG_URL}/${item.id}.png`}
      />
      <p className="poke-no">No: {item.id}</p>
      <p className="title">{item.name}</p>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: 2,
        }}
      >
        {item?.types?.map((el: any, i: number) => (
          <Pill
            size="small"
            key={i}
            name={el.type.name}
            color={typeColors[el.type.name]}
          />
        ))}
      </div>
    </div>
  );
};

export default PokeCard;
