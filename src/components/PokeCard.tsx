import React from "react";
import { PokesType } from "../types";

interface PokeCardTypes {
  item: PokesType;
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
    </div>
  );
};

export default PokeCard;
