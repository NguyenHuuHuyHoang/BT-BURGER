import React from "react";

export const burgerRender = (state) => {
  let items = [];
  for (const item in state) {
    for (let i = 0; i < state[item]; i++) {
      items = [...items, <div className={item} key={item+i}></div>];
    }
  }
  return items;
};

export const calcTotal = (state, MENU) => {
  return Object.keys(MENU).reduce((total, item) => {
    return total + MENU[item] * state[item];
  }, 0);
};
