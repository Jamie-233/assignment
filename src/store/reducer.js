import { combineReducers } from 'redux-immutable';
import { reducer as productsReducer } from '../common/products/store';

const reducer = combineReducers({
  products: productsReducer
})

export default reducer;
