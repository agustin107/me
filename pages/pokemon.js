import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";

export default function Pokemon({ pokemons }) {
  return (
    <div className="container mx-auto">
      <Head>Pokemon</Head>
      <Header />
      <div className="mt-5">
        {pokemons.map(pokemon => (
          <Link href={`/pokemon/${pokemon.name}`}><div className="my-2">{pokemon.name}: {pokemon.species.name}</div></Link>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps({}) {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();
  const pokemons = [];

  for (const pokemon of data.results) {
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
    const pokemonData = await pokemonResponse.json();

    pokemons.push(pokemonData);
  }

  return { props: { pokemons: pokemons } }
}