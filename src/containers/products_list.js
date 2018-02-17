import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectProduct } from '../actions/index';

class ProductsList extends Component{
  renderList(){
    return this.props.products.map((product) => {
      const url = require(`../images/${product.filename}`);
      const priceDisplay= "$" + product.price/100;
      return(
        <li className="polaroid"
            key={product.name + product.price}>
            <img className="images" src={url} alt="img"/>
            <div className="name">
              <div>{product.name}</div>
              <div>{priceDisplay}</div>
              <button onClick={ () => this.props.selectProduct(product)}>Add to Cart</button>
            </div>
        </li>
      );
    });
  }

  render(){
    return(
      <div>
        <h2>Shop our featured collection</h2>
        <ul className="list-pictures">
        {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectProduct}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
