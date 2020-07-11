import React, { Component } from "react";
import { connect } from "react-redux";

import { burgerRender } from "../selectors/burgerDemoSelector";

class BurgerDemo extends Component {
  render() {
    return (
      <div>
        <div className="breadTop"></div>
        {this.props.burgerRender}
        <div className="breadBottom"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    burgerRender: burgerRender(state.BurgerReducer.burger),
  };
};

export default connect(mapStateToProps, null)(BurgerDemo);
