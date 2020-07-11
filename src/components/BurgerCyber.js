import React, { Component } from "react";

import BurgerDemo from './BurgerDemo'
import BurgerOrder from "./BurgerOrder";

export default class BurgerCyber extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5 small shadow">
           <BurgerDemo />
          </div>
          <div className="col-1"></div>
          <div className="col-6 small shadow">
           <BurgerOrder />
          </div>
        </div>
      </div>
    );
  }
}
