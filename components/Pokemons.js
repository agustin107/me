export function Pokemons() {
  
  return <div>
    <h3>Pokemones:</h3>
    {pokemones?.map(pokemon => <div>{pokemon}</div>)}
  </div>
}