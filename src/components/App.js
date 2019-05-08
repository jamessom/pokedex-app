import React from 'react';
import PokeAPI from '../pokeapi/PokeAPI';
import PokemonSearch from './PokemonSearch';
import PokemonList from "./PokemonList";
import Pagination from './ui/Pagination';

class App extends React.Component {

  state = { pokemons: [] };

  async componentDidMount () {
    const response = await PokeAPI.get(`/api/v1/pokemons.json`, {});
    this.setState({ pokemons: response.data });
  }
  
  onSearchSubmit = async (term) => {
    const response = await PokeAPI.get(`/api/v1/pokemons.json?filter=${term}`, {});
    this.setState({ pokemons: response.data });
  }


  render() {
    return (
      <div>
        <h1>Pokédex</h1>
        <br />
        <PokemonSearch onSubmit={this.onSearchSubmit} />
        <br />
        <PokemonList pokemons={this.state.pokemons} />
        <br />
        <Pagination />
      </div>
    );
  }
}

export default App
