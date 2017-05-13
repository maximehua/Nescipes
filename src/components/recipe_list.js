import React, { Component } from 'react';
import { Card, Header } from 'semantic-ui-react';
import RecipeListItems from './recipe_list_items';
import './recipe_list.css';

class RecipeList extends Component {

  render() {
    return (
      <div className="RecipeList">
        <Header as="h3">Suggested Recipes</Header>
        <Card.Group>
          <RecipeListItems image="salmon.png" />
          <RecipeListItems image="poulet-roti.png" />
        </Card.Group>
      </div>
    );
  }
}

export default RecipeList;
