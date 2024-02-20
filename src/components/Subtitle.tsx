import React from "react";

interface SubtitleProp {
  subtitle: string;
}

const Subtitle: React.FC<SubtitleProp> = ({ subtitle }) => {
  return <p className="poke-details-subtitle">{subtitle}</p>;
};

export default Subtitle;
