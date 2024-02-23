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
        `${import.meta.env.VITE_GET_POKES_URL}/${querry}`
      );
      return result.data;
    } catch (error: any) {
      console.log(error);
      ApiService.errorResponse(error);
    }
  },
  getPokes: async () => {
    try {
      const result = await ApiService.get(import.meta.env.VITE_GET_POKES_URL);
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
      const res = await axios.get(
        `${import.meta.env.VITE_GET_POKE_DETAILS_URL}/${id}`
      );
      return res.data;
    } catch (error: any) {
      ApiService.errorResponse(error);
    }
  },
};

export default ApiService;
