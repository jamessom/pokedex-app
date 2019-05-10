import React, {Component} from "react";
import PokemonCreate from "./PokemonCreate";

class PokemonSearch extends Component {

  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="ni ni-zoom-split-in"></i>
                  </span>
                </div>
                <input
                  className="form-control form-control-alternative"
                  placeholder="Buscar"
                  type="text"
                  value={this.state.term}
                  onChange={ e => this.setState({ term: e.target.value }) }
                />
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <PokemonCreate />
          </div>
        </div>
      </form>
    );
  }
}

export default PokemonSearch;


