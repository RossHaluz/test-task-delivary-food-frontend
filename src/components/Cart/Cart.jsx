import CartForm from 'components/CartForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectOrders,
  selectSuccessOrder,
  selectTotalPrice,
} from 'redux/orders/selectors';
import {
  CartContainer,
  CartOrdersList,
  CartOrderItem,
  CartOrderDesc,
  CartOrderDescContainer,
  OrderDesc,
  CartOrderDescWrrapper,
  BtnDeleteOrder,
  TotalPrice,
} from './Cart.styled';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { deleteItemInCart } from 'redux/orders/slice';
import { NavLink, useNavigate } from 'react-router-dom';
import Count from 'components/Count';

const Cart = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const totalPrice = useSelector(selectTotalPrice);
  const successOrder = useSelector(selectSuccessOrder);
  const navigate = useNavigate();

  return (
    <>
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
              const totalAmount = amount * price;
              return (
                <CartOrderItem key={id}>
                  <img src={img} alt={title} />
                  <CartOrderDescContainer>
                    <CartOrderDescWrrapper>
                      <CartOrderDesc>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                        <Count amount={amount} price={price} />
                      </CartOrderDesc>
                      <BtnDeleteOrder
                        type="button"
                        onClick={() => dispatch(deleteItemInCart(id))}
                      >
                        <RiDeleteBin6Line />
                      </BtnDeleteOrder>
                    </CartOrderDescWrrapper>
                    <OrderDesc>
                      <strong>Price:</strong> {totalAmount}
                    </OrderDesc>
                  </CartOrderDescContainer>
                </CartOrderItem>
              );
            })}
            <TotalPrice>Total price: {totalPrice}</TotalPrice>
          </CartOrdersList>
        )}
      </CartContainer>
      {successOrder && navigate('/success-order', { replace: true })}
    </>
  );
};

export default Cart;
