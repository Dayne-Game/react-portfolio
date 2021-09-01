import React, { Component, Fragment } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

import Mediee from './projects/Mediee';
import Gatsby from './projects/Gastby';
import Sevens from './projects/Sevens';

class Multiple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedComponent: 'mediee',
      active: false,
    };
  }

  toggleContent = (event) => {
    const currentState = this.state.active;
    event.preventDefault();
    this.setState({
      selectedComponent: event.target.value,
      active: !currentState,
    });
  };

  switchContent = (value) => {
    switch (value) {
      case 'mediee':
        return (
          <Mediee />
        );
      case 'gatsby':
        return (
          <Gatsby />
        );
      case 'sevens':
        return (
          <Sevens />
        );
      default:
        return null;
    }
  };

  render() {
    const { selectedComponent } = this.state;

    return (
      <Fragment>
          <ButtonGroup aria-label="Projects Button Box" className="mb-3">
                <Button variant="secondary" value="mediee" onClick={this.toggleContent} className={
              selectedComponent === 'mediee'
                ? 'item-button-active'
                : ''
            }>Mediee</Button>
                <Button variant="secondary" value="sevens" onClick={this.toggleContent} className={
              selectedComponent === 'sevens'
                ? 'item-button-active'
                : ''
            }>Rugby 7s Website</Button>
                <Button variant="secondary" value="gatsby" onClick={this.toggleContent} className={
              selectedComponent === 'gatsby'
                ? 'item-button-active'
                : ''
            }>Gatsby + Netlify</Button>
            </ButtonGroup>
            {this.switchContent(selectedComponent)}
      </Fragment>
    );
  }
}

export default Multiple;