import { useState } from 'react';
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'; 

const Count = ({amount}) => {
  const [count, setCount] = useState(amount);

  const increment = () => {
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    if(count === 0) {
      return
    }
    setCount(prev => prev - 1)
  }

  return (
    <div>
      <button type="button" onClick={decrement}>
        <BiLeftArrowCircle />
      </button>
      <span>{count}</span>
      <button type="button" onClick={increment}>
        <BiRightArrowCircle />
      </button>
    </div>
  );
};

export default Count;
