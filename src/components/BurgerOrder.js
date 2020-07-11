import React, { Component } from "react";
import { connect } from "react-redux";

import { calcTotal } from "../selectors/burgerDemoSelector";
import {addItemAction} from '../actions/BurgerAction'

const MENU = {
  salad: 10,

  cheese: 20,

  beef: 55,
};

class BurgerOrder extends Component {
  renderOrder = () => {
    return Object.keys(MENU).map((item) => {
      return (
        <tr key={item}>
          <td>{item}</td>
          <td>
            <button className="btn btn-success mr-2" onClick={()=>{this.props.addItem(item)}}>+</button>
            <button className="btn btn-danger" onClick={()=>{this.props.addItem(item,false)}}>-</button>
          </td>
          <td>{MENU[item]}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>Chọn thức ăn</h3>
        <table className="table border-0">
          <tbody>
            <tr>
              <td>Thức ăn</td>
              <td></td>
              <td>Giá</td>
            </tr>
            {this.renderOrder()}
            <tr className="border-0">
              <td colSpan="2" className="text-right">
                Tổng tiền:
              </td>
              <td>{this.props.calcTotal}</td>
            </tr>
            <tr>
              <td colSpan="2"></td>
              <td>
                <button className="btn btn-primary">Thanh toán</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    calcTotal: calcTotal(state.BurgerReducer.burger, MENU),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (itemName, isAdd) => dispatch(addItemAction(itemName, isAdd))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerOrder);
