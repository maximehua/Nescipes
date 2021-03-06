import React, { Component } from 'react';
import { Card, Header } from 'semantic-ui-react';
import './ingredient_list.css';
import IngredientListItems from './ingredient_list_items';

class IngredientList extends Component {
  render() {
    return (
      <div className="IngredientList">
          <Header as="h1">Pick an ingredient !</Header>
            <Card.Group itemsPerRow={7}>
              <IngredientListItems image="poulet.png" name="Chicken" />
              <IngredientListItems image="beef.png" name="Ground Beef" />
              <IngredientListItems image="lardons.png" name="Herta Lardons" />
              <IngredientListItems image="salmon.png" name="Salmon" />
              <IngredientListItems image="tendre-noix.png" name="Herta Tendre Noix" />
              <IngredientListItems image="bacon.png" name="Herta Bacon" />
              <IngredientListItems image="eggs.png" name="Eggs" />
              <IngredientListItems image="rice.png" name="Rice" />
              <IngredientListItems image="potatoes.png" name="Potatoes" />
              <IngredientListItems image="pizza.png" name="Herta Pizza Dough" />
              <IngredientListItems image="quiche.png" name="Herta Quiche Dough" />
              <IngredientListItems image="pasta.png" name="Herta Pasta Dough" />
              <IngredientListItems image="kubor.png" name="Kub Or" />
            </Card.Group>
      </div>
    );
  }
}

export default IngredientList;
