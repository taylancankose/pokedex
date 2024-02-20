import { useEffect, useState } from "react";
import "./App.css";
import NoData from "./components/NoData.tsx";
import CloseBtn from "./components/CloseBtn.tsx";
import Input from "./components/Input.tsx";
import PokeCard from "./components/PokeCard.tsx";
import { typeColors } from "./assets/typeColors.ts";
import DetailCard from "./components/DetailCard.tsx";
import ApiService from "./services/apiService.ts";
import { PokeDetailsType, PokeType, PokesType } from "./types/index.ts";

function App() {
  const [pokemons, setPokemons] = useState<PokeType>();
  const [pokeDetail, setPokeDetail] = useState<undefined | PokeDetailsType>();
  const [showDetails, setShowDetails] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // ComponentWillUnmount işlevi
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const getPokes = async () => {
    const data = await ApiService.getPokes();
    console.log(data, "data");
    setPokemons(data);
  };
  useEffect(() => {
    getPokes();
  }, []);
  const getPokeDetails = async (id: string) => {
    const data = await ApiService.getPokeDetails(id);
    setPokeDetail(data);
    console.log(data);
    setShowDetails(!showDetails);
  };

  // const getPokesNext = async () => {
  //   try {
  //     const response = await axios.get(pokemons.next);
  //     const result = response.data;
  //     console.log(result.results);
  //     result.results.map((item: { url: string }) => {
  //       axios.get(item.url).then((res) => {
  //         setPokemons((prevPokemons) => [...prevPokemons, res.data]);
  //       });
  //     });
  //     setPokemons({
  //       pokes: [...pokemons.pokes, ...result.results],
  //       next: result.next,
  //       previous: result.previous,
  //     });
  //     console.log(pokemons);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   const scrolling_function = () => {
  //     if (
  //       window.innerHeight + window.scrollY >=
  //       document.body.offsetHeight - 10
  //     ) {
  //       getPokesNext();
  //       window.removeEventListener("scroll", scrolling_function);
  //     }
  //   };
  //   window.addEventListener("scroll", scrolling_function);
  // }, []);
  return (
    <div
      id="mainDiv"
      className="main-section"
      style={
        showDetails && windowWidth < 1130
          ? {
              background: typeColors[pokeDetail.types[0].type.name],
              height: "100vh",
              overflow: "hidden",
            }
          : { background: "#f6f8fc" }
      }
    >
      {showDetails && windowWidth < 1130 ? (
        <CloseBtn onClick={() => setShowDetails(false)} />
      ) : null}
      <div className="poke-container">
        <Input showDetails={showDetails} />

        <div
          className={
            showDetails
              ? "passive poke-results-container"
              : "poke-results-container"
          }
        >
          {pokemons?.pokes?.map((item: PokesType) => (
            <PokeCard
              item={item}
              key={item.id}
              onClick={() => getPokeDetails(item.id)}
            />
          ))}
        </div>
      </div>
      <div className={showDetails ? "bg-details" : ""}>
        <div
          className={showDetails ? "poke-details active" : "poke-details"}
          id="pokeCard"
          tabIndex={1}
        >
          {pokeDetail ? <DetailCard pokeDetail={pokeDetail} /> : <NoData />}
        </div>
      </div>
    </div>
  );
}

export default App;
