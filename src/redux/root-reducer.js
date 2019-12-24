import { combineReducers } from 'redux';
import directoryReducer from './directory/directory.reducer'
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shopReducer from './shop/shop-reducer';
//use localstorage as default storage from lib

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']//After reloading cart items persist
};

const rootReducer = combineReducers({
	user: userReducer,
  cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});    

export default persistReducer(persistConfig, rootReducer);

