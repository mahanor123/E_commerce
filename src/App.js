import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import List from "./components/ProductsList/List";
import Item from "./components/Product/Item";
import Cart from "./components/Cart/Cart";
import Singin from "./components/singin/singin";
import Singup from "./components/singup/singup";
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <h2>Hello World!</h2> */}
      {/* navbar
          categories
          search
          sign in
          cart */}
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path='/list' component={List} /> 
        <Route path="/item" component={Item} />
        <Route path="/signin" component={Singin} />
        <Route exact path="/signup" component={Singup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
