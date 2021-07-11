import { all } from 'redux-saga/effects';
import { getHomePageProductSaga } from './redux/productSagas';
import { getSingleProductSaga } from './redux/singleProductSaga';

export function* sagas() {
  yield all([getHomePageProductSaga(), getSingleProductSaga()]);
}
