import { combineReducers } from 'redux';
import directoryReducer from './directory/directory.reducer'
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']//Aftwer reloading cart items persist
};

const rootReducer = combineReducers({
	user: userReducer,
  cart: cartReducer,
	directory: directoryReducer,
});    

export default persistReducer(persistConfig, rootReducer);

