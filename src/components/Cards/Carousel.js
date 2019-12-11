import React from "react";
import faker from "faker";
import "./Carousel.css";

let carouselItems = [];
(() => {
  for (let i = 0; i < 5; i++) carouselItems.push(faker.image.avatar());
})();

export default class Carousel extends React.Component {
  state = {
    count: 0
  };
  hanldeNext = () => {
    if (this.state.count === carouselItems.length - 1)
      this.setState({ count: 0 });
    else this.setState({ count: this.state.count + 1 });
  };
  hanldePrevious = () => {
    if (this.state.count === 0)
      this.setState({ count: carouselItems.length - 1 });
    else this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="wide">
        <button className="left" onClick={this.hanldeNext}>
          Previous
        </button>
        <img src={carouselItems[this.state.count]}></img>
        <button className="right" onClick={this.hanldePrevious}>
          Next
        </button>
      </div>
    );
  }
}
