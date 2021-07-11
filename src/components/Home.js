import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getHomePageProducts } from '../redux/actions';

function Home(props) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getHomePageProducts());
  }, [dispatch]);

  return (
    <section>
      {products?.map((item) => (
        <div
          key={item.id}
          className="container"
          onClick={() => props.history.push(`/details/${item.id}`)}>
          <img src={item.img} alt="product" width="100" />
          <div style={{ marginLeft: '2rem' }}>
            <div className="name">{item.name}</div>
            <div className="colour">
              <span>Color: </span> {item.colour}
            </div>
            <div className="price">
              <span>Price: </span> {item.price}
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={() => props.history.push('/cart')}
        className="back left-align">
        Go to cart page
      </button>
    </section>
  );
}

export default withRouter(Home);
