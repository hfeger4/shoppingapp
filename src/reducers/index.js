import { combineReducers } from 'redux';
import ProductsReducer from './reducer_products';
import ActiveProduct from './reducer_active_product';
import CartReducer from './reducer_cart';

const rootReducer = combineReducers({
  products: ProductsReducer,
  activeProduct: ActiveProduct
});

export default rootReducer;
