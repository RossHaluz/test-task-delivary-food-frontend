import CartForm from 'components/CartForm';
import { useSelector } from 'react-redux';
import { selectOrders } from 'redux/orders/selectors';
import { CartContainer, CartOrdersList, CartOrderItem, CartOrderDesc, CartOrderDescContainer, OrderDesc} from './Cart.styled';


const Cart = () => {
  const orders = useSelector(selectOrders);
  console.log(orders);

  return (
   <CartContainer>
     <CartForm/>
    <CartOrdersList>
      {orders.map(({ id, img, title, price, desc }) => {
        return (
          <CartOrderItem key={id}>
            <img src={img} alt={title} />
            <CartOrderDescContainer>
            <CartOrderDesc>
            <h3>{title}</h3>
            <p>{desc}</p>
            </CartOrderDesc>
            <OrderDesc><strong>Price:</strong> {price}</OrderDesc>
            </CartOrderDescContainer>
        
          </CartOrderItem>
        );
      })}
    </CartOrdersList>
   </CartContainer>
  );
};

export default Cart;
