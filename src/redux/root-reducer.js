import { combineReducers } from 'redux';

import cartReducer from './cart/cart.reducer';
import authReducer from './auth/auth.reducer';

export default combineReducers({
    auth: authReducer,
    cart: cartReducer,
});
