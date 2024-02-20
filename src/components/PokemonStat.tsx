import React from "react";

interface PokemonStatType {
  statName: string;
  baseStat: string | number;
}

const PokemonStat: React.FC<PokemonStatType> = ({ statName, baseStat }) => {
  // Özellik adını kısalt
  const getAbbreviation = (statName: string) => {
    switch (statName.toLowerCase()) {
      case "attack":
        return { abbreviation: "ATK", color: "#DF2140" };
      case "defense":
        return { abbreviation: "DEF", color: "#FF994D" };
      case "special-attack":
        return { abbreviation: "SpA", color: "#EECD3D" };
      case "special-defense":
        return { abbreviation: "SpD", color: "#85DDFF" };
      case "speed":
        return { abbreviation: "SPD", color: "#7B92D5" };
      default:
        return { abbreviation: statName.toUpperCase(), color: "#8D5F84" };
    }
  };

  const { abbreviation, color } = getAbbreviation(statName);

  return (
    <div className="pokemon-stat-container">
      <p
        className="stat"
        style={{
          background: color,
        }}
      >
        {abbreviation}
      </p>
      <p className="stat-value">{baseStat}</p>
    </div>
  );
};

export default PokemonStat;
