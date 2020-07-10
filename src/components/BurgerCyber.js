import React, { Component } from "react";

export default class BurgerCyber extends Component {
  state = {
    burger: { salad: 5, cheese: 1, beef: 10 },

    menu: {
      salad: 10,

      cheese: 20,

      beef: 55,
    },

    total: 85,
  };
  burgerRender = (burgerItem) => {
    let items = []
    for (let i = 0; i < this.state.burger[burgerItem]; i ++) {
        items = [...items, 
            <div className={burgerItem} key={burgerItem}></div>
        ]
    }
    return items
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5 small shadow">
            <div className="breadTop"></div>
            {this.burgerRender('salad')}
            {this.burgerRender('cheese')}
            {this.burgerRender('beef')}
            <div className="breadBottom"></div>
          </div>
          <div className="col-1"></div>
          <div className="col-6 small shadow">
            <h3>Chọn thức ăn</h3>
            <table className="table border-0">
              <tbody>
                <tr>
                  <td>Thức ăn</td>
                  <td></td>
                  <td>Giá</td>
                </tr>
                <tr>
                  <td>salad</td>
                  <td>
                    <button className="btn btn-success mr-2">+</button>
                    <button className="btn btn-danger">-</button>
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>cheese</td>
                  <td>
                    <button className="btn btn-success mr-2">+</button>
                    <button className="btn btn-danger">-</button>
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>beef</td>
                  <td>
                    <button className="btn btn-success mr-2">+</button>
                    <button className="btn btn-danger">-</button>
                  </td>
                  <td>10</td>
                </tr>
                <tr className="border-0">
                  <td colSpan="2" className="text-right">
                    Tổng tiền:
                  </td>
                  <td> 30</td>
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
        </div>
      </div>
    );
  }
}
