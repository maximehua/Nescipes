import React, { Component } from 'react';

class IngredientListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToogleOn: true};

    //This binding is necessary to make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <article className="card" style={"width: 20rem;"} onClick={this.handleClick}>
        <img className="card-img-top img-responsive" src={`./public/images/${this.props.image}`} />
        <div className="card-block">
          <h4 className="card-title">{this.props.name}</h4>
          <p>{this.state.isToggleOn ? 'Selected' : 'Non selected' }</p>
        </div>
      </article>
    );
  }
}

export default IngredientListItems;
