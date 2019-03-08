import { combineReducers } from 'redux';
import cart from './CartReducer';
import shelf from './ShelfReducer';
import wishes from './WishListReducer';
import chicken from './ChickenReducer';
import beef from './BeefReducer';

const rootReducer = combineReducers({
  cart, // shorthand for cart: cart
  shelf,
  wishes,
  chicken,
  beef
})

export default rootReducer;
