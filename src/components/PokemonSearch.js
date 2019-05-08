import React from "react";

class PokemonSearch extends React.Component {

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
                  placeholder="Search"
                  type="text"
                  value={this.state.term}
                  onChange={ e => this.setState({ term: e.target.value }) }
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default PokemonSearch;


