export interface PokeType {
  next: string;
  pokes: PokesType[];
}

export interface PokesType {
  base_happiness: number;
  capture_rate: number;
  color: NameUrl;
  egg_groups: NameUrl[];
  evolution_chane: {
    url: string;
  };
  evolves_from_species?: any;
  flavor_text_entries: FlavorText[];
  form_descriptions: any;
  form_switchable: boolean;
  gender_rate: number;
  genera: GeneraType[];
  generation: NameUrl;
  growth_rate: NameUrl;
  habitat: NameUrl;
  has_gender_difference: boolean;
  hatch_counter: number;
  id: string;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names?: NamesType[];
  order?: number;
  pal_park_encounters?: PalParkEncountersType[];
  pokedex_numbers?: PokedexNumbers[];
  shape?: NameUrl;
  varieties?: VarietiesType[];
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
  types: TypesType[];
  weight: number;
}

interface NameUrl {
  name: string;
  url: string;
}

interface FlavorText {
  flavor_text: string;
  language: NameUrl;
  version: NameUrl;
}

interface GeneraType {
  genus: string;
  language: NameUrl;
}

interface NamesType {
  language: NameUrl;
  name: string;
}

interface PalParkEncountersType {
  base_score: number;
  rate: number;
  area: NameUrl;
}

interface PokedexNumbers {
  entry_number: number;
  pokedex: number;
}

interface VarietiesType {
  is_default: boolean;
  pokemon: NameUrl;
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

interface TypesType {
  slot: number;
  type: NameUrl;
}
