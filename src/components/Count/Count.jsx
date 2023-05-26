import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi';

const Count = () => {
  return (
    <div>
      <button type="button">
        <BiLeftArrowCircle />
      </button>
      <span>0</span>
      <button type="button">
        <BiRightArrowCircle />
      </button>
    </div>
  );
};

export default Count;
