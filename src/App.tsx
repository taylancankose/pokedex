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
import Loading from "./components/Loading.tsx";
import NoResult from "./components/NoResult.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Pagination from "./components/Pagination.tsx";

function App() {
  const [pokemons, setPokemons] = useState<PokeType>();
  const [pokeDetail, setPokeDetail] = useState<PokeDetailsType>();
  const [showDetails, setShowDetails] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  let pokesPerPage = 16;

  const indexOfLastPoke = currentPage * pokesPerPage;
  const indexOfFirstPoke = indexOfLastPoke - pokesPerPage;
  const currentPoke = pokemons?.pokes?.slice(indexOfFirstPoke, indexOfLastPoke);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getPokes = async () => {
    setLoading(true);
    const data = await ApiService.getPokes();
    setPokemons(data);
    setLoading(false);
  };

  useEffect(() => {
    getPokes();
  }, []);

  const getPokeDetails = async (id: number) => {
    const selectedPoke = pokemons?.pokes.find((poke) => poke.id === id);
    setPokeDetail(selectedPoke);
    setShowDetails(!showDetails);
  };
  const searchPoke = async (query: string) => {
    if (!query.trim()) {
      getPokes();
      return;
    }
    const filteredPokes = pokemons?.pokes.filter((item) =>
      item.name.toLowerCase().startsWith(query.trim())
    );
    filteredPokes && setPokemons({ pokes: filteredPokes });
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div
      id="mainDiv"
      className="main-section"
      style={
        showDetails && windowWidth < 1130
          ? {
              background: typeColors[pokeDetail?.types[0]?.type?.name],
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
        <Input
          showDetails={showDetails}
          onChange={(e) => searchPoke(e.target.value)}
        />

        {loading ? (
          <Loading />
        ) : (
          <>
            <div
              className={
                showDetails
                  ? "passive poke-results-container"
                  : "poke-results-container"
              }
            >
              {pokemons?.pokes?.length ? (
                currentPoke?.map((item: PokesType) => (
                  <PokeCard
                    item={item}
                    key={item.id}
                    onClick={() => getPokeDetails(item.id)}
                  />
                ))
              ) : (
                <NoResult />
              )}
              <Pagination
                pokesPerPage={pokesPerPage}
                totalPokes={pokemons?.pokes?.length}
                paginate={paginate}
              />
            </div>
          </>
        )}
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
      <SpeedInsights />
    </div>
  );
}

export default App;
