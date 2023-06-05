import CartForm from 'components/CartForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  // selectAmountItemPrice,
  selectCartQuantity,
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
  // OrderDesc,
  CartOrderDescWrrapper,
  BtnDeleteOrder,
  TotalPrice,
} from './Cart.styled';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { getCartTotal, removeItem } from 'redux/orders/slice';
import { NavLink, useNavigate } from 'react-router-dom';
import Count from 'components/Count';
import { useEffect } from 'react';

const Cart = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const totalPrice = useSelector(selectTotalPrice);
  const successOrder = useSelector(selectSuccessOrder);
  const quantity = useSelector(selectCartQuantity);
  // const amountItemPrice = useSelector(selectAmountItemPrice);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

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
            {orders &&
              orders.map(({ id, img, title, price, desc, count }) => {
                return (
                  <CartOrderItem key={id}>
                    <img src={img} alt={title} />
                    <CartOrderDescContainer>
                      <CartOrderDescWrrapper>
                        <CartOrderDesc>
                          <h3>{title}</h3>
                          <p>{desc}</p>
                          <Count count={count} id={id} />
                        </CartOrderDesc>
                        <BtnDeleteOrder
                          type="button"
                          onClick={() => dispatch(removeItem(id))}
                        >
                          <RiDeleteBin6Line />
                        </BtnDeleteOrder>
                      </CartOrderDescWrrapper>
                      {/* <OrderDesc>
                        <strong>Price:</strong> {amountItemPrice}
                      </OrderDesc> */}
                    </CartOrderDescContainer>
                  </CartOrderItem>
                );
              })}
            <p>Quantity: {quantity}</p>
            <TotalPrice>Total price: {totalPrice}</TotalPrice>
          </CartOrdersList>
        )}
      </CartContainer>
      {successOrder && navigate('/success-order', { replace: true })}
    </>
  );
};

export default Cart;
