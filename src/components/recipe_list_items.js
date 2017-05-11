import React, { Component } from 'react';

class RecipeListItems extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <article className="card">
        <img className="card-img-top img-responsive" src={`./public/images/${this.props.image}`} />
        <div className="card-block">
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-text">{this.props.description}</p>
        </div>
      </article>
    );
  }
}

export default RecipeListItems;
