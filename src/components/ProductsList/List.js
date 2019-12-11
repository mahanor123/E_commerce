import React from "react";
import Rectangle from "../Cards/Rectangle";
import faker from "faker";
let list = [];
let handleList = () => {
  for (let i = 0; i < 14; i++) {
    list.push({
      img: faker.image.image(250, 250, false),
      price: faker.random.number(),
      description: faker.lorem.sentence()
    });
  }
};

export default class List extends React.Component {
  render() {
    return (
      <div>
        <h2>Products List</h2>
        <Rectangle />
      </div>
    );
  }
}
