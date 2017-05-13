import React from 'react';
import { Card, Image } from 'semantic-ui-react'

class RecipeListItems extends React.Component {
  render() {
    return (
      <Card>
        <Image src={`./public/images/${this.props.image}`} />
        <Card.Content>
          <Card.Header>
            {this.props.name}
          </Card.Header>
          <Card.Description>
            {this.props.description}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default RecipeListItems;
