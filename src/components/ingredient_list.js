import React, { Component } from 'react';
import './ingredient_list.css';
import IngredientListItems from './ingredient_list_items'

class IngredientList extends Component {
  render() {
    return (
      <div>
          <h1>Pick an ingredient !</h1>
            <div className="card-group">
              <IngredientListItems />
            </div>
      </div>
    );
  }
}

export default IngredientList;
