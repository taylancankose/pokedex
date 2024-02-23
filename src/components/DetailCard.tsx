import React from "react";
import Subtitle from "./Subtitle";
import PokemonStat from "./PokemonStat";
import Pill from "./Pill";
import { typeColors } from "../assets/typeColors";
import { PokeDetailsType } from "../types";

interface DetailCardType {
  pokeDetail: PokeDetailsType;
}

const DetailCard: React.FC<DetailCardType> = ({ pokeDetail }) => {
  const total = pokeDetail?.stats?.reduce(
    (acc, { base_stat }) => acc + base_stat,
    0
  );
  return (
    <div key={pokeDetail.id}>
      <img
        className="poke-img-details"
        src={`${import.meta.env.VITE_GET_POKE_GIF_URL}/${pokeDetail.id}.gif`}
      />
      <div className="poke-details-inner-container">
        <p className="poke-details-no">No: {pokeDetail.id}</p>
        <p className="poke-details-title">{pokeDetail.name}</p>
        <div className="poke-details-type-container">
          {pokeDetail?.types?.map((item) => (
            <Pill name={item.type.name} color={typeColors[item?.type?.name]} />
          ))}
        </div>
        <div className="poke-details-physical">
          <div className="poke-details-physical-container">
            <Subtitle subtitle="Height" />
            <p className="poke-details-physical-value">
              {pokeDetail.height / 10}m
            </p>
          </div>
          <div className="poke-details-physical-container">
            <Subtitle subtitle="Weight" />
            <p className="poke-details-physical-value">
              {pokeDetail.weight / 10}kg
            </p>
          </div>
        </div>
        <Subtitle subtitle="Abilities" />
        <div className="poke-details-physical">
          <div className="poke-details-ability-container">
            {pokeDetail?.abilities?.map((ability) => {
              return (
                <p className="poke-details-ability-value">
                  {ability.ability.name}
                </p>
              );
            })}
          </div>
        </div>
        <Subtitle subtitle="Stats" />
        <div className="stats-container">
          {pokeDetail?.stats?.map((item) => (
            <PokemonStat baseStat={item.base_stat} statName={item.stat.name} />
          ))}
          <PokemonStat baseStat={total} statName={"TOT"} />
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
