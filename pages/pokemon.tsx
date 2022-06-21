import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { format } from "../utils/strings";

export interface Pokemon {
  name: string;
  species: {
    name: string
  };
}

interface PokemonProps  {
  pokemons: Pokemon[];
}

export default function Pokemon({ pokemons }: PokemonProps) {
  return (
    <div className="container mx-auto">
      <Head>Pokemon</Head>
      <Header />
      <div className="mt-5">
        {pokemons.map(pokemon => (
          <Link href={`/pokemon/${pokemon.name}`}><div className="my-2">{format(pokemon.name)}: {pokemon.species.name}</div></Link>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<PokemonProps> = async ({ }) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();
  const pokemons: Pokemon[] = [];

  for (const pokemon of data.results) {
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
    const pokemonData: Pokemon = await pokemonResponse.json();

    pokemons.push(pokemonData);
  }

  return { props: { pokemons } }
}