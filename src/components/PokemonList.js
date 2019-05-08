import React, { Component } from 'react';

import PokemonDetail from './PokemonDetail';

const baseRawImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

class PokemonList extends Component {

  render () {
    const pokemons = this.props.pokemons.data;

    if (pokemons !== undefined) {
      const data = pokemons.map(poke => {
        return <PokemonDetail key={poke.id} name={poke.attributes.name} image={`${baseRawImage}/${poke.id}.png`} />
      });

      return <div className='container'>
        <div className="row">{data}</div>
      </div>
    }

    return 'carregando...';
  }
}

export default PokemonList;
