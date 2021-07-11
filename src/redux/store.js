import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { products, singleProduct, basket } from './reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from 'redux-saga';
import { sagas } from '../rootSaga';

const combinedReducers = combineReducers({
  products,
  singleProduct,
  basket,
});

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [singleProduct],
};

export const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(logger, sagaMiddleware),
    // ADD CONDITION FOR DEV ENV
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(sagas);
export const persistor = persistStore(store);
