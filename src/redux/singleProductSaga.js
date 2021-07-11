import { call, takeEvery, put } from 'redux-saga/effects';
import { getSingleProduct } from '../api/request';

import {
  loadingSingleProduct,
  getSingleProductSuccess,
  getSingleProductFailure,
} from './actions';

import { GET_SINGLE_PRODUCT } from './constants';

export function* getSingleProductItem({ payload }) {
  yield put(loadingSingleProduct(true));

  const result = yield call(getSingleProduct, payload);

  if (result.error) {
    yield put(loadingSingleProduct(false));
    const { data, status } = result.error.response;
    yield put(getSingleProductFailure({ data, status }));
  } else {
    yield put(getSingleProductSuccess(result.data));
    yield put(loadingSingleProduct(false));
  }
  yield put(loadingSingleProduct(false));
}

export function* getSingleProductSaga() {
  yield takeEvery(GET_SINGLE_PRODUCT, getSingleProductItem);
}
