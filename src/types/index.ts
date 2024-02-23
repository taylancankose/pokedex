interface NameUrl {
  name: string;
  url: string;
}

interface AbilitiesType {
  ability: NameUrl;
  is_hidden: boolean;
  slot: number;
}

interface CriesType {
  latest: string;
  legacy: string;
}

interface GameIndicesType {
  game_index: number;
  version: NameUrl;
}

interface MovesType {
  move: NameUrl;
  version_group_details: VersionGroupDetails[];
}

interface VersionGroupDetails {
  level_learned_at: number;
  move_learn_method: NameUrl;
  version_group: NameUrl;
}

interface SpritesType {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    "official-artwork": {
      front_default: string | null;
      front_shiny: string | null;
    };
    showdown: {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
  };
  versions: {
    [key: string]: {
      [key: string]: {
        back_default: string | null;
        back_gray: string | null;
        back_transparent: string | null;
        front_default: string | null;
        front_gray: string | null;
        front_transparent: string | null;
      };
    };
  };
}

interface StatsType {
  base_stat: number;
  effort: number;
  stat: NameUrl;
}

export interface TypesType {
  slot: number;
  type: NameUrl;
}

export interface PokeType {
  next?: string | null;
  pokes: PokesType[];
}

export interface PokesType {
  abilities: AbilitiesType[];
  base_experience: number;
  cries: CriesType;
  forms: NameUrl[];
  game_indices: GameIndicesType[];
  height: number;
  held_items: any;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MovesType[];
  name: string;
  order: number;
  past_abilities: any;
  past_types: any;
  species: NameUrl;
  sprites: SpritesType;
  stats: StatsType[];
  types?: any;
  weight: number;
}

export interface PokeDetailsType {
  abilities: AbilitiesType[];
  base_experience: number;
  cries: CriesType;
  forms: NameUrl[];
  game_indices: GameIndicesType[];
  height: number;
  held_items: any;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MovesType[];
  name: string;
  order: number;
  past_abilities: any;
  past_types: any;
  species: NameUrl;
  sprites: SpritesType;
  stats: StatsType[];
  types?: any;
  weight: number;
}
