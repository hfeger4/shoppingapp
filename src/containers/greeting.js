import React, {Component} from 'react';
import Cart from './cart';

class Greeting extends Component{
  render(){
    return(
      <div className="greeting">
        <div><i className="fa fa-shopping-cart fa-2x"></i> Cart.ly</div>
        <div><button className="cart">Your Cart</button>0</div>
      </div>
    );
  }
}

export default Greeting;
