import { NavLink } from 'react-router-dom';
import { AuthWrappre, IconCart, QuantityCart } from './AuthNav.styled';
import { selectOrders } from 'redux/orders/selectors';
import { useSelector } from 'react-redux';

const AuthNav = () => {
const quantity = useSelector(selectOrders).length;

    return <AuthWrappre>
        <NavLink to="cart">
            <IconCart/>  
            <QuantityCart>{quantity}</QuantityCart>
            </NavLink>
    </AuthWrappre>
}

export default AuthNav