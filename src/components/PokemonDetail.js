import React from 'react';

const PokemonDetail = props => {
  return (
    <div className="card card-stats col-12 col-sm-6 col-lg-4" onClick={ e => console.log(props)}>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <p className="card-title text-muted mb-0">{props.types}</p>
            <span className="h3 font-weight-bold mb-0">{props.name}</span>
          </div>
          <div className="col-auto">
            <div className="icon icon-shape text-white">
              <img key={props.pokeKey} src={props.image} alt={props.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
