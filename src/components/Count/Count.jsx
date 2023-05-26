import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi';

const Count = ({amount}) => {

  return (
    <div>
      <button type="button">
        <BiLeftArrowCircle />
      </button>
      <span>{amount}</span>
      <button type="button">
        <BiRightArrowCircle />
      </button>
    </div>
  );
};

export default Count;
