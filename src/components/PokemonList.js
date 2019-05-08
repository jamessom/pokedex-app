import React from 'react';
import PokemonDetail from './PokemonDetail';

const baseRawImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

const PokemonList = (props) => {

  const pokemons = props.pokemons.data

  if (pokemons !== undefined) {
    const test = pokemons.map(poke => {
      return <PokemonDetail key={poke.id} name={poke.attributes.name} image={`${baseRawImage}/${poke.id}.png`} />
    });

    return <div className='container'>
      <div className="row">{test}</div>
    </div>
  }else{
    return (
      <div>
        <div className='row'>
          <PokemonDetail types="psychic" name="mew" image={baseRawImage + '/151.png'} />
          <PokemonDetail types="psychic" name="mew" image={baseRawImage + '/151.png'} />
          <PokemonDetail types="psychic" name="mew" image={baseRawImage + '/151.png'} />
        </div>

        <div className='row'>
          <PokemonDetail types="water, rock" name="kabutops" image={baseRawImage + '/141.png'} />
          <PokemonDetail types="water, rock" name="kabutops" image={baseRawImage + '/141.png'} />
          <PokemonDetail types="water, rock" name="kabutops" image={baseRawImage + '/141.png'} />
        </div>

        <div className='row'>
          <PokemonDetail types="ice, water" name="lapras" image={baseRawImage + '/131.png'} />
          <PokemonDetail types="ice, water" name="lapras" image={baseRawImage + '/131.png'} />
          <PokemonDetail types="ice, water" name="lapras" image={baseRawImage + '/131.png'} />
        </div>
      </div>
    );
  }

  // if (pokemons != undefined) {
  //   pokemons.map(poke => <PokemonDetail types="psychic" name={poke.attributes.name} image={`${baseRawImage}/${poke.id}.png`} />)
  // }

  
}

export default PokemonList;
