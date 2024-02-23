function NoData() {
  return (
    <>
      <img
        className="no-poke-img-details"
        src="https://js-pokedex-virid.vercel.app/src/no-pokemon-selected-image.png"
      />
      <p className="no-poke-text-details">
        Select a Pokemon <br />
        to display here.
      </p>
    </>
  );
}

export default NoData;
