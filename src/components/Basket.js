import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  removeItem,
  addOne,
  removeOne,
  resetSingleProduct,
} from '../redux/actions';

function Basket(props) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.basket);

  return (
    <section className="container column">
      {cart.map((item) => (
        <>
          <div className="inner-container" key={item.id}>
            <div className="image">
              <img src={item.img} alt="product" width="75" />
            </div>
            <div>
              <div>Price: £{item.price}</div>
              <div>Name: {item.name}</div>
              <div>Quantity: {item.quantity}</div>
            </div>
          </div>
          <div>
            <button onClick={() => dispatch(addOne(item.id))}>+ 1 More</button>
            <button onClick={() => dispatch(removeOne(item.id))}>- 1</button>
            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </button>
          </div>
        </>
      ))}
      <button
        onClick={() => {
          dispatch(resetSingleProduct());
          props.history.push('/');
        }}
        className="back">
        Back to List
      </button>
    </section>
  );
}

export default withRouter(Basket);
