import axios from "axios";

const ApiService = {
  errorResponse: (error: Error): void => {
    console.log(error);
    throw error;
  },
  get: async (endpoint: string) => {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error: any) {
      ApiService.errorResponse(error);
    }
  },

  searchPokes: async (querry: string) => {
    try {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0/${querry}`
      );
      return result.data;
    } catch (error: any) {
      console.log(error);
      ApiService.errorResponse(error);
    }
  },
  getPokes: async () => {
    try {
      const result = await ApiService.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      const pokemonDataPromises = result?.results?.map(async (item: any) => {
        const pokemonRes = await axios.get(item?.url);
        return pokemonRes.data;
      });
      const pokemonData = await Promise.all(pokemonDataPromises);
      return { pokes: pokemonData, next: result?.next };
    } catch (error: any) {
      ApiService.errorResponse(error);
    }
  },
  getPokeDetails: async (id: string) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return res.data;
    } catch (error: any) {
      ApiService.errorResponse(error);
    }
  },
};

export default ApiService;
