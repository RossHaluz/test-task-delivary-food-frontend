import { useState } from 'react';
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi';
import { BtnCount, CountWrrapper } from './Count.styled';
import { useDispatch } from 'react-redux';
import {
  dincreaseItemQuantity,
  increaseItemQuantity,
} from 'redux/orders/slice';

const Count = ({ count, id }) => {
  const [amount, setAmount] = useState(count);
  const dispatch = useDispatch();

  const increment = () => {
    setAmount(prev => prev + 1);
    dispatch(increaseItemQuantity(id));
  };

  const decrement = () => {
    if (amount === 1) {
      return;
    }
    setAmount(prev => prev - 1);
    dispatch(dincreaseItemQuantity(id));
  };

  return (
    <CountWrrapper>
      <BtnCount type="button" onClick={decrement}>
        <BiLeftArrowCircle />
      </BtnCount>
      <span>{amount}</span>
      <BtnCount type="button" onClick={increment}>
        <BiRightArrowCircle />
      </BtnCount>
    </CountWrrapper>
  );
};

export default Count;
