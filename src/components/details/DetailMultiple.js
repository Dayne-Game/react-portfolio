import React, { Component, Fragment } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import Experiance from "./Experiance";

import Overview from "./Overview";

class DetailMultiple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedComponent: "overview",
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
      case "overview":
        return <Overview />;
      case "experiance":
        return <Experiance />;
      default:
        return null;
    }
  };

  render() {
    const { selectedComponent } = this.state;

    return (
      <Fragment>
        <ButtonGroup aria-label="Projects Button Box" className="mb-3">
          <Button variant="secondary" value="overview" onClick={this.toggleContent} className={selectedComponent === "overview" ? "item-button-active" : ""}>
            Overview
          </Button>
          <Button variant="secondary" value="experiance" onClick={this.toggleContent} className={selectedComponent === "experiance" ? "item-button-active" : ""}>
            Work Experiance
          </Button>
        </ButtonGroup>
        {this.switchContent(selectedComponent)}
      </Fragment>
    );
  }
}

export default DetailMultiple;
