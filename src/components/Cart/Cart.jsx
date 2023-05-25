import { useSelector } from 'react-redux';
import { selectOrders } from 'redux/orders/selectors';

const Cart = () => {
  const orders = useSelector(selectOrders);
  console.log(orders);

  return (
    <ul>
      {orders.map(({ id, img, title, price, desc }) => {
        return (
          <li key={id}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
            <p>{price}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cart;
