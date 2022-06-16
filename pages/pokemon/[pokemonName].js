export default function PokemonView({ pokemon }) {
  return <div>Pokemon View: {pokemon.name}</div>
}

export async function getServerSideProps({ params }) {
  console.log(params)
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`);
  const data = await response.json();

  return { props: { pokemon: data }}
}