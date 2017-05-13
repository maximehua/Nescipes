import React from 'react';
import { Card, Image } from 'semantic-ui-react'



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
      <Card onClick={this.handleClick} color='grey'>
        <Image src={`/public/images/${this.props.image}`} />
        <Card.Content>
          <Card.Description>
            <p>{this.state.isToggleOn ? 'Selected' : 'Non selected' }</p>
            <p>{this.props.name}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default IngredientListItems;
