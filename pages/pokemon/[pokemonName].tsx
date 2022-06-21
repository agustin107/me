import { Pokemon } from "../pokemon";
import { GetServerSideProps } from 'next';

interface PokemonViewProps {
  pokemon: Pokemon;
}

export default function PokemonView({ pokemon }: PokemonViewProps) {
  return <div>Pokemon View: {pokemon.name}</div>
}

export const getServerSideProps: GetServerSideProps<PokemonViewProps> = async ({ params }) => {

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`);
  const data = await response.json();

  return { props: { pokemon: data }}
}