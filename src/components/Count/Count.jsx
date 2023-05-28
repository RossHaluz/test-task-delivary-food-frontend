import { useState } from 'react';
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'; 
import { BtnCount, CountWrrapper } from './Count.styled';

const Count = ({amount, price}) => {
  const [count, setCount] = useState(amount);

  const increment = () => {
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    if(count === 1) {
      return
    }
    setCount(prev => prev - 1)
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
