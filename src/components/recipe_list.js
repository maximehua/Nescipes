import React, { Component } from 'react';
import RecipeListItems from './ingredient_list_items'
import './recipe_list.css';

class RecipeList extends Component {
  render() {
    return (
      <div>
        <h4>Suggested Recipes</h4>
        <div className="card-group">
          <RecipeListItems image="salmon.png" />
        </div>
      </div>
    );
  }
}

export default RecipeList;
