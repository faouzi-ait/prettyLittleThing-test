import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  getSingleProduct,
  resetSingleProduct,
  addItem,
  removeItem,
  addOne,
  removeOne,
} from '../redux/actions';

function Details(props) {
  const dispatch = useDispatch();
  const [isIncluded, setIncluded] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const { product } = useSelector((state) => state.singleProduct);
  const { cart } = useSelector((state) => state.basket);
  const param = useParams();

  useEffect(() => {
    dispatch(getSingleProduct(param.id));
  }, [param.id, dispatch]);

  useEffect(() => {
    const productInCart = cart.find((item) => item.id === product.id);
    setCurrentProduct(productInCart);

    if (productInCart) {
      setIncluded(true);
    } else {
      setIncluded(false);
    }
  }, [cart, product?.id, dispatch]);

  return (
    <section className="detail-page">
      <img src={product?.img} alt="product" width="200" />
      <div>
        <div className="detail-name">{product?.name}</div>
        <div className="detail-colour">
          <span>Color: </span> {product?.colour}
        </div>
        <div className="detail-price">
          <span>Price: </span> {product?.price}
        </div>
      </div>

      {isIncluded && <div>Quantity in cart: {currentProduct?.quantity}</div>}

      {!isIncluded ? (
        <button onClick={() => dispatch(addItem(product))}>Add 1</button>
      ) : (
        <button onClick={() => dispatch(addOne(product.id))}>+ 1 More</button>
      )}

      {isIncluded && (
        <>
          <button onClick={() => dispatch(removeOne(product.id))}>- 1</button>
          <button onClick={() => dispatch(removeItem(product.id))}>
            Remove
          </button>
        </>
      )}

      <button
        onClick={() => {
          dispatch(resetSingleProduct());
          props.history.push('/');
        }}
        className="back">
        Back to List
      </button>
      <button onClick={() => props.history.push('/cart')} className="back">
        Go to cart page
      </button>
    </section>
  );
}

export default withRouter(Details);
