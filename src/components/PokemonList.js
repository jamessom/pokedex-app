import React, { Component } from 'react';

import PokemonDetail from './PokemonDetail';

const baseRawImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

class PokemonList extends Component {

  render () {
    const pokemons = this.props.pokemons.data;

    if (pokemons !== undefined) {
      const data = pokemons.map(poke => {
        const { id, attributes:{types, evolutions}} = poke;
        return <PokemonDetail
          key={id}
          pokeKey={id}
          name={poke.attributes.name}
          pokeId={id}
          image={`${baseRawImage}/${id}.png`}
          types={types.map(type => type.name).join(', ')}
          evolutions={evolutions}
        />
      });

      return <div className='container'>
        <div className="row">{data}</div>
      </div>
    }

    return 'carregando...';
  }
}

export default PokemonList;
