import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist'
import rootReducer from './root-reducer';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './root-saga'

const sagaMiddleware=createSagaMiddleware()
const middlewares = [sagaMiddleware];
if ( process.env.NODE_ENV === 'development' ) {
  middlewares.push(logger);
}

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga)
// export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
//after reloading page store is persisted
export const persistor = persistStore( store );


