import React from "react";
import faker from "faker";
import "./Home.css";
import Rectangle from "../Cards/Rectangle";
import Carousel from "../Cards/Carousel";
import Mobiles from "../../Images/mobile250x250.png";
import shirts from "../../Images/shirts250x250.png";
let cat = [];

(() => {
  for (let i = 0; i < 8; i++)
    cat.push({
      Heading: faker.commerce.productName(),
      id: i,
      img: faker.image.avatar(),
      description: faker.lorem.sentence()
    });
})();
export default class Home extends React.Component {
  componentDidMount() {
    this.setState({ cat });
  }
  render() {
    return (
      <div className="home">
        <h2>Home page</h2>
        <Carousel />
        <div className="container">
          {!this.state
            ? console.log("no state")
            : console.log("state has been set")}
          {this.state
            ? this.state.cat.map(function(c, i) {
                return (
                  <Rectangle
                    key={c.Heading}
                    obj={c}
                    img={i % 2 === 0 ? Mobiles : shirts}
                  />
                );
              })
            : console.log(
                "cat array is empty before calling componentDidMount"
              )}
        </div>
      </div>
    );
  }
}
