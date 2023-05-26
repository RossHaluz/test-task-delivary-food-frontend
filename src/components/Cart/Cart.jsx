import CartForm from 'components/CartForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrders } from 'redux/orders/selectors';
import {
  CartContainer,
  CartOrdersList,
  CartOrderItem,
  CartOrderDesc,
  CartOrderDescContainer,
  OrderDesc,
  CartOrderDescWrrapper,
  BtnDeleteOrder,
} from './Cart.styled';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { deleteItemInCart } from 'redux/orders/slice';
import { NavLink } from 'react-router-dom';
import Count from 'components/Count';

const Cart = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);

  return (
    <CartContainer>
      <CartForm />
      {orders.length === 0 ? (
        <div>
          <p>Корзина пуста...</p>
          <NavLink to="/">Перейти на каталог</NavLink>
        </div>
      ) : (
        <CartOrdersList>
          {orders.map(({ id, img, title, price, desc, amount }) => {
            return (
              <CartOrderItem key={id}>
                <img src={img} alt={title} />
                <CartOrderDescContainer>
                  <CartOrderDescWrrapper>
                    <CartOrderDesc>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                      <Count amount={amount}/>
                    </CartOrderDesc>
                    <BtnDeleteOrder
                      type="button"
                      onClick={() => dispatch(deleteItemInCart(id))}
                    >
                      <RiDeleteBin6Line />
                    </BtnDeleteOrder>
                  </CartOrderDescWrrapper>
                  <OrderDesc>
                    <strong>Price:</strong> {price}
                  </OrderDesc>
                </CartOrderDescContainer>
              </CartOrderItem>
            );
          })}
        </CartOrdersList>
      )}
    </CartContainer>
  );
};

export default Cart;
