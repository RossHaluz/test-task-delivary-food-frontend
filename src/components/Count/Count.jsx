import { useState } from 'react';
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'; 
import { BtnCount, CountWrrapper } from './Count.styled';

const Count = ({amount, setTotalPrice, price}) => {
  const [count, setCount] = useState(amount);

  const increment = () => {
    setCount(prev => prev + 1)
setTotalPrice(amount * price)
  }

  const decrement = () => {
    if(count === 0) {
      return
    }
    setCount(prev => prev - 1)
    const totalPrice = amount * price;
    setTotalPrice(totalPrice)
  }

  return (
    <CountWrrapper>
      <BtnCount type="button" onClick={decrement}>
        <BiLeftArrowCircle />
      </BtnCount>
      <span>{count}</span>
      <BtnCount type="button" onClick={increment}>
        <BiRightArrowCircle />
      </BtnCount>
    </CountWrrapper>
  );
};

export default Count;
